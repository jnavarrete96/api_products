import express from 'express';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api', productRoutes);
app.use(errorHandler);

export default app;
