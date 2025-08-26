import product_repository from "../repositories/product.repository.js";

class ProductService{
    getProducts(){
        return product_repository.getProducts()
    }
    getProductById(){
        return product_repository.getProductById(product_id)
    }
    createProduct(){
        return product_repository.createProduct(productData)
    }
    updateProduct(product_id, productData) {
        return product_repository.updateProductById(product_id, productData);
    }
    deleteProduct(product_id) {
        return product_repository.deleteProductById(product_id);
    }
}

const product_service = new ProductService()

export default product_service