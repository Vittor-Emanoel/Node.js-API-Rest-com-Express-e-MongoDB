import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
  .get("/autores", AutorController.listarautores)
  .post("/autores", AutorController.cadastrarLivro)
  .put("/autores/:id", AutorController.atualizarAutor)
  .get("/autores/:id", AutorController.listarautoresPorId)
  .delete("/autores/:id", AutorController.excluirautor);

export default router;
