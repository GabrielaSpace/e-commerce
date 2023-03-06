const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  provider: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Provider',
    required: true
  },
  title: { 
    type: String, 
    required: true,
    unique: true 
  },
  price: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  relevance: { 
    type: String, 
    required: true 
  },
  image: {
    type: String,
    validate: {
      validator: function(url){
        return url.endsWith('.jpg') || url.endsWith('.png');
      }, 
      message: "Por favor, sólo imágenes JPG o PNG"
    }
  },
  manufacturer: { 
    type: String, 
    required: true
  },
  address: { 
    type: String, 
    required: true
  },
 CIF: { 
    type: String, 
    required: true
  }

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


// Insertar un producto

/* const p = new Product({
    provider: "styles",
    title: "Ring",
    price: "11.80",
    description: "Barrita jugosa del teatro",
    relevance: "Barrita jugosa del teatro",
    image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg",
    manufacturer: "productiobs",
    CIF: "A-12345678",
    address: "Spain-Madrid"
    
});

p.save().then((data)=>console.log(data));
   */