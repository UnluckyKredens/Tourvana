import { Column, Entity, In, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "../trip.entity";
import { User } from "../user.entity";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    paymentId: number;

    @ManyToOne(() => Trip, trip => trip.payments, {onDelete: 'CASCADE'})
    @Index()
    @JoinColumn({name: 'tripId'})
    trip: Trip;

    @Column()
    tripId: string;

    @ManyToOne(() => User, user => user.payments, {onDelete: 'CASCADE'})
    @Index() 
    @JoinColumn({name: 'userId'})
    user: User;

    @Column()
    userId: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    amount: number;

    @Column({type: 'date', nullable: true})
    date?: Date;

    @Column({type: 'text', nullable: true})
    description?: string;
}