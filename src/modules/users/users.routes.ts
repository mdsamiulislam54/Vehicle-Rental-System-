import express from "express";
import { userController } from "./users.controllers";
import verify from "../../middleware/verifyRole";


const router = express.Router();
router.get('/', verify('admin'), userController.getAllUsers);
router.put('/:userId',verify('admin','customer'), userController.updateUser);
router.delete('/:userId', verify('admin'), userController.deleteUser);

export const userRouters = router