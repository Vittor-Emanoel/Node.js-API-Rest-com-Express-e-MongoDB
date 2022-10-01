import autores from "../models/Autor.js";

class autorController {
  static listarautores = (req, res) => {
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static cadastrarLivro = (req, res) => {
    let autor = new autores(req.body);

    //persister

    autor.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err}- falha ao cadastrar o autor.` });
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };

  static atualizarAutor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "autor cadastrado com successo!" });
      } else {
        res.status(500).send({ message: `${err} - ao cadastrar o autor` });
      }
    });
  };

  static listarautoresPorId = (req, res) => {
    const id = req.params.id;

    autores.findById(id, (err, autores) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err} - id do autor não localizado!` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static excluirautor = (req, res) => {
    const id = req.params.id;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "autor removido com succeso!" });
      } else {
        res.status(500).send({ message: `${err} - ao remover o autor` });
      }
    });
  };
}

export default autorController;
