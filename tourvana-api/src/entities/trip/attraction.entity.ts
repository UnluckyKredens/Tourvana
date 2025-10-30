import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attraction {
    @PrimaryGeneratedColumn('uuid')
    attractionId: string;

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
}