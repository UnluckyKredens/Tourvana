import { Body, Controller, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto) {
        return this.authService.loginUser(loginDto);
        
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.registerUser(registerDto);
    }
}
