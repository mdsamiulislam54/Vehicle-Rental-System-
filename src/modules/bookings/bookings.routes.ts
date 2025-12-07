import express from "express";
import { bookingController } from "./bookings.controller";
import verify from "../../middleware/verifyRole";

const router = express.Router();
router.get('/', verify('admin'), bookingController.getAllBooking);
router.post('/', bookingController.createBooking);

router.put('/bookings/:bookingId',verify('admin'), bookingController.bookingStatusUpdate);


export const bookingRoutes = router