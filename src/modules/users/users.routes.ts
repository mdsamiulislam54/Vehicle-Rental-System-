import express from "express";
import { userController } from "./users.controllers";


const router = express.Router();
router.get('/', userController.getAllUsers);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export const userRouters = router