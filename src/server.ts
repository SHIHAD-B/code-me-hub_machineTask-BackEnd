import express from 'express';
import { PORT } from './config/envConfig';
import dbConnection from './model/dbConnection';
import router from './routes/router';
import dotenv from 'dotenv';
import cors from 'cors';

const port = Number(PORT) || 8080;

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173','https://code-me-hub-machine-task-front-end.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}));

app.use('/api', router);

app.listen(port, () => {
    dbConnection(); 
    console.log(`Server is running on port ${port}`);
});
