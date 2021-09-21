import Router from "express";
import usuarioController from "../controllers/usuarioController.js";
const router = Router();

//routerS PARA USUARIO
//todos
router.get("/", usuarioController.listado);

router.post("/", usuarioController.registrar);
//uno
router.get("/:id", usuarioController.uno);

router.delete("/:id", usuarioController.eliminar);

router.put("/:id", usuarioController.actualizar);

export default router;
