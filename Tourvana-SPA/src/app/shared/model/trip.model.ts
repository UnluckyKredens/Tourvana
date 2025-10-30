import { TransportEnum } from "../enums/transport.enum"
import { AttractionModel } from "./attraction.model"
import { HotelModel } from "./hotel.model"

export interface TripModel {
    from: string,
    destination: string,
    budget: number,
    patricipants: number,
    transport: TransportEnum,
    dateRange: {
        dateStart: Date,
        dateEnd: Date
    }
    hotel: HotelModel | undefined
    attractions: AttractionModel[] | undefined
}