import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "../trip.entity";
import { User } from "../user.entity";

@Entity()
export class TripContributor {
    
    @PrimaryGeneratedColumn('uuid')
    tripContributorId: string;
    @ManyToOne(() => Trip, trip => trip.contributors, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'tripId'})
     trip: Trip;

    @Column()
    tripId: string;


    @ManyToOne(() => User, user => user.trips, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    user: User;

    @Column()
    userId: string;

    @Column({default: 'contributor'})
    role: 'owner' | 'contributor';

}