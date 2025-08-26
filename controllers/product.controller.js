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
    async getProductById(request,response){
        try {
            const { product_id } = request.params;
            const product = await product_service.getProductById(product_id);

            if (!product) {
                return response.status(404).json({ message: "Producto no encontrado" });
            }

            return response.json({
                message: "Producto encontrado",
                data: product
            });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
    async postProduct(request,response){
        try {
            const newProduct = await product_service.createProduct(request.body);
            return response.status(201).json({
                message: "Producto creado correctamente",
                data: newProduct
            });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
    async  putProduct(request,response){
        try {
            const { product_id } = request.params;
            const updatedProduct = await product_service.updateProduct(product_id, request.body);

            if (!updatedProduct) {
                return response.status(404).json({ message: "Producto no encontrado" });
            }

            return response.json({
                message: "Producto actualizado correctamente",
                data: updatedProduct
            });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
    async deleteProduct(request,response){
        try {
            const { product_id } = request.params;
            const deletedProduct = await product_service.deleteProduct(product_id);

            if (!deletedProduct) {
                return response.status(404).json({ message: "Producto no encontrado" });
            }

            return response.json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
}

const product_controller = new ProductController()

export default product_controller