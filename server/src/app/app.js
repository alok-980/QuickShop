import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from '../routes/auth.route.js';
import productRoute from '../routes/product.route.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);

export default app;