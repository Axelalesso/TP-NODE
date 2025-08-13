import product_service from "../services/product.service.js"


class ProductController{
    async getProducts(request,response){
        const products = await product_service.getProducts()
        
        return response.json({
            message:'productos obtenidos correctamente',
            data:{
                products:products
            }
        })
    }
    getProductById(request,response){

    }
    postProduct(request,response){

    }
    putProduct(request,response){

    }
    deleteProduct(request,response){

    }
}

const product_controller = new ProductController()

export default product_controller