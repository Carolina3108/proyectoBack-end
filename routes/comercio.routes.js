import Router from "express"
import cController from "../controllers/comercioController.js"

const ruta = Router();

//RUTAS PARA COMERCIO
//todos
ruta.get("/listadoComercios",cController.listado)

ruta.post("/registrar",cController.registrar)
//uno
ruta.get("/uno/:id",cController.uno)

ruta.delete("/eliminarComercio/:id",cController.eliminar)

ruta.put("/editarComercio/:id",cController.actualizar)


export default ruta