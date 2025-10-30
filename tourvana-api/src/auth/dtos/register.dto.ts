import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsPhoneNumber, IsString, Length, MinLength } from "class-validator";

export class RegisterDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    surname: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @Length(9, 12)
    phoneNumber?: string;

    @ApiProperty()
    @IsString()
    password: string;
}