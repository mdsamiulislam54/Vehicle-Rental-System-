import { Request, Response } from "express";
import { vehiclesServices } from "./vehicles.services";
const createvehicle = async (req: Request, res: Response) => {
    try {
        const vehicles = await vehiclesServices.createvehicle(req.body);
        res.status(201).json(
            {
                "success": true,
                "message": "Vehicle created successfully",
                "data": vehicles.rows[0]
            }
        )
    } catch (error) {
        res.status(500).json({ message: "Vehicles Create Unsucessfully!" })
    }
}


export const vehiclesController = {
    createvehicle
}