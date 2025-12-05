import express from "express";
import { vehiclesController } from "./vehicles.controllers";

const router = express.Router();

router.get('/');

router.post("/vehicles", vehiclesController.createvehicle);



export const vehiclesRouters =  router