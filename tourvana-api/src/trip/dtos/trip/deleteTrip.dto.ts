import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class DeleteTripDto {
    @IsUUID()
    @IsString()
    @ApiProperty()
    tripId: string;   
}