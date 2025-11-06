import { TripModel } from "./trip.model";
import { UserModel } from "./user.model";

export interface PaymentModel {
  paymentId: string;
  trip: TripModel;
  tripId: string;
  user: UserModel;
  userId: string;
  amount: number;
  date?: Date;
  description: string;
}
