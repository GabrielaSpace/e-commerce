const mongoose = require('mongoose');
require('../utils/db_mongo');

const objectSchema = {
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
}


// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;

// Insertar un proveedor
/* 
const createprovider = new provider({
   company_name: "SaladFoods",
    CIF: "C-12345678",
    address:" Spain-La Rioja"
    
});

createprovider.save().then((data)=>console.log(data));
 */