import express from "express";
import { bookingController } from "./bookings.controller";
import verify from "../../middleware/verifyRole";

const router = express.Router();
router.get('/', verify(), bookingController.getAllBooking);
router.post('/', bookingController.createBooking);

router.put('/:bookingId',verify(), bookingController.bookingStatusUpdate);


export const bookingRoutes = router