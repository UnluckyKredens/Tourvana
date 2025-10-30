import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiSecurity } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtGuard } from 'src/auth/jwt.guard';
import { Payment } from 'src/entities/trip/payment.entity';
import { Repository } from 'typeorm';
import { PaymentService } from './payment.service';
import { AddPaymentDto } from '../dtos/payment/addPayment.dto';

@Controller('payment')
@ApiBearerAuth('bearer')
@UseGuards(JwtGuard)
export class PaymentController {

    constructor(private paymentService: PaymentService) {}

    @Get('trip/:tirpId')
    getPaymentsForTrip(@Param('tripId') tripId: string) {
        return this.paymentService.getPatmentsForTrip(tripId);
    }

    @Get('user/payments')
    getPaymentsByUser(@Req() req) {
        return this.paymentService.getPaymentsByUser(req.user.userId);
    }

    @Post('add')
    addPayment(@Req() req, @Body() paymentDto: AddPaymentDto) {
         if(!paymentDto.userId) {
            paymentDto.userId = req.user.userId;
         }
        return this.paymentService.addPayment(paymentDto);
    }

    // @Delete('delete')
    // deletePayment() {
}
