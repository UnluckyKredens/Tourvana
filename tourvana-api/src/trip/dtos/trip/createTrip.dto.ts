import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { Hotel } from "src/entities/trip/hotel.entity";

export class CreateTripDto {

    @ApiProperty()
    name: string;
    
    @ApiProperty()
    destination: string;

    @ApiProperty()
    startDate?: Date;

    @ApiProperty()
    endDate?: Date;

    @ApiProperty()
    @IsNumber({maxDecimalPlaces: 2})
    budget?: number;

    @ApiProperty()
    hotel?: Hotel;

    @ApiProperty()
    attractionsIds?: string[];
}