import express from 'express';
import product_controller from '../controllers/product.controller.js';


const product_router = express.Router()


product_router.get(
    '/',
        product_controller.getProducts
)

product_router.get(
    '/:product_id',
        product_controller.getProductById
)

product_router.post(
    '/',
        product_controller.postProduct
)

product_router.put(
    '/:product_id',
        product_controller.putProduct
)

product_router.delete(
    '/:product_id',
        product_controller.deleteProduct
)



export default product_router