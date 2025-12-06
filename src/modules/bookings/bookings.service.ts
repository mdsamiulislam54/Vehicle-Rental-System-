import { pool } from "../../config/db";
import { VehiclesStatusUpdate } from "../../lib/statusUpdate/statusUpdate";
import { TotalPriceCalculate } from "../../lib/totalPriceCalculate/totalPriceCalculate";

const createBooking = async (payload: Record<string, unknown>) => {
    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = payload;

    const vehicles = await pool.query('SELECT daily_rent_price, vehicle_name FROM vehicles WHERE id = $1', [vehicle_id]);
    const { daily_rent_price, vehicle_name} = vehicles.rows[0];
    const total_price = TotalPriceCalculate(rent_start_date, rent_end_date, daily_rent_price);

    const booking = await pool.query(`
            INSERT INTO  bookings (customer_id, vehicle_id, rent_start_date, rent_end_date,total_price,status )
             VALUES($1,$2,$3,$4,$5,$6) RETURNING *`, [customer_id, vehicle_id, rent_start_date, rent_end_date, total_price, 'active']
    );

    await VehiclesStatusUpdate(booking.rows[0].status, vehicle_id);
   
    return {
        booking,
        vehicles: { daily_rent_price: daily_rent_price, vehicle_name: vehicle_name }
    }

}


export const bookingServices = {
    createBooking
}