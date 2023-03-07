require('dotenv').config();
require('./utils/db_mongo')
const express = require('express');
const morgan = require('morgan');
const error404 = require('./middlewares/error404')
const app = express()
const port = 5000
const cors = require('cors');

// Módulos de Rutas
const productsApiRoutes = require('./routes/productsApiRoutes')
const providersApiRoutes = require('./routes/providersApiRoutes')

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));


app.use(morgan('combined'))
app.use(cors());

//Rutas 
app.use('/api/products',productsApiRoutes); // Rutas web products
app.use('/api/providers',providersApiRoutes); // Rutas providers

app.use(error404); // Middleware Para ruta no encontrada (404)

app.get('/',(req,res)=>{
    res.json({msj:"Welcome to product API"})
})






app.listen(port, () => {
    console.log(` listening on port http://localhost:${port}`)
})