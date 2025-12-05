import express from "express";
import { vehiclesController } from "./vehicles.controllers";

const router = express.Router();

router.get('/vehicles', vehiclesController.getAllVehicles);
router.get('/vehicles/:vehicleId', vehiclesController.getAllVehiclesById);

router.post("/vehicles", vehiclesController.createvehicle);



export const vehiclesRouters =  router