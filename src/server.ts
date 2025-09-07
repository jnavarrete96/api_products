import app from './app';
import { sequelize } from './config/database';
import { Product } from './models/Product';

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Conectado a MySQL y sincronizado');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la BD:', error);
  }
};

start();