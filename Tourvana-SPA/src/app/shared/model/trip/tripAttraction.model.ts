import { AttractionModel } from "../attraction.model";
import { TripModel } from "../trip.model";

export interface TripAttractionModel {
  tripAttractionId: string;
  trip: TripModel;
  tripId: string;
  attraction: AttractionModel;
  attractionId: string;
}
