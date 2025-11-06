import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UserService } from './user.service';

@Controller('user')
@ApiBearerAuth('bearer')
@UseGuards(JwtGuard)
export class UserController {

    constructor(private userService: UserService) {}
    @Get('info/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(id);
    }

    @Get('upcommingtrips/')
    getUserTrips(@Req() req) {
        return this.userService.getUserTrips(req.user.userId)
    }
}
