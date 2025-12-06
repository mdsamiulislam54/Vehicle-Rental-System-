import { pool } from "../../config/db";
import { BookingStatus } from "../../type/bookingType";

export const VehiclesStatusUpdate = async (status:BookingStatus, vehicle_id: any) => {


    let newStatus = "";

    if (status === BookingStatus.active ) {
        newStatus = "booked";
    }

    if (status === BookingStatus.cancelled || status === BookingStatus.returned) {
        newStatus = "available";
    }
    const updateResult = await pool.query(
        `UPDATE vehicles 
         SET availability_status = $1 
         WHERE id = $2 
         RETURNING *`,
        [newStatus, vehicle_id]
    );

    return updateResult

}