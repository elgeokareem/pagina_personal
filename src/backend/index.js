const express = require("express")
const path = require("path")


//Inicializaciones
const app = express()

//Constantes
app.set("port", process.env.PORT || 3000)


//Middlewares


//Rutas
app.use(require("./routes/home.js"))


//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")))

//Servidor
app.listen(app.get("port"), () => {
    console.log(`Servidor en puerto ${app.get("port")}`)
})