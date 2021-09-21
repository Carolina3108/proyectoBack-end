import comercio from "../models/comercio.js";

const controlador = {};

controlador.listado = async (req, res) => {
  await comercio
    .find()
    .then((listado) => res.status(200).json(listado))
    .catch((error) => res.status(400).send({ mensaje: error }));
};
controlador.registrar = async (req, res) => {
  const nuevoComercio = new comercio(req.body);
  await nuevoComercio
    .save()
    .then(() =>
      res.status(201).send({ mensaje: "Comercio registrado con exito" })
    )
    .catch(() => res.status(400));
};

controlador.uno = async (req, res) => {
  await comercio
    .findById(req.params.id)
    .then((entidad) => res.status(200).send(entidad))
    .catch((error) =>
      res.status(400).send({
        mensaje: "No existe ese comercio",
        error: error,
      })
    );
};

controlador.eliminar = async (req, res) => {
  await comercio
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send({ mensaje: "Comercio eliminado" }))
    .catch((error) =>
      res.status(500).send({ mensaje: "Ocurrio un error", error: error })
    );
};

controlador.actualizar = async (req, res) => {
  await comercio
    .findByIdAndUpdate(req.params.id, req.body)
    .then((comercio) => res.status(200).send({ mensaje: "Comercio editado" }))
    .catch((error) => res.send({ mensaje: "Ocurrio un error" }));
};

export default controlador;
