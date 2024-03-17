// 1.IMPORTS
// 1.1 librerias npm
const express = require("express")
const cors = require("cors");
// 1.2 documentos del proyecto
const { connectMongo } = require('./src/data/mongo')
// 1.3 las rutas:
const sudaderaRouter = require('./src/api/routes/sudadera.routes');
const ropaRouter = require('./src/api/routes/ropa.routes');
const tiendaRouter = require('./src/api/routes/tienda.routes');
const setError = require("./src/utils/error.util");
const userRouter = require("./src/api/routes/user.routes");
const { notFoundHandler, errorHandler } = require('./src/api/middleware/error.middleware');

// 2.1 configuración de la app
require("dotenv").config(); // desde aquí se cargan las var de entorno del .env, hasta aquí no existen
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // usar urlencode para las urls.
connectMongo();

//configCloudinary();
// 2.2 cabeceras (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 2.3 cors (https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
app.use(cors()); // no hay restricciones
/*
 * La linea inferior sería un ejemplo de uso de cors, en el que solo
 * permitimos peticiones de esas dos direcciones IP
 * Este concepto se conoce como whitelisting
 */
/* app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
})); */

// 3. ENDPOINTS

// 3.1 endpoint
app.get("/", (req, res) => {
  res.send("Server is up");
});
// 3.2 las rutas de mis datos
app.use('/sudadera', sudaderaRouter);
app.use('/ropa', ropaRouter);
app.use('/tienda', tiendaRouter);
app.use('/user',userRouter)
// 3.3 el "coche escoba" -> cualquier ruta que no haya definido pasa por aquí


// 4. MANEJO DE ERRORES
app.use(notFoundHandler);
app.use(errorHandler);


// 5. "ARRANCAR" EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});