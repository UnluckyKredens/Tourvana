export interface HotelModel {
        hotelId: string;
        name: string;
        price: number;
        location?: string;
        country?: string;
        city?: string;
        description?: string;
        rating?: number;
        url: string;
}
