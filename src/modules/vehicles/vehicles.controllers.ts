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
const getAllVehicles = async (req: Request, res: Response) => {
    try {
        const vehicles = await vehiclesServices.getAllVehicles();

        if (vehicles.rows.length === 0) {
            res.status(200).json(
                {
                    "success": true,
                    "message": "No vehicles found",
                    "data": vehicles.rows
                }
            )
        }
        res.status(201).json(
            {
                "success": true,
                "message": "Vehicles retrieved successfully",
                "data": vehicles.rows
            }
        )


    } catch (error) {
        res.status(500).json({ message: "Vehicles  vehicles Not found!" })
    }
}

const getAllVehiclesById = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params;
        console.log(vehicleId)
        const vehicles = await vehiclesServices.getAllVehiclesById(vehicleId);
        res.status(200).json(
            {
                "success": true,
                "message": "Vehicles retrieved successfully",
                "data": vehicles.rows[0]
            }
        )


    } catch (error) {
        res.status(500).json({ message: "Vehicles retrieved Unsucessfully!" })
    }
}

const updateVehiclesById = async (req: Request, res: Response) => {
    try {
        const { vehicleId } = req.params;

        const vehicles = await vehiclesServices.updateVehiclesById(vehicleId, req.body);
        res.status(200).json(
            {
                "success": true,
                "message": "Vehicle updated successfully",
                "data": vehicles.rows[0]
            }
        )


    } catch (error) {
        res.status(500).json({ message: "Vehicles update Failed!" })
    }
}

export const vehiclesController = {
    createvehicle,
    getAllVehicles,
    getAllVehiclesById,
    updateVehiclesById
}