import express from "express";
import LivroController from "../../controllers/livro/livro.controller.js";

const routes = express.Router();

routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/busca", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLivroId);
routes.get("/livros", LivroController.listarLivros);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;
