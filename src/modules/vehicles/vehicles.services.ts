import { pool } from "../../config/db";

const createvehicle = async (payload: Record<string, unknown>) => {

    const { vehicle_name, type, registration_number, daily_rent_price, availability_status } = payload;

    const vehicles = await pool.query(`
        INSERT INTO  vehicles(vehicle_name,type,registration_number,daily_rent_price,availability_status) VALUES($1,$2,$3,$4,$5) RETURNING *`, [vehicle_name, type, registration_number, daily_rent_price, availability_status]);


    return vehicles
}
const getAllVehicles = async () => {
    const vehicles = await pool.query(`SELECT * FROM vehicles  `);
    return vehicles
}


export const vehiclesServices = {
    createvehicle,
    getAllVehicles
}