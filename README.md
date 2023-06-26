# Alquilartemis

¡Bienvenido/a al servidor local de Alquilartemis con una poderosa REST API de base de datos!

## Instrucciones detalladas

### Instalación de paquetes y configuración de la base de datos

1. Base de datos:

   - Importa la base de datos "alquilartemis" en phpMyAdmin.

2. Instalación de paquetes:

   - Crea una carpeta llamada `backend` donde se llevará a cabo la configuración:

     ```bash
     npm init -y
     npm install express
     npm install -D nodemon
     npm install dotenv
     npm install promise-mysql
     ```

3. Configuración del package.json:

   - Añade la siguiente línea debajo de "description" en el archivo package.json:

     ```json
     "type": "module"
     ```

   - Modifica la sección "scripts" para que nodemon se inicie automáticamente:

     ```json
     "scripts": {
         "dev": "nodemon src/index.js"
      }
     ```

### Estructura de carpetas y archivos

4. Organización de archivos y carpetas:

   - Crea un archivo llamado `.env` dentro de la carpeta `backend`.

   - Crea una carpeta llamada `src` dentro de la carpeta `backend`.

   - Dentro de la carpeta `src`, crea tres subcarpetas:
     - `controllers` (controladores)
     - `db` (base de datos)
     - `routes` (rutas)

   - Luego, crea tres archivos dentro de la carpeta `src`:
     - `app.js` (archivo principal)
     - `config.js` (configuración)
     - `index.js` (inicio de la aplicación)

### Uso de Express para la creación del servidor

5. Importa el poder de `express`:

   - En el archivo `app.js`, agrega el siguiente código para importar y utilizar express:

     ```javascript
     import express from 'express';

     const app = express();
     ```

6. Configuración del puerto:

   - Define el puerto en el que se ejecutará el servidor:

     - En el archivo `app.js`, agrega el siguiente código para asignar y mostrar el puerto:

       ```javascript
       const port = 4000; 

       app.listen(port, () => {
         console.log(`El servidor está funcionando en el puerto ${port}`);
       });
       ```

### Variables de entorno y conexión a la base de datos

7. Configuración de las variables de entorno y conexión a la base de datos:

   - En el archivo `.env`, configura las variables de entorno con los datos correspondientes a tu base de datos.

   - En el archivo `config.js`, agrega el siguiente código para importar las variables de entorno y configurar la conexión a la base de datos:

     ```javascript
     import dotenv from 'dotenv';
     dotenv.config();

     const config = {
       host: process.env.HOST,
       database: process.env.DATABASE,
       user: process.env.USER,
       password: process.env.PASSWORD
     };

     export default config;
     ```

   - En la carpeta `db`, crea un archivo llamado `database.js` y agrega el siguiente código para establecer la conexión con la base de datos:

     ```javascript
     import mysql from 'promise-mysql';
     import config from '../config';

     const getConnection = async () => {
       const connection = await mysql.createConnection(config);
       return connection;
     };

     export default getConnection;
     ```

### Controladores y obtención de datos

8. Controladores para obtener datos de la base de datos:

   - En la carpeta `controllers`, crea un archivo llamado `categorias.controllers.js` y agrega el siguiente código:

     ```javascript
     import getConnection from '../db/database';

     const getCategorias = async (req, res) => {
       try {
         const connection = await getConnection();
         const query = 'SELECT * FROM categorias';
         const categorias = await connection.query(query);
         res.json(categorias);
       } catch (error) {
         console.log(error);
         res.status(500).json({ message: 'Error al obtener las categorías' }); //Aquí puedes obtener el error si la conexión no sirve
       }
     };

     export default getCategorias;
     ```

### Configuración de las rutas

9. Configuración de las rutas para obtener los datos:

   - En la carpeta `routes`, crea un archivo llamado `categorias.routes.js` y agrega el siguiente código:

     ```javascript
     import express from 'express';
     import getCategorias from '../controllers/categorias.controllers';

     const router = express.Router();

     router.get('/', getCategorias);

     export default router;
     ```

   - En el archivo `app.js`, agrega el siguiente código para utilizar las rutas:

     ```javascript
     import categoriasRoutes from './routes/categorias.routes';

     app.use('/api/categorias', categoriasRoutes);
     ```

10. Repite los pasos necesarios para otras tablas (NO olvides que es importante seguir la creación de los controladores y la configuración de rutas para que podamos alzar el servidor con exito )

 !SIGUE CADA PASO A PASO Y ASÍ LO LOGRARAS CAMPER DE ALTO NIVEL (¡TODO FUNCIONAAA!)¡

¡Felicitaciones! Ahora tienes un servidor local de Alquilartemis con una REST API de base de datos configurada.

  ((https://github.com/edwnig17))

  "EXITOS CAMPERS!!