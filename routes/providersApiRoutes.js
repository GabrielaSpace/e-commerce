const express = require('express')
const providersApiController = require("../controllers/providersApiController");
const providersApiRouter = express.Router();

// /products
// GET http://localhost:3000/products/3
// GET http://localhost:3000/products/4
// GET http://localhost:3000/products
// /products
providersApiRouter.get('/',providersApiController.getProviders);
providersApiRouter.post('/',providersApiController.createProvider);
providersApiRouter.delete('/',providersApiController.deleteProvider);
providersApiRouter.put('/',providersApiController.updateProvider);


module.exports = providersApiRouter;