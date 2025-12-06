import express from "express";
import { bookingController } from "./bookings.controller";
import verify from "../../middleware/verifyRole";



const router = express.Router();
router.get('/bookings', verify('customer'), bookingController.getAllBooking);
router.post('/bookings', bookingController.createBooking);

// router.put('/users/:userId', userController.updateUser);
// router.delete('/users/:userId', userController.deleteUser);

export const bookingRoutes = router