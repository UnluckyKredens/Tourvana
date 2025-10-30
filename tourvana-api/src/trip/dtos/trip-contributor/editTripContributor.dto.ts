import { ApiProperty } from "@nestjs/swagger";

export class editTripContributorDto {
     
        @ApiProperty()
        tripId: string;
    
        @ApiProperty()
        userId: string;
    
        @ApiProperty({enum: ['owner', 'contributor'], default: 'contributor'})
        role: 'owner' | 'contributor';
}