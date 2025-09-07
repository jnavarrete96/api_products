import { Request, Response, NextFunction } from 'express';
import * as productService from '../services/productService';
import { successResponse, errorResponse } from '../utils/response';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productService.getAllProducts();
    return successResponse(res, products, 'Productos obtenidos correctamente');
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price } = req.body;
    const product = await productService.createProduct({ name, description, price });
    return successResponse(res, product, 'Producto creado correctamente', 201);
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deleted = await productService.deleteProduct(Number(id));

    if (!deleted) {
      return errorResponse(res, 'Producto no encontrado', 404);
    }

    return successResponse(res, null, 'Producto eliminado correctamente', 200);
  } catch (err) {
    next(err);
  }
};