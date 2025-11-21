import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import path from "path";
import { Hotel } from "src/entities/trip/hotel.entity";
import { Repository } from "typeorm";
import * as fs from 'fs';

@Injectable()
export class HotelSeeder {
    constructor(@InjectRepository(Hotel) private hotelRepo: Repository<Hotel>) {}

    async seedHotels() {
        const filePath = path.join(__dirname, '../data', 'hotels.json');
        const fileContext = fs.readFileSync(filePath, 'utf-8');
        const data: Partial<Hotel>[] = JSON.parse(fileContext);
        try {
        const hotels = data.map((hotel) => 
            this.hotelRepo.create({...hotel})
        )
        await this.hotelRepo.upsert(hotels, ['name']);
        await Logger.log(`${hotels.length} hotels saved to base`)
        }
        catch(err) {
            Logger.log(err)
        }

        
    }
}