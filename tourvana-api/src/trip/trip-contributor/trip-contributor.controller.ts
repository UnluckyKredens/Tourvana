import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TripContributorService } from './trip-contributor.service';
import { JwtGuard } from 'src/auth/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { DeleteAllTripContriburorDto } from '../dtos/trip-contributor/deleteAllTripContributor.dto';
import { AddTripContributorDto } from '../dtos/trip-contributor/addTripContributor.dto';
import { editTripContributorDto } from '../dtos/trip-contributor/editTripContributor.dto';

@Controller('trip-contributor')
@ApiBearerAuth('bearer')
@UseGuards(JwtGuard)
export class TripContributorController {

    constructor(private tcService: TripContributorService) {}

    @Get('contributors/:tripId')
    findContributorsByTripId(@Param('tripId') tripId: string) {
        return this.tcService.findContbutorsByTripId(tripId);
    }

    @Get('contributor/:tripId/:userId')
    findOneContributor(@Param('tripId') tripId: string, @Param('userId') userId: string) {
        return this.tcService.findOneContriburor(tripId, userId);
    }

    @Post('add')
    addContributor(@Body() body: AddTripContributorDto) {
        return this.tcService.addContributor(body);
    }

    @Patch('set-role')
    updateContributor(@Body() body: editTripContributorDto) {
        return this.tcService.updateContributor(body);
    }

    @Delete('delete/contributor/:tripContributorId')
    deleteOneContributor(@Req() req, @Param('tripContributorId') tripContributorId: string) {
        return this.tcService.deleteOneContributor(tripContributorId, req.user.userId);
    }

    @Delete('delete/contributor/all/:tripId')
    deleteAllContributors(@Req() req, @Param('tripId') tripId: string) {
        return this.tcService.deleteAllContributors(tripId, req.user.userId);
    }


}
