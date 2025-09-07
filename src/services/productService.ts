import { Product } from '../models/Product';

export const getAllProducts = async () => {
  return await Product.findAll();
};

export const createProduct = async (data: { name: string; description: string; price: number }) => {
  return await Product.create(data);
};

export const deleteProduct = async (id: number) => {
  return await Product.destroy({ where: { id } });
};