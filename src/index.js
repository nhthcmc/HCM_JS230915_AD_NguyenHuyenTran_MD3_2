import Router from './routes'
import express from 'express'
import dotEnv from 'dotenv';
import cors from 'cors'

dotEnv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use( Router)
app.listen(3000, () => {
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
})