import { TransportEnum } from "../enums/transport.enum"
import { AttractionModel } from "./attraction.model"
import { HotelModel } from "./hotel.model"
import { PaymentModel } from "./payment.model";
import { TripContributorModel } from "./trip/tripContributors.model";

export interface TripModel {
  tripId?: string;
  name: string;
  from: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  transport: string;
  totalPayments: number;
  notes?: string;

  hotel?: HotelModel;
  attractions:AttractionModel[]
  payments: PaymentModel[]
  contributors: TripContributorModel[]
}
