import express, { Router } from "express";
import { authController } from "./auth.controller";
const router = express.Router();

router.get('/');

router.post("/auth/signup", authController.signUp);
router.post("/auth/signin", authController.signin )


export const authRouters =  router