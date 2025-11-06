import { PaymentModel } from "./payment.model";
import { TripContributorModel } from "./trip/tripContributors.model";

export interface UserModel {
  userId: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password: string;
  trips: TripContributorModel[];
  payments: PaymentModel[]
}
