import express from "express";
import { bookingController } from "./bookings.controller";



const router = express.Router();
router.post('/bookings', bookingController.createBooking);
// router.put('/users/:userId', userController.updateUser);
// router.delete('/users/:userId', userController.deleteUser);

export const bookingRoutes = router