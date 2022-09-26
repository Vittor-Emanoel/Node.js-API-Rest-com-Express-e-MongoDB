import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = (req, res) => {
    livros.find((err, livros) => {
      res.status(200).json(livros);
    });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);

    //persister

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err}- falha ao cadastrar o livro.` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro cadastrado com successo!" });
      } else {
        res.status(500).send({ message: `${err} - ao cadastrar o livro` });
      }
    });
  };

  static listarLivrosPorId = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (err, livros) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err} - id do livro não localizado!` });
      } else {
        res.status(200).send(livros);
      }
    });
  };

  static excluirLivro = (req, res) => {
    const id = req.params.id;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com succeso!" });
      } else {
        res.status(500).send({ message: `${err} - ao remover o livro` });
      }
    });
  };
}

export default LivroController;
