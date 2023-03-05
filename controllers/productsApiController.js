// Controlador - Lógica de negocio de la app

const Product = require('../models/products');
const Provider = require('../models/providers');


const getProducts = async (req,res) => {
    if (req.params.id) { // con ID
        try {
            let product = await Product.find({id:req.params.id},'-_id -__v').populate('provider', '-_id -__v');

            if (product.length > 0) {
                res.status(200).json(product[0]); // Respuesta de la API para 1 producto
            }
            else {
                res.status(404).json({msj:"producto no encontrado con ID "+req.params.id}); // Respuesta de la API para 1 producto
            }    
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
    } else { // sin ID --> TODOS los products
        try {
            // let products = await Product.find({}, {"_id" : 0,"__v":0}); // []
            let products = await Product.find({},'-_id -__v');
            res.status(200).json(products); // Respuesta de la API para muchos productos
            console.log(products)
        }
        catch(err){
            res.status(400).json({msj: err.message});
        }
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