import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { AddHotelDto } from './dtos/addHotelDto';
import { HotelService } from './hotel.service';
import { hostname } from 'os';

@Controller('hotel')

export class HotelController {

    constructor(private hotelService: HotelService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    addHotel(@Body() addHotelDto: AddHotelDto) {
        return this.hotelService.addHotel(addHotelDto)
    }

    @Get('one/:hotelId')
    @HttpCode(HttpStatus.OK)
    getOneHotel(@Query('hotelId') hotelId: string) {
        return this.hotelService.getOneHotel(hotelId)
    }

    @Get('/destination/:city')
    async getHotelsOfDestination(@Param('city') city: string) {
        return await this.hotelService.getHotelsOfDestination(city)
    }

    @Get()
    getHotelList() {
        return this.hotelService.getHotelList();
    }

    @Patch()
    updateHotel() {

    }

    @Delete()
    deleteHotel() {

    }
}
