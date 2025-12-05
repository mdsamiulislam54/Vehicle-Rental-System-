import { Request, Response } from "express";
import { userServices } from "./users.services";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await  userServices.getAllUsers();
        res.status(200).json(
            {
                "success": true,
                "message": "Users  retrieved successfully",
                "data": users.rows
            }
        )


    } catch (error) {
        res.status(500).json({ message: "User Not found!" })
    }
}
const updateUser = async (req: Request, res: Response) => {
    try {
        const {userId} = req.params;
        const updateUser = await  userServices.updateUser(req.body, userId);
        res.status(200).json(
            {
                "success": true,
                 "message": "User updated successfully",
                "data": updateUser.rows[0]
            }
        )


    } catch (error) {
        res.status(500).json({ message: "User not update !" })
    }
}

export const userController = {
    getAllUsers,
    updateUser
}