import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { StringDecoder } from "string_decoder";

export class AddHotelDto {
    
    @IsString()
    @ApiProperty()
    name: string

    @IsString()
    @ApiProperty()
    location?: string
    
    @IsString()
    @ApiProperty()
    country: string

    @IsString()
    @ApiProperty()
    city: string

    @IsString()
    @ApiProperty()
    description?: string

    @ApiProperty()
    rating?: number

    @IsString()
    @ApiProperty()
    url: string

    @IsString()
    @ApiProperty()
    imageUrl: string
}