import { ProductContext } from "../../Context/ProductContext";
import { useContext } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { SlTrash } from "react-icons/sl";

import { useNavigate } from "react-router-dom";


export function CartProductCard({ product }) {
    const navigate = useNavigate();
    const { removeCartProduct } = useContext(ProductContext);

    return (
        <Card sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: 165 }} src={product.image} alt={product.title} />
        <div onClick={() => navigate(`/productDetail/${product.title}`)} style={{cursor: "pointer"}}>
           
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">{product.title}</Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">{product.price}</Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">Rate: {product.relevance}</Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">Quantity: {product.quantity}</Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
            <span className="txt"><button className="buttonCard" onClick={(e) => {
                 removeCartProduct(product);
                e.stopPropagation();
            }}>< SlTrash  size={25}/></button></span>

            </IconButton>
            
            </Box>
            </Box>
        </div>
        </Card>
       
    );
}
/*  <div>
            <img
                src={product.image}
                alt={product.title}
                style={{ width: "250px", height: "300px" }}
            />
            <h1>{product.title}</h1>
            <p>Quantity: {product.quantity}</p>
            <p>{product.price}</p>
            <p>{product.relevance}</p>
            <button onClick={() => removeCartProduct(product)}>Eliminar</button>
        </div> */