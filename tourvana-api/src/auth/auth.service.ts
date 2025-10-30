import { BadRequestException, HttpException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import  * as argon2 from 'argon2';

@Injectable()
export class AuthService {

    constructor(private jwt: JwtService, @InjectRepository(User) private userRepo: Repository<User>) {}

    async registerUser(user: RegisterDto) {
        try {
        const emailExists = await this.userRepo.findOneBy({email: user.email});
        if(emailExists?.email) {
            throw new BadRequestException("Email already in use");
        }
        const passwordHash = await argon2.hash(user.password);
        const newUser = {...user, password: passwordHash};
        await this.userRepo.create(newUser);
        await this.userRepo.save(newUser);
        return 'User registered successfully';
        }catch(error) {
            throw error;
        }

    }

    async loginUser(req: LoginDto) {
        try{
        const user = await this.userRepo.findOneBy({email: req.email}); 
        if (!user) {
            throw new HttpException("No Email", 400);
        }
        const passwordValid = await argon2.verify(user.password, req.password);
        if (!passwordValid) {
            throw new HttpException("Bad Request", 400);
        }
        const token = await this.jwt.signAsync({ userId: user.userId });
        return token;
        }catch(error) {
            return error;
        }

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
