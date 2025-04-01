import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './db/dbConnect.js';
import routes from './routes/route.js';

const app = express();
dotenv.config(
    {
        path: './config/config.env'
    }
);

app.use(express.json());
app.use(cors());

app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

connectDB();

export default app;