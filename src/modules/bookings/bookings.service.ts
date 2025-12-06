import { pool } from "../../config/db";
import { VehiclesStatusUpdate } from "../../lib/statusUpdate/statusUpdate";
import { TotalPriceCalculate } from "../../lib/totalPriceCalculate/totalPriceCalculate";

const createBooking = async (payload: Record<string, unknown>) => {
    const { customer_id, vehicle_id, rent_start_date, rent_end_date } = payload;

    const vehicles = await pool.query('SELECT daily_rent_price, vehicle_name FROM vehicles WHERE id = $1', [vehicle_id]);
    const { daily_rent_price, vehicle_name } = vehicles.rows[0];
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

const getAllBookingAdmin = async () => {
    const booking = await pool.query(`SELECT * FROM bookings`);
    const data = [];
    for (const booing of booking.rows) {
        const customer = await pool.query(
            `SELECT name, email FROM users WHERE id = $1`,
            [booing.customer_id]
        )

        const vehicle = await pool.query(
            `SELECT vehicle_name, registration_number FROM vehicles WHERE id = $1`,
            [booing.vehicle_id]
        );

        data.push({
            ...booking.rows[0],
            customer: customer.rows[0],
            vehicles: vehicle.rows[0]
        })
    }
    return data
}
const getAllBookingCustomer = async () => {
    const booking = await pool.query(`SELECT * FROM bookings`);
    const data = [];
    for (const booing of booking.rows) {
        const vehicle = await pool.query(
            `SELECT vehicle_name, registration_number,type FROM vehicles WHERE id = $1`,
            [booing.vehicle_id]
        );

        data.push({
            ...booking.rows[0],
           
            vehicles: vehicle.rows[0]
        })
    }
    return data
}


export const bookingServices = {
    createBooking,
    getAllBookingAdmin,
    getAllBookingCustomer
}