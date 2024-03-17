const express = require("express");
const sudaderaRouter = express.Router();

const {
  createSudadera,
  getAllSudaderas,
  getSudaderaById,
  updateSudadera,
  addSudaderaCover,
  deleteSudadera,
} = require('../controllers/sudadera.controller');
const { upload, uploadToCloudinary } = require('../middleware/file.middleware')
// const { isAuth } = require('../middlewares/auth.middleware')

sudaderaRouter.post("/",[upload.single("coverImage"), uploadToCloudinary], createSudadera);
sudaderaRouter.get("/", getAllSudaderas);
sudaderaRouter.get("/:id", getSudaderaById);
sudaderaRouter.put("/:id", updateSudadera);
sudaderaRouter.patch("/:id", updateSudadera);
sudaderaRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addSudaderaCover);
sudaderaRouter.delete("/:id", deleteSudadera);
module.exports = sudaderaRouter;