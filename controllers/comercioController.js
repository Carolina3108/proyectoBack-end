//import { restart } from "nodemon";
import comercio from "../models/comercio.js";

const controlador={}

controlador.listado= async (req,res)=>{
    console.log("ejecutando en FIND")
    const comercios = await comercio.find()
    res.json(comercios)
}
controlador.registrar= async (req,res)=>{
    const nuevoComercio = new comercio(req.body)
    console.log(nuevoComercio)
    await nuevoComercio.save();
    res.send("se creo nuevo comercio")
}

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await comercio.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No existe ese comercio",
        "id":req.params.id
        }
        
        ));
    
}

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await comercio.findByIdAndDelete(req.params.id)
    res.json({"status":"Comercio eliminado"})
}

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando un comercio")
    await comercio.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Comercio actualizado"})
}


export default controlador