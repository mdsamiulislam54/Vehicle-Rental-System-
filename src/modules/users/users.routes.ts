import express from "express";
import { userController } from "./users.controllers";


const router = express.Router();
router.get('/users', userController.getAllUsers);
router.put('/users/:userId', userController.updateUser);
router.delete('/users/:userId', userController.deleteUser);

export const userRouters = router