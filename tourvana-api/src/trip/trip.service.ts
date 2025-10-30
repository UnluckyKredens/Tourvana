import { HttpStatus, Injectable, InternalServerErrorException, Logger, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from 'src/entities/trip.entity';
import { Repository } from 'typeorm';
import { CreateTripDto } from './dtos/trip/createTrip.dto';
import { TripContributorService } from './trip-contributor/trip-contributor.service';

@Injectable()

export class TripService {
    constructor(@InjectRepository(Trip) private tripRepo: Repository<Trip>, private tcService: TripContributorService) {}

    async createTrip(userId: string, trip: CreateTripDto) {
        try {
            const newTrip =  await this.tripRepo.create({...trip});
            await this.tripRepo.save(newTrip);
            this.tcService.addContributor({tripId: newTrip.tripId, userId: userId, role: 'owner'});
            return `Defined trip with id: ${newTrip.tripId}`;
        }catch(error) {
            throw new InternalServerErrorException('Could not create trip ' + error?.message);
        }
    }

    async deleteTrip(tripId: string, userId: string) {
        try {
            // await this.tcService.deleteAllContributors(tripId, userId);
            await this.tripRepo.delete({tripId});
            return `Trip with id: ${tripId} deleted successfully`;
        }catch(error) {
            throw new InternalServerErrorException('Could not delete trip ' + error?.message);
        }
    }
}
