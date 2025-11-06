import { TripModel } from "../model/trip.model";

export interface MyTripDto {
  tripContributorId: string;
  trip: TripModel;
  tripId: string;
  userId: string;
  role: string;
}
