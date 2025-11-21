import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Hotel } from 'src/entities/trip/hotel.entity';
import { Like, Repository } from 'typeorm';
import { AddHotelDto } from './dtos/addHotelDto';

@Injectable()
export class HotelService {

    constructor(@InjectRepository(Hotel) private hotelRepo: Repository<Hotel>) { }

    async getHotelList() {
        return await this.hotelRepo.find();
    }

    async getHotelsOfDestination(city: string) {
        await Logger.log(city)
        return await this.hotelRepo.find({where: [{location: Like(`%${city}%`)}, {city: Like(`%${city}%`)}, {country: Like(`%${city}%`)}]})
    }

    async getOneHotel(hotelId: string) {
        return await this.hotelRepo.find({where: {hotelId: hotelId}})
    }

    async addHotel(hotel: AddHotelDto) {
        var req = await this.hotelRepo.create({...hotel})
        await this.hotelRepo.save(req)
        return this.hotelRepo.findOneByOrFail({...hotel}).then(x => {return x?.hotelId})
    }
}
