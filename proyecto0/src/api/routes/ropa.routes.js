const express = require('express');
const ropaRouter = express.Router();

const {
  createRopa,
  getAllRopas,
  getRopaById,
  updateRopa,
  deleteRopa,
} = require('../controllers/ropa.controller');

ropaRouter.post("/", createRopa);
ropaRouter.get("/", getAllRopas);
ropaRouter.get("/:id", getRopaById);
ropaRouter.put("/:id", updateRopa);
ropaRouter.delete("/:id", deleteRopa);

module.exports = ropaRouter;