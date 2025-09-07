import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  const product = await productService.createProduct({ name, description, price });
  res.status(201).json(product);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await productService.deleteProduct(Number(id));
  if (!deleted) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.status(204).send();
};
