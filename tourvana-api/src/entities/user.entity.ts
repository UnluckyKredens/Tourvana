import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TripContributor } from "./relations/tripContributor.entity";
import { Payment } from "./trip/payment.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    userId: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column({ unique: true })
    email: string;

    @Column({unique: true, nullable: true})
    phoneNumber: string;

    @Column()
    password: string;

    @OneToMany(() => TripContributor, tc => tc.user)
    trips: TripContributor[];

    @OneToMany(() => Payment, payment => payment.userId)
    payments: Payment[];
}