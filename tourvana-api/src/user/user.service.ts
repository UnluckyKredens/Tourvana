import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripContributor } from 'src/entities/relations/tripContributor.entity';
import { User } from 'src/entities/user.entity';
import { JoinTable, Repository } from 'typeorm';
import { ReturnUserDto } from './dtos/returnUserDto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(TripContributor) private tcRepo: Repository<TripContributor>
    ) { }

    async getUserById(id: string) {
        try {
            var req = await this.userRepo.findOneByOrFail({ userId: id });
            let res: ReturnUserDto = {
                name: req.name,
                surname: req.surname,
                email: req.email,
                phoneNumber: req.phoneNumber
            }
            return res
        }
        catch {
            return new NotFoundException("User not found");
        }
    }

    async getUserTrips(id: string) {
        try {
            if (!id) {
                throw new UnauthorizedException("No user defined")
            }
            var res = (await this.tcRepo.find({ where: { userId: id }, relations: ['trip'] })).filter(t => {
                const start = t.trip?.endDate ? new Date(t.trip.endDate).getTime() : 0
                return start + 2 > Date.now()
            })
            return res
        } catch (error) {
            return error
        }
    }

    async getRecentAcivities(id: string) {
        try {
            let activities: any = [] 
            activities.length = 5
            var res = (await this.tcRepo.find({ where: { userId: id }, relations: ['trip'] })).sort((a,b) =>  new Date(b.trip.endDate!).getTime() - new Date(a.trip.endDate!).getTime()).filter(t => {
                const end = t.trip?.endDate ? new Date(t.trip.endDate).getTime() : 0
                Logger.log(t)
                if(end > Date.now()) {
                    activities.push({...t})
                }
            })
            return res
        } catch (e) {
            return e
        }
    }
}
