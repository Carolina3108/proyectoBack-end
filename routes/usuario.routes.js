import Router from "express"
import uController from "../controllers/usuarioController.js"
const ruta = Router();

//RUTAS PARA USUARIO
//todos
ruta.get("/listadoUsuarios",uController.listado)

ruta.post("/registrarU",uController.registrar)
//uno
ruta.get("/uno/:id",uController.uno)

ruta.delete("/eliminarUsuario/:id",uController.eliminar)

ruta.put("/editarUsuario/:id",uController.actualizar)

export default ruta