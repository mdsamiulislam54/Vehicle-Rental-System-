import express from "express";
import { authController } from "./auth.controller";
const router = express.Router();

router.get('/');

router.post("/auth/signup", authController.signUp);


export const authRouters =  router