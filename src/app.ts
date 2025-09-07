import express from 'express';
import productRoutes from './routes/productRoutes';
import { swaggerDocs } from './config/swagger';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api', productRoutes);
swaggerDocs(app);
app.use(errorHandler);

export default app;
