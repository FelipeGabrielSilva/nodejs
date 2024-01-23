import express from "express";
import conectarNaDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectarNaDB();

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o Banco de Dados feita com sucesso");
});

const app = express();
routes(app);

export default app;
