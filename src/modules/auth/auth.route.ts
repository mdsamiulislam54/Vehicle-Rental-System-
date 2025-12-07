import express, { Router } from "express";
import { authController } from "./auth.controller";
const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/signin", authController.signin )


export const authRouters =  router