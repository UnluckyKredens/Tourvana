import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Trip } from "../trip.entity";

@Entity()
export class Hotel {
    @PrimaryGeneratedColumn('uuid')
    hotelId: string;

    @Column({type: 'text'})
    name: string;

    @Column({type: 'text'})
    location: string;

    @Column({type: 'text'})
    country: string;

    @Column({type: 'text'})
    city: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({type: 'decimal', precision: 3, scale: 2, nullable: true})
    rating?: number;

    @Column({type: 'text', nullable: true})
    url?: string;

    @ManyToOne(() => Trip, trip => trip.hotel, {onDelete: 'CASCADE'})
    trip: Trip;
}