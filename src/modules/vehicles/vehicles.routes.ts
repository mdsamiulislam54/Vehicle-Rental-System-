import express from "express";
import { vehiclesController } from "./vehicles.controllers";

const router = express.Router();

router.get('/', vehiclesController.getAllVehicles);
router.get('/:vehicleId', vehiclesController.getAllVehiclesById);
router.put('/:vehicleId', vehiclesController.updateVehiclesById);
router.delete('/:vehicleId', vehiclesController.deleteVehiclesById);

router.post("/vehicles", vehiclesController.createvehicle);



export const vehiclesRouters = router