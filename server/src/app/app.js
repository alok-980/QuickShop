import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from '../routes/auth.route.js';
import productRoute from '../routes/product.route.js';

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://quick-shop-pearl-theta.vercel.app'
    ],
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);

export default app;