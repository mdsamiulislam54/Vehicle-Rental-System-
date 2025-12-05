import express, { Request, Response } from 'express'
import config from './config';
import { initDB } from './config/db';

const app = express();

initDB().then(() => {
    console.log(`Database Connection Successfully!`)
}).catch(err => {
    console.error('Error initializing database:', err)
});

app.use(express.json());



app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Hello Car Rental System Server5000"
    })
})

app.listen(config.Port, () => {
    console.log(`Server is Running Port: ${config.Port}`)
});