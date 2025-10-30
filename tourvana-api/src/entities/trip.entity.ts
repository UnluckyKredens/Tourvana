import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./trip/payment.entity";
import { TripContributor } from "./relations/tripContributor.entity";
import { TripAttraction } from "./relations/tripAttraction.entity";
import { Hotel } from "./trip/hotel.entity";
import { Transform } from "class-transformer";

@Entity()
export class Trip {
    @PrimaryGeneratedColumn('uuid')
    tripId: string;
    
    @Column({type: 'text'})
    name: string;

    @Column({type: 'text'})
    destination: string;
    
    @CreateDateColumn({type: 'datetime'})
    startDate?: Date;
    
    @Column({type: 'datetime'})
    endDate?: Date;

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
    budget?: number;

    @Column('text', {nullable: true})
    transport: 'bus' | 'train' | 'car' | 'plane' | 'ship' | 'other';

    @OneToMany(() => Payment, payment => payment.tripId, {cascade: true, nullable: true, onDelete: 'CASCADE'})
    @JoinTable()
    payments?: Payment[];

    @Column({type: 'decimal', precision: 10, scale: 2, nullable: true, default: 0})
    totalPayments: number;

    @OneToMany(() => TripContributor, tc => tc.tripContributorId, {cascade: true, nullable: true, onDelete: 'CASCADE'})
    @JoinTable()
    contributors: TripContributor[];

    @OneToMany(() => TripAttraction, ta => ta.trip, {cascade: true, nullable: true, onDelete: 'CASCADE'})
    @JoinTable()
    attractions: TripAttraction[];

    @OneToMany(() => Hotel, hotel => hotel.trip, {nullable: true})
    hotel?: Hotel;
   
    
}