import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Attraction {
    @PrimaryGeneratedColumn('uuid')
    attractionId: string;

    @Column({type: 'varchar', nullable: false, unique: true, length: "100"})
    name: string;

    @Column({type: 'varchar', nullable: false, unique: true, length: "100"})
    location: string;

    @Column({type: 'text', nullable: false})
    country: string;

    @Column({type: 'text', nullable: false})
    city: string;

    @Column({type: 'text', nullable: true})
    description?: string;

    @Column({type: 'decimal', precision: 3, scale: 2, nullable: true})
    rating?: number;

    @Column({type: 'text', nullable: true})
    url?: string;
}