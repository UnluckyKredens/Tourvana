import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { Attraction } from 'src/entities/trip/attraction.entity';

@Controller('attraction')
export class AttractionController {

    constructor(private attractionService: AttractionService) {}

    @Get('seed')
    seedAttractions(@Query('country') country: string, @Query('city') city: string) {
        return this.attractionService.seedAttractions(country, city)
    }

    @Post('add')
    @HttpCode(HttpStatus.OK)
    addAttraction(@Body() attractions: Attraction) {
        return this.attractionService.addAttractions(attractions)
    }

    @Get('for/')
    getAttractionsFor(@Query('city') city: string, @Query('country') country?: string) {
        return this.attractionService.getAttractionsFor(city, country)
    }
}
