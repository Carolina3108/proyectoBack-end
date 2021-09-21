import usuario from "../models/usuario.js";
import llave from "../middleware/llaveSecreta.js";
import Jwt from "jsonwebtoken";

const controlador = {};

controlador.listado = async (req, res) => {
  await usuario
    .find()
    .then((listado) => res.status(200).json(listado))
    .catch((error) => res.status(400).send({ mensaje: error }));
};
controlador.registrar = async (req, res) => {
  const nuevoUsuario = new usuario(req.body);
  await nuevoUsuario
    .save()
    .then(() =>
      res.status(201).send({ mensaje: "Usuario registrado con exito" })
    )
    .catch(() => res.status(400));
};

controlador.uno = async (req, res) => {
  console.log("Consulta individual");
  await usuario
    .findById(req.params.id)
    .then((entidad) => res.status(200).send(entidad))
    .catch((err) =>
      res.status(400).send({
        mensaje: "No existe ese usuario",
        error: err,
      })
    );
};

controlador.eliminar = async (req, res) => {
  await usuario
    .findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send({ mensaje: "Usuario eliminado" }))
    .catch((error) =>
      res.status(500).send({ mensaje: "Ocurrio un error", error: error })
    );
};

controlador.actualizar = async (req, res) => {
  await usuario
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(200).send({ mensaje: "Usuario editado" }))
    .catch(() => res.send({ mensaje: "Ocurrio un error" }));
};

controlador.obtenerUsuario = async (nombre, pass) => {
  const user = await usuario.findOne({ usuario: nombre, password: pass });
  return user;
};

controlador.autenticar = async (req, res) => {
  const user = await usuario.findOne({
    usuario: req.body.usuario,
    password: req.body.clave,
  });

  console.log(user);

  if (user) {
    console.log("sss");
    var datosToken = user._id;
    const token = Jwt.sign({ id: datosToken }, llave.llave, {
      expiresIn: "24h",
    });
    res.status(200).send({
      mensaje: "Usuario autenticado",
      token: token,
    });
  } else {
    res.status(404).send({ mensaje: "La autenticacion fallo" });
  }
};

export default controlador;
