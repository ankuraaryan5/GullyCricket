import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './db/dbConnect.js';
import routes from './routes/route.js';
import cloudinary from "cloudinary";
import bodyParser from 'body-parser';

const app = express();
dotenv.config({
    path: './config/config.env'
});
app.use(express.json());
app.use(bodyParser.json({ limit: '1mb' }));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use('/api/v1', routes);
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_SECRET
});
connectDB();
export default app;