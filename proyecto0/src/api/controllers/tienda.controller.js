const Tienda = require('../models/tienda.model');
const { HTTPSTATUSCODE } = require("../../utils/error.util");

const createTienda = async (req, res, next) => {
  try {
    const tienda = await    Tienda.create(req.body);
    res.status(201).json({
      status: 201,
      message: 'haz echo un post en tienda',
      data: tienda,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTiendas = async (req, res, next) => {
    try {
    const tiendas = await Tienda.find();
    res.status(200).json({
      status: 200,
      message: 'has hecho un getAll en tienda',
      data: tiendas,
    });
  } catch (error) {
    next(error);
  }
};

const getTiendaById = async (req, res, next) => {
  try {
    const tienda = await Tienda.findById(req.params.id);
    if (tienda) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un get por id',
        data: tienda,
      });
    } else {
      res.status(404).json({ status: 404, message: "Tienda not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateTienda = async (req, res, next) => {
  try {
    const tienda = await Tienda.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (tienda) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un update en tienda',
        data: tienda,
      });
    } else {
      res.status(404).json({ status: 404, message: "Tienda not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteTienda = async (req, res, next) => {
  try {
    const tienda = await Tienda.findByIdAndDelete(req.params.id);
    if (tienda) {
      res.status(204).json({ status: 204, message: "Tienda deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Tienda not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTienda,
  getAllTiendas,
  getTiendaById,
  updateTienda,
  deleteTienda,
};  