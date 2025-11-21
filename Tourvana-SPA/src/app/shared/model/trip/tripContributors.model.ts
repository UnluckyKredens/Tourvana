import { UserModule } from "../../../modules/user/user-module";
import { TripModel } from "../trip.model";
import { UserModel } from "../user.model";

export interface TripContributorModel {
  tripContributorId: string;
  trip: TripModel;
  tripId: string;
  userId: string;
  user: UserModel;
  role: 'owner' | 'contributor';
}
