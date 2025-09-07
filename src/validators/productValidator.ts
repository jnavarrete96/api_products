import { body, param } from 'express-validator';
import { Product } from '../models/Product'

export const createProductValidator = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .custom(async (value) => {
      const existing = await Product.findOne({
        where: Product.sequelize!.where(
          Product.sequelize!.fn('LOWER', Product.sequelize!.col('name')),
          value.toLowerCase()
        ),
      })
      if (existing) throw new Error('El producto ya existe')
      return true
    }),
  body('description')
    .notEmpty().withMessage('La descripción es obligatoria'),
  body('price')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor que 0')
];

export const deleteProductValidator = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID debe ser un número entero válido')
];