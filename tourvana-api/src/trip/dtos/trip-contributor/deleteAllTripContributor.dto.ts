import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsString } from "class-validator";

export class DeleteAllTripContriburorDto {
    @IsUUID()
    @ApiProperty()
    tripId: string;       
}