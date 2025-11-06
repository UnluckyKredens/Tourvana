import { Body, Controller, Delete, Get, Logger, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CreateTripDto } from './dtos/trip/createTrip.dto';
import { TripService } from './trip.service';
import { ApiBearerAuth, ApiHeader, ApiSecurity } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { DeleteTripDto } from './dtos/trip/deleteTrip.dto';

@Controller('trip')
@ApiBearerAuth('bearer')
@UseGuards(JwtGuard)
export class TripController {

    constructor(private readonly tripService: TripService) {}
    @Post('create')
    createTrip(@Req() req, @Body() createTripDto: CreateTripDto) {
        return this.tripService.createTrip(req.user.userId, createTripDto);
    }

    @Delete('delete')
    deleteTrip(@Req() req, @Body() tripId: DeleteTripDto) {
        return this.tripService.deleteTrip(tripId.tripId, req.user.userId);
    }

    @Get('id/:id')
    getTripById(@Req() req, @Param('id') id: string ) {
        return this.tripService.getTripById(req.user.userId, id)
    }
}
