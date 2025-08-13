import product_repository from "../repositories/product.repository.js";

class ProductService{
    getProducts(){
        return product_repository.getProducts()
    }
    getProductById(){

    }
    createProduct(){

    }
}

const product_service = new ProductService()

export default product_service