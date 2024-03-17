const express = require('express');
const tiendaRouter = express.Router();

const {
  createTienda,
  getAllTiendas,
  getTiendaById,
  updateTienda,
  deleteTienda,
} = require('../controllers/tienda.controller');
const { upload, uploadToCloudinary } = require('../middleware/file.middleware')
// const { isAuth } = require('../middlewares/auth.middleware')

tiendaRouter.post("/",[upload.single("coverImage"), uploadToCloudinary], createTienda);
tiendaRouter.get("/", getAllTiendas);
tiendaRouter.get("/:id", getTiendaById);
tiendaRouter.put("/:id", updateTienda);
tiendaRouter.delete("/:id", deleteTienda);

module.exports = tiendaRouter;