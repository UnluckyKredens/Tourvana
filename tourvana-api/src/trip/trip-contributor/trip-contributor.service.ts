import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripContributor } from 'src/entities/relations/tripContributor.entity';
import { Trip } from 'src/entities/trip.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { AddTripContributorDto } from '../dtos/trip-contributor/addTripContributor.dto';
import { editTripContributorDto } from '../dtos/trip-contributor/editTripContributor.dto';

@Injectable()
export class TripContributorService {
    constructor(
        @InjectRepository(TripContributor) private tcRepo: Repository<TripContributor>,
        @InjectRepository(Trip) private tripRepo: Repository<Trip>,
        @InjectRepository(User) private userRepo: Repository<User>
    ) {}


    async validateOwner(userId: string, tripId: string): Promise<boolean> {
        var isOwner = await this.tcRepo.findOneBy({trip: {tripId} as Trip, user: {userId} as User, role: 'owner'});
        return await isOwner ? true : false;
    }
    

    findContbutorsByTripId(tripId: string) {
        return this.tcRepo.findBy({trip: {tripId} as Trip});
    }

    findOneContriburor(tripId: string, userId: string) {
        return this.tcRepo.findOneBy({trip: {tripId} as Trip, user: {userId} as User});
    }


    async addContributor(body: AddTripContributorDto) {
        const newContributor = await this.tcRepo.create({trip: {tripId: body.tripId} as Trip, user: {userId: body.userId} as User, role: body.role});
        await this.tcRepo.save({...newContributor});
        return newContributor.tripContributorId;
    }

     async updateContributor(body: editTripContributorDto) {
        const record = await this.tcRepo.findOneBy({trip: {tripId: body.tripId} as Trip, user: {userId: body.userId} as User});
        if(!record) {
            throw new InternalServerErrorException('No such contributor');
        }
        this.tcRepo.update(record.tripContributorId, {...body});
        await this.tcRepo.save(record);
        return `Contributor with id: ${record.tripContributorId} updated successfully`; 
     }

    async deleteOneContributor(tripContributorId: string, userId: string) {
        return await this.tcRepo.delete({tripContributorId, user: {userId} as User});
    }

    async deleteAllContributors(tripId: string, userId: string) {
        try {
            var records = (await this.tcRepo.findBy({trip: {tripId} as Trip})).length;
            if(!this.validateOwner(userId, tripId)) {
                throw new ForbiddenException('Only owner can delete trip contributors');
            }
            else {
                await this.tcRepo.delete({trip: {tripId} as Trip});
                return `${records} Contributors deleted successfully `;
            }
        }catch(error) {
            throw new InternalServerErrorException(error);
        }
    } 
}
