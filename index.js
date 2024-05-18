import express from 'express'
import 'dotenv/config'
import routeCancion from './routes/cancion.route.js'

const app = express()

// Habilitar el req.body tanto de json como formularios html
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Habilitar los archivos estáticos (public)
app.use(express.static('public'))

// Rutas
app.use('/', routeCancion)

//Levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})