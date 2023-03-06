// Controlador - Lógica de negocio de la app

const Product = require('../models/products');
const Provider = require('../models/providers');


const getProducts = async (req, res) => {

    

    let products = [];
    const pagination = req.query.hasOwnProperty('page') && req.query.hasOwnProperty('limit');
    try {
        if (pagination) {//Pagination
            const page = parseInt(req.query.page);
            const limit = parseInt(req.query.limit);
            const skipIndex = (page - 1) * limit;

            products = await Product.find({}, ' -_id -__v')
                .sort({ _id: 1 })
                .limit(limit)
                .skip(skipIndex)
                .exec();

            res.status(200).json(products); //Devuelve el producto
        } else {//Get all products
            products = await Product.find({}, ' -_id -__v');
            res.status(200).json(products); // Devuelve todos los datos
        }
    } catch (err) {
        res.status(400).json({ message: err });
    }
}

    const createProduct = async (req,res) => {
        console.log("Esto es el console.log de lo que introducimos por postman", req.body); // Objeto recibido de producto nuevo
        let company_id = await Provider.findOne({company_name: req.body.provider}, '_id');
        const newProduct = req.body; // {title, , price, description, provider: company_name, relevance}
        newProduct.provider = company_id;
    
        try{
            let response = await new Product(newProduct);
            let answer = await response.save();
            res.status(201).json({
                msj:`Producto ${answer.title} guardado en el sistema.`,
                "product": answer
            });
        }catch(err){
            console.log("Este es el error que devuelve la api", err.message);
            res.status(400).json({
                msj: err.message
            });
    
        }
    }

    const deleteProduct = async (req,res)=>{
        try {
            let {title}=req.body
            let answer = await Product.findOneAndDelete({title})
    
            const msj =`Has eliminado el producto con nombre ${answer.title} de la base de datos` ;
            res.status(200).json({"message":msj})
        } catch (error) {
            res.status(400).json({msj: error.message});
        }
    }

    const updateProduct = async (req,res)=>{
        try {
            let {title, price, description }=req.body
            let answer = await Product.findOneAndUpdate({title},{ price, description, relevance })
    
            const msj =`Has actualizado el producto con nombre ${answer.title} de la base de datos` ;
            res.status(200).json({"message":msj})
        } catch (error) {
            res.status(400).json({msj: error.message});
        }
    }

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
    
    
}