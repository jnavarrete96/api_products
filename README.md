# API de Gestión de Productos

Una API REST desarrollada con Node.js, Express, TypeScript y MySQL para la gestión completa de productos.

## 🚀 Características

- ✅ CRUD completo de productos
- ✅ Validación de datos con express-validator
- ✅ Documentación automática con Swagger
- ✅ Formateo automático de texto
- ✅ Manejo centralizado de errores
- ✅ Arquitectura por capas
- ✅ TypeScript para mayor seguridad de tipos

## 🛠️ Tecnologías

- **Backend**: Node.js + Express
- **Lenguaje**: TypeScript
- **Base de Datos**: MySQL
- **ORM**: Sequelize
- **Validación**: express-validator
- **Documentación**: Swagger UI + swagger-jsdoc
- **CORS**: cors
- **Variables de entorno**: dotenv

## 📋 Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn
- MySQL (v8.0 o superior)
- Git

## ⚙️ Configuración de Base de Datos

### Crear la base de datos en MySQL:

```sql
CREATE DATABASE products_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE products_db;
```

### Estructura de la tabla (se crea automáticamente con Sequelize):

```sql
CREATE TABLE products (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd api_products
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin
DB_NAME=products_db
DB_PORT=3306

# Server Configuration
PORT=3000
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

La API estará disponible en: `http://localhost:3000`

## 📚 Documentación de API

Una vez que el servidor esté ejecutándose, puedes acceder a la documentación interactiva de Swagger en:

```
http://localhost:3000/api-docs
```

## 🛣️ Endpoints Disponibles

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtener todos los productos |
| POST | `/products` | Crear un nuevo producto |
| DELETE | `/products/:id` | Eliminar un producto por ID |

### Ejemplos de Uso

#### Obtener todos los productos
```bash
curl -X GET http://localhost:3000/api/products
```

#### Crear un nuevo producto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "laptop dell",
    "description": "laptop con 16gb ram",
    "price": 1200.50
  }'
```

#### Eliminar un producto
```bash
curl -X DELETE http://localhost:3000/api/products/1
```


## 📝 Formato de Datos

La API aplica formateo automático a los datos:

### Entrada:
```json
{
  "name": "laptop dell",
  "description": "laptop con 16gb ram",
  "price": 1200.50
}
```

### Salida (formateado):
```json
{
  "id": 1,
  "name": "Laptop Dell",
  "description": "Laptop con 16gb ram",
  "price": 1200.5,
  "created_at": "2024-01-15T10:30:00.000Z"
}
```

## 🔍 Validaciones

### Crear Producto
- `name`: Requerido, string no vacío
- `description`: Requerido, string no vacío  
- `price`: Requerido, número positivo

### Eliminar Producto
- `id`: Requerido, debe ser un número entero válido

## 🚨 Manejo de Errores

La API retorna respuestas consistentes

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.