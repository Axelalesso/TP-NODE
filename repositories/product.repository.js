import Product from "../models/TaskModel.js"

class ProductRepository{
    async getProducts(){
        const products = await Product.find()
        return products
    }
    async getProductById(product_id){
        const product_found = await Product.findById(product_id)
        return product_found
    }
    async createProduct(title){
        const new_product = new Product({title,completed:false})
        await new_product.save()
    }
    async updateProductById(product_id,new_product_data){
        const product = await Product.findByIdAndUpdate(
            product_id,
            new_product_data,
            {new:true}
        )
        return product
    }
    async deleteProductById (product_id){
        await Product.findByIdAndDelete(product_id)
    }
}


const product_repository = new ProductRepository()

export default product_repository