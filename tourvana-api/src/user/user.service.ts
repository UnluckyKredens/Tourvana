import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripContributor } from 'src/entities/relations/tripContributor.entity';
import { User } from 'src/entities/user.entity';
import { JoinTable, Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(TripContributor) private tcRepo: Repository<TripContributor>
    ) {}

    async getUserById(id: string) {
        try {
        var res = await this.userRepo.findOneByOrFail({userId: id});
        return res
        }
        catch{
            return new NotFoundException("User not found");
        }
    }

   async getUserTrips(id: string) {
        try {
            Logger.log(id)
            if(!id) {
                throw new UnauthorizedException("No user defined")
            }
            
            var res = (await this.tcRepo.find({where: {userId: id},  relations: ['trip']})).filter(t => {
                const start = t.trip?.startDate ? new Date(t.trip.startDate).getTime() : 0
                return start > Date.now()
            })
            return res
        }catch(error) {
            return error
        }
    }
}
