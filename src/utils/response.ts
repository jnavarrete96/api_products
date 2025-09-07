import { Response } from 'express';

export const successResponse = (
  res: Response,
  data: any,
  message = 'Operación exitosa',
  status = 200
) => {
  return res.status(status).json({
    success: true,
    message,
    data
  });
};

export const errorResponse = (
  res: Response,
  message = 'Error en la operación',
  status = 400
) => {
  return res.status(status).json({
    success: false,
    message
  });
};