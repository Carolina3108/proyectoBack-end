import Router from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.post("/autenticacion", usuarioController.autenticar);

export default router;
