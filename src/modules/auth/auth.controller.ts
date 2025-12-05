import { Request, Response } from "express";
import { authService } from "./auth.service";

const signUp = async (req: Request, res: Response) => {
    try {
        const playLoad = req.body;
        const user = await authService.signUpServerice(playLoad);
        res.status(201).json(
            {
                "success": true,
                "message": "User registered successfully",
                "data": user.rows[0]
            }
        )
    } catch (error) {
        res.status(500).json({ message: "User SignUp Unsuccessfully!", error })
    }
}

const signin = async (req: Request, res: Response) => {
    try {
        const user = await authService.signin(req.body);
        res.status(200).json({
            "success": true,
            "message": "Login successful",
            "data":user
        })
    } catch (error) {
        res.status(500).json({ message: "User singIn Unsuccessfully!", error })
    }
}
export const authController = {
    signUp,
    signin
}