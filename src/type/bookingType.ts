export enum BookingStatus {
    active ="active",
    cancelled ="cancelled",
    returned ="returned"
}

export interface IBooking {
   
    status?: BookingStatus;
}
