import { Request, Response } from "express";
import { bookingServices } from "./bookings.service";
import { JwtPayload } from "jsonwebtoken";

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
        res.status(500).json({
            message: "created booking Unsuccessfully!", success: false,
            errors: error,
        })
    }
}

const getAllBooking = async (req: Request, res: Response) => {
    try {
        const user = req.user as JwtPayload
        let booking;
        if (user.role === 'admin') {
            booking = await bookingServices.getAllBookingAdmin();
        }
        if (user.role === 'customer') {
            booking = await bookingServices.getAllBookingCustomer();
        }

        res.status(200).json({
            "success": true,
            "message": "Bookings retrieved successfully",
            "data": booking

        })
    } catch (error) {
        res.status(500).json({
            message: " Booking Data Not Found!!!", success: false,
            errors: error,
        })
    }
}
const bookingStatusUpdate = async (req: Request, res: Response) => {
    try {
        const user = req.user as JwtPayload
        const { bookingId } = req.params;
        const { status } = req.body;

        if (status === "cancelled" && user.role !== 'customer') {
            return res.status(403).json({
                success: false,
                message: "Only customers can cancel bookings"
            });
        }
        else if (status === "returned" && user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: "Only admins can mark bookings as returned"
            });
        }
        const booking = await bookingServices.updateBooking(status, user, bookingId);

        const message = status === "cancelled" ? "Booking cancelled successfully" : status === "returned" ? "Booking marked as returned. Vehicle is now available" :"Booking status updated";

        res.status(200).json({
            "success": true,
             message,
            "data": {
                ...booking?.bookingStatus.rows[0],
                vehicle: booking?.vehicles?.rows[0]
            }

        })
    } catch (error) {
        res.status(500).json({
            message: " Booking cancelled Unsuccessfully", success: false,
            errors: error,
        })
    }
}
export const bookingController = {
    createBooking,
    getAllBooking,
    bookingStatusUpdate,

}