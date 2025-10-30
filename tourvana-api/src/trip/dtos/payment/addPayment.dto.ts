import { ApiProperty } from "@nestjs/swagger";

export class AddPaymentDto {

    @ApiProperty()
    tripId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    date?: Date;

}