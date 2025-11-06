import { ApiProperty } from "@nestjs/swagger";

export class AddAttratcionDto {
        
    @ApiProperty()
    name: string;

    @ApiProperty()
    location: string;
    
    @ApiProperty()
    country: string;

    @ApiProperty()
    city: string;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    url: string

}