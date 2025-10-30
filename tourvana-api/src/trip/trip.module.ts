import { Module } from '@nestjs/common';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from 'src/entities/trip.entity';
import { Hotel } from 'src/entities/trip/hotel.entity';
import { Payment } from 'src/entities/trip/payment.entity';
import { Attraction } from 'src/entities/trip/attraction.entity';
import { JwtGuard } from 'src/auth/jwt.guard';
import { AuthModule } from 'src/auth/auth.module';

import { TripContributor } from 'src/entities/relations/tripContributor.entity';
import { TripAttraction } from 'src/entities/relations/tripAttraction.entity';
import { User } from 'src/entities/user.entity';
import { TripContributorController } from './trip-contributor/trip-contributor.controller';
import { TripContributorService } from './trip-contributor/trip-contributor.service';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { AttractionController } from './attraction/attraction.controller';
import { HotelController } from './hotel/hotel.controller';
import { AttractionService } from './attraction/attraction.service';
import { HotelService } from './hotel/hotel.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Trip, TripContributor, TripAttraction, Hotel, Payment, Attraction, User]),
    AuthModule
],
  controllers: [TripController, TripContributorController, PaymentController, AttractionController, HotelController],
  providers: [TripService, TripContributorService, PaymentService, AttractionService, HotelService]
})
export class TripModule {}
