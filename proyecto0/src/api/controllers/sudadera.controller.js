// 1. LLAMAR AL MODELO
const Sudadera = require('../models/sudadera.model');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

// 2. CREAR LAS FUNCIONES CRUD (GET, POST, PATCH, DELETE)

// localhost:3000/room/65e0e8046d04e8604e3d8f36
const createSudadera = async (req, res, next) => {
  try {
    const sudadera = await Sudadera.create(req.body);
    res.status(201).json({
      status: 201,
      message: 'haz echo un post en sudadera',
      data: sudadera,
    });
  } catch (error) {
    next(error);
  }
};

const getAllSudaderas = async (req, res, next) => {
  try {
    const sudaderas = await Sudadera.find();
    res.status(200).json({
      status: 200,
      message: 'Has hecho un getAll en sudadera',
      data: sudaderas,
    });
  } catch (error) {
    next(error);
  }
};

const getSudaderaById = async (req, res, next) => {
  try {
    const sudadera = await Sudadera.findById(req.params.id);
    if (sudadera) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un get por id',
        data: sudadera,
      });
    } else {
      res.status(404).json({ status: 404, message: "Sudadera not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateSudadera = async (req, res, next) => {
  try {
    const sudadera = await Sudadera.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (sudadera) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un update de sudadera',
        data: sudadera,
      });
    } else {
      res.status(404).json({ status: 404, message: "Sudadera not found" });
    }
  } catch (error) {
    next(error);
  }
};

const addSudaderaCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: 'No file in the request.'
      });
    }
    const sudadera = await Sudadera.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (sudadera) {
      res.status(200).json({
        status: 200,
        message: 'haz añadido un cover a sudadera',
        data: sudadera,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteSudadera = async (req, res, next) => {
  try {
    const sudadera = await Sudadera.findByIdAndDelete(req.params.id);
    if (sudadera) {
      res.status(204).json({ status: 204, message: "Sudadera deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Sudadera not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSudadera,
  getAllSudaderas,
  getSudaderaById,
  updateSudadera,
  addSudaderaCover,
  deleteSudadera,
};
