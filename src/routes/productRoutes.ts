import { Router } from 'express';
import * as productController from '../controllers/productController';
import { createProductValidator, deleteProductValidator } from '../validators/productValidator';
import { validate } from '../middlewares/validate';

const router = Router();

router.get('/products', productController.getProducts);
router.post('/products', createProductValidator, validate, productController.createProduct);
router.delete('/products/:id', deleteProductValidator, validate, productController.deleteProduct);

export default router;
