import express from "express";
import { vehiclesController } from "./vehicles.controllers";
import verify from "../../middleware/verifyRole";

const router = express.Router();

router.post("/", verify('admin'), vehiclesController.createvehicle);
router.get('/', vehiclesController.getAllVehicles);
router.get('/:vehicleId', vehiclesController.getAllVehiclesById);
router.put('/:vehicleId', verify('admin'), vehiclesController.updateVehiclesById);
router.delete('/:vehicleId', verify('admin'), vehiclesController.deleteVehiclesById);





export const vehiclesRouters = router