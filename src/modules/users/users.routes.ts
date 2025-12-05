import express from "express";
import { userController } from "./users.controllers";


const router = express.Router();

router.get('/users', userController.getAllUsers);
// router.get('/vehicles/:vehicleId', vehiclesController.getAllVehiclesById);
router.put('/users/:userId', userController.updateUser);
// router.delete('/vehicles/:vehicleId', vehiclesController.deleteVehiclesById);

// router.post("/vehicles", vehiclesController.createvehicle);



export const userRouters = router