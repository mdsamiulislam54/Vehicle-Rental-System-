import express, { Request, Response } from 'express'
import config from './config';

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Hello Car Rental System Server5000"
    })
})

app.listen(config.Port, () => {
    console.log(`Server is Running Port: ${config.Port}`)
})