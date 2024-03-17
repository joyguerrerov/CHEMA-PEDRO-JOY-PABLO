const Ropa = require('../models/ropa.model');
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createRopa = async (req, res, next) => {
  try {
    const ropa = await Ropa.create(req.body);
    res.status(201).json({
      status: 201,
      message: 'Haz echo un post en ropa',
      data: ropa,
    });
  } catch (error) {
    next(error);
  }
};

const getAllRopas = async (req, res, next) => {
  try {
    const ropas = await Ropa.find();
    res.status(200).json({
      status: 200,
      message: 'has hecho un getAll en Ropa',
      data: ropas,
    });
  } catch (error) {
    next(error);
  }
};

const getRopaById = async (req, res, next) => {
  try {
    const ropa = await Ropa.findById(req.params.id);
    if (ropa) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un get por el id',
        data: ropa,
      });
    } else {
      res.status(404).json({ status: 404, message: "Ropa not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateRopa = async (req, res, next) => {
  try {
    const ropa = await Ropa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (ropa) {
      res.status(200).json({
        status: 200,
        message: 'has hecho un update en ropa',
        data: ropa,
      });
    } else {
      res.status(404).json({ status: 404, message: "Ropa not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteRopa = async (req, res, next) => {
  try {
    const ropa = await Ropa.findByIdAndDelete(req.params.id);
    if (ropa) {
      res.status(204).json({ status: 204, message: "Ropa deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Ropa not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRopa,
  getAllRopas,
  getRopaById,
  updateRopa,
  deleteRopa,
};




