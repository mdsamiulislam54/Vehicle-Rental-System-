import { Request, Response } from "express";
import { bookingServices } from "./bookings.service";

const createBooking = async (req: Request, res: Response) => {
    try {
        const booking = await bookingServices.createBooking(req.body);
        res.status(200).json({
            "success": true,
            "message": "Booking created successfully",
            "data": {
                ...booking.booking.rows[0],
                vehicle: booking.vehicles
            }

        })
    } catch (error) {
        res.status(500).json({ message: "created booking Unsuccessfully!!!" })
    }
}

export const bookingController = {
    createBooking
}