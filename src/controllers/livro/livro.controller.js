import livro from "../../models/livro/Livro.js";
import { autor } from "../../models/autor/Autor.js";

class LivroController {
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      const livroCriado = await livro.create(livroCompleto);

      res
        .status(201)
        .json({ message: `${livroCriado.titulo} cadastrado com sucesso!` });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de criar livro`,
      });
    }
  }

  static async listarLivroId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);

      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro` });
    }
  }

  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});

      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de listar livros`,
      });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200),
        json({
          message: `Livro atualizado com sucesso!`,
        });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição ao atualizar livro`,
      });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);

      res.status(200).json({ message: `Livro removido com sucesso!` });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição de deletar livro`,
      });
    }
  }

  static async listarLivrosEditora(req, res) {
    const editora = req.query.editora;

    try {
      const livrosPorEditora = await livro.find({ editora: editora });

      res.status(200).json(livrosPorEditora);
    } catch (error) {
      res.status(500).json({
        message: `falha na requisição`,
      });
    }
  }
}

export default LivroController;
