import express from "express";
import { vehiclesController } from "./vehicles.controllers";

const router = express.Router();

router.post("/", vehiclesController.createvehicle);
router.get('/', vehiclesController.getAllVehicles);
router.get('/:vehicleId', vehiclesController.getAllVehiclesById);
router.put('/:vehicleId', vehiclesController.updateVehiclesById);
router.delete('/:vehicleId', vehiclesController.deleteVehiclesById);





export const vehiclesRouters = router