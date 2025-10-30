import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "../trip.entity";
import { Attraction } from "../trip/attraction.entity";

@Entity()
export class TripAttraction {
 
    @PrimaryGeneratedColumn()
    tripAttractionId: string;

    @ManyToOne(() => Trip, trip => trip.tripId, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'tripId'})
    trip: Trip;

    @Column()
    tripId: string

    @ManyToOne(() => Attraction, attraction => attraction.attractionId, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'attractionId'})
    attraction: Attraction;

    @Column()
    attractionId: Attraction
    
}