import Router from "express";
import comercioController from "../controllers/comercioController.js";

const router = Router();

/**
 * @swagger
 * components:
 *  parameters:
 *     idComercio:
 *          in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: id del Comercio
 *  schemas:
 *      Comercio:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              latitud:
 *                  type: string
 *              longitud:
 *                  type: string
 *              nombre:
 *                  type: string
 *              nombrePropietario:
 *                  type: string
 *              telefono:
 *                  type: string
 *              categoria:
 *                  type: string
 *              descripcion:
 *                  type: string
 *              direccion:
 *                  type: string
 *          required:
 *              - latitud
 *              - longitud
 *              - nombre
 *              - nombrePropietario
 *              - telefono
 *              - categoria
 *              - descripcion
 *              - direccion
 *          example:
 *              latitud: 38.8951
 *              longitud: 38.8951
 *              nombre: Comercio 1
 *              nombrePropietario: Antony Duarte
 *              telefono: 70079032
 *              categoria: Comida Mexicana
 *              descripcion: descripcion random
 *              direccion: Chalatenango
 */

/**
 * @swagger
 * tags:
 *  name: Comercios
 *  description: Operaciones de comercios
 */

/**
 * @swagger
 * /comercios:
 *  get:
 *      summary: Devuelve el listado de comercios
 *      tags: [Comercios]
 *      responses:
 *          200:
 *              description: Lista de comercios
 *              content:
 *                 application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Comercio'
 */

router.get("/", comercioController.listado);

/**
 * @swagger
 * /comercios/{id}:
 *  get:
 *      summary: Obtienen un Comercio mediante su id
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *      responses:
 *          200:
 *              description: La descripcion del comercio
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *          404:
 *              description: El comercio no fue encontrado
 *
 */
router.get("/:id", comercioController.uno);

/**
 * @swagger
 * /comercios:
 *  post:
 *      summary: Crear un nuevo comercio
 *      tags: [Comercios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Comercio'
 *      responses:
 *          200:
 *              description: El comercio se creo exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *
 */

router.post("/", comercioController.registrar);

/**
 * @swagger
 * /comercios/{id}:
 *  put:
 *      summary: Actualiza el comercio mediante su id
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Comercio'
 *      responses:
 *          200:
 *              description: El comercio se creo exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Comercio'
 *          404:
 *              description: El comercio no fue encontrado
 */

router.put("/:id", comercioController.actualizar);

/**
 * @swagger
 * /comercios/{id}:
 *  delete:
 *      summary: Elimina un comercio mediante su id
 *      tags: [Comercios]
 *      parameters:
 *        - $ref: '#/components/parameters/idComercio'
 *      responses:
 *          200:
 *              description: El comercio se elimino exitosamente
 *          404:
 *              description: El comercio no fue encontrado
 *
 */

router.delete("/:id", comercioController.eliminar);

export default router;
