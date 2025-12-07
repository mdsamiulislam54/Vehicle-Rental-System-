import express, { Request, Response } from 'express'
import config from './config';
import { initDB } from './config/db';
import { authRouters } from './modules/auth/auth.route';
import { vehiclesRouters } from './modules/vehicles/vehicles.routes';
import { userRouters } from './modules/users/users.routes';
import { bookingRoutes } from './modules/bookings/bookings.routes';

const app = express();
app.use(express.json());
initDB().then(() => { console.log(`Database Connection Successfully!`) })
app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Hello Server"
    })
})

app.use('/api/v1/auth', authRouters);
app.use('/api/v1/vehicles', vehiclesRouters);
app.use('/api/v1/users', userRouters);
app.use('/api/v1/bookings', bookingRoutes);


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path,
    });
});


export default app;

