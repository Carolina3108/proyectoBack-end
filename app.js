import  Express  from "express";
import Morgan from "morgan";
import RutasComercio from "./routes/comercio.routes.js"
import RutasUsuario from "./routes/usuario.routes.js"


const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Morgan('dev'))
app.use(RutasComercio)
app.use(RutasUsuario)
app.set('puerto', 3000)

//GET con parametros 
app.get("/",(req,res)=>{
    //extrayendo un parametro
    res.send("hola");
   
})

export default app