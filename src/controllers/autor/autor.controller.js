import { autor } from "../../models/autor/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutor = await autor.find({});

      res.status(200).json(listaAutor);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de listar autores`,
      });
    }
  }

  static async listarAutorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);

      res.status(201).json({ message: `Autor cadastrado com sucesso!` });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de criar autor`,
      });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200),
        json({
          message: `Autor atualizado com sucesso!`,
        });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição ao atualizar autor`,
      });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);

      res.status(200).json({ message: `Autor removido com sucesso!` });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de deletar autor`,
      });
    }
  }
}

export default AutorController;
