
import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config";
const verify = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];

            if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

            const decode = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
         
            if (decode) {
                req.user = decode;
                next()
            }
        } catch (error) {
            res.status(500).json({ success: false, message: error })
        }



    }
}

export default verify