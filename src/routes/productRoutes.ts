import { Router } from 'express';
import * as productController from '../controllers/productController';
import { createProductValidator, deleteProductValidator } from '../validators/productValidator';
import { validate } from '../middlewares/validate';

const router = Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/products', productController.getProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: Laptop Dell
 *               description:
 *                 type: string
 *                 example: Laptop con 16GB RAM
 *               price:
 *                 type: number
 *                 example: 1200.50
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */
router.post('/products', createProductValidator, validate, productController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/products/:id', deleteProductValidator, validate, productController.deleteProduct);

export default router;
