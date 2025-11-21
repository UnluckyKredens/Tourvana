import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import path from "path";
import { Hotel } from "src/entities/trip/hotel.entity";
import { Repository } from "typeorm";
import * as fs from 'fs';
import { Attraction } from "src/entities/trip/attraction.entity";


@Injectable()
export class AttractionSeeder {
    constructor(@InjectRepository(Attraction) private attractionRepo: Repository<Attraction>) {}

    async seedAttractions() {
        const filePath = path.join(__dirname, '../data', 'attractions.json');
        const fileContext = fs.readFileSync(filePath, 'utf-8');
        const data: Partial<Hotel>[] = JSON.parse(fileContext);
        try {
        const attractions = data.map((attraction) => 
            this.attractionRepo.create({...attraction})
        )
        await this.attractionRepo.upsert(attractions, ['location']);
        await Logger.log(`${attractions.length} attractions saved to base`)
        }
        catch(err) {
            Logger.log(err)
        }

        
    }
}