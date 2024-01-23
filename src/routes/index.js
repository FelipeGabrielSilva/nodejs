import express from "express";
import livros from "./livros/livros.routes.js";
import autores from "./autores/autores.routes.js";

const app = (app) => {
  app.route("/").get((req, res) => res.status(200).send(`Curso de node.js`));

  app.use(express.json(), livros, autores);
};

export default app;
