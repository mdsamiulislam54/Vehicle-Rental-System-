
import pg from 'pg';
import config from '.';
export const pool = new pg.Pool({
    connectionString: config.connectionString,
    ssl: false
});


export const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            email VARCHAR(200) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL,
            phone VARCHAR(100) NOT NULL,
            role VARCHAR(100) NOT NULL
        )
    `);
    await pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles (
            id SERIAL PRIMARY KEY,
            vehicle_name VARCHAR(100) NOT NULL,
            type  VARCHAR(20)  NOT NULL,
            registration_number VARCHAR(100) NOT NULL,
            daily_rent_price INT NOT NULL,
            availability_status VARCHAR(20)  NOT NULL
        )
    `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS bookings(
                id  SERIAL  PRIMARY KEY ,
                customer_id INT REFERENCES users(id) ON DELETE CASCADE,
                vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE ,
                rent_start_date DATE NOT NULL,
                rent_end_date  DATE NOT NULL,
                total_price INT NOT NULL, 
                status  VARCHAR(20)   NOT NULL
            )
        `)
};


