import { body, param } from 'express-validator';

export const createProductValidator = [
  body('name')
    .notEmpty().withMessage('El nombre es obligatorio'),
  body('description')
    .notEmpty().withMessage('La descripción es obligatoria'),
  body('price')
    .isFloat({ gt: 0 }).withMessage('El precio debe ser un número mayor que 0')
];

export const deleteProductValidator = [
  param('id')
    .isInt({ gt: 0 }).withMessage('El ID debe ser un número entero válido')
];