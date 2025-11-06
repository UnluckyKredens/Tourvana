import { BadRequestException, HttpException, HttpStatus, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import  * as argon2 from 'argon2';
import { BadRequestError } from 'openai';
import { ApiBadRequestResponse } from '@nestjs/swagger';

@Injectable()
export class AuthService {

    constructor(private jwt: JwtService, @InjectRepository(User) private userRepo: Repository<User>) {}

    async registerUser(user: RegisterDto) {
        const emailExists = await this.userRepo.findOneBy({email: user.email});
        if(emailExists) {
            throw new BadRequestException("Email already in use");
        }
        const phoneExists = await this.userRepo.findOneBy({phoneNumber: user.phoneNumber});
        if(phoneExists) {
            throw new BadRequestException("Phone is in use")
        }
        const passwordHash = await argon2.hash(user.password);
        const newUser = {...user, password: passwordHash};
        await this.userRepo.create(newUser);
        await this.userRepo.save(newUser);
        return {message: 'User registered successfully'};
    } 

    async loginUser(req: LoginDto) {
        const user = await this.userRepo.findOneBy({email: req.email}); 
        if (!user) {
            throw new BadRequestException("Uzytkownik nie istnieje");
        }
        const passwordValid = await argon2.verify(user.password, req.password);
        if (!passwordValid) {
            throw new UnauthorizedException("Niepoprawny email lub haslo");
        }
        const token = await this.jwt.signAsync({ userId: user.userId });
        return token;
    }

    async findUserByEmail(email: string) {
        return await this.userRepo.findOneBy({email: email}); 
    }

    async validateBearer(token: string) {
        if(!token) {
            throw new UnauthorizedException('No token');
        }
        try {
            const payload = await this.jwt.verifyAsync<{userId: string}>(token);

            return {userId: (await payload).userId};
        }
        catch(error) {
            throw new UnauthorizedException(error?.message ?? 'Invalid token');
        }
    }
}
