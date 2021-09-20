import usuario from "../models/usuario.js";

const controlador={}

controlador.listado= async (req,res)=>{
    console.log("ejecutando el FIND")
    const usuarios = await usuario.find()
    res.json(usuarios)
}
controlador.registrar= async (req,res)=>{
    const nuevoUsuario = new usuario(req.body)
    console.log(nuevoUsuario)
    await nuevoUsuario.save();
    res.send("se creo nuevo usuario")
}

controlador.uno= async (req,res)=>{
    console.log("Consulta individual")
    await usuario.findById(req.params.id)
    .then((entidad)=>res.status(200).send(entidad))
    .catch((err)=>res.status(400).send(
        {
            "error":"No existe ese usuario",
        "id":req.params.id
        }
        
        ));
    
}

controlador.eliminar= async (req,res)=>{
    console.log("Eliminación individual")
    await usuario.findByIdAndDelete(req.params.id)
    res.json({"status":"Usuario eliminado"})
}

controlador.actualizar= async (req,res)=>{
    console.log("Actualizando un usuario")
    await usuario.findByIdAndUpdate(req.params.id,req.body)
    res.json({"status":"Usuario actualizado"})
}


export default controlador