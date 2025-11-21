import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attraction } from 'src/entities/trip/attraction.entity';
import { Hotel } from 'src/entities/trip/hotel.entity';
import { HotelSeeder } from './seeders/hotel.seeder';
import { AttractionService } from 'src/trip/attraction/attraction.service';
import { AttractionSeeder } from './seeders/attraction.seeder';

@Module({
    imports: [
        TypeOrmModule.forFeature([Hotel, Attraction])
    ],
    providers: [HotelSeeder, AttractionSeeder]
})
export class SeedModule {}
