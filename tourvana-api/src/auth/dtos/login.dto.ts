import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    
    @ApiProperty({default: 's@s.ss'})
    @IsEmail()
    email: string;
    
    @ApiProperty({default: 's'})
    @IsString()
    password: string;
}