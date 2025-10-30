import { ApiProperty } from "@nestjs/swagger";

export class AddTripContributorDto {
 
    @ApiProperty()
    tripId: string;

    @ApiProperty()
    userId: string;

    @ApiProperty({enum: ['owner', 'contributor'], default: 'contributor'})
    role: 'owner' | 'contributor';
}