import express, { Request, Response } from 'express'
import config from './config';
import { initDB } from './config/db';
import { authRouters } from './modules/auth/auth.route';
import { vehiclesRouters } from './modules/vehicles/vehicles.routes';
import { userRouters } from './modules/users/users.routes';
import { bookingRoutes } from './modules/bookings/bookings.routes';

const app = express();

initDB().then(() => {
    console.log(`Database Connection Successfully!`)
}).catch(err => {
    console.error('Error initializing database:', err)
});

app.use(express.json());
app.use('/api/v1', authRouters);
app.use('/api/v1', vehiclesRouters);
app.use('/api/v1', userRouters);
app.use('/api/v1', bookingRoutes);



app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Hello Car Rental System Server5000"
    })
})

app.listen(config.Port, () => {
    console.log(`Server is Running Port: ${config.Port}`)
});