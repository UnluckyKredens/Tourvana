import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trip } from 'src/entities/trip.entity';
import { Payment } from 'src/entities/trip/payment.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { AddPaymentDto } from '../dtos/payment/addPayment.dto';

@Injectable()
export class PaymentService {

    constructor(@InjectRepository(Payment) private paymentRepo: Repository<Payment>) {}

    getPatmentsForTrip(tripId: string) {
        return this.paymentRepo.findBy({tripId: tripId});
    }

    getPaymentsByUser(userId: string) {
        return this.paymentRepo.findBy({userId: userId});
    }

    async addPayment(payment: AddPaymentDto) {
        try {
        var body = {
            tripId: payment.tripId,
            userId: payment.userId,
            amount: payment.amount,
            date: payment.date ?  new Date() : undefined,
            description: payment.description
        }
        if(body.tripId === undefined || body.userId === undefined) {
            throw new Error('tripId and userId are required');
        }
        const newPayment = await this.paymentRepo.create(body);
        await this.paymentRepo.save(newPayment);
        return newPayment.paymentId
        }
        catch(error) {
            return error;
        }
        
    }
}
