import mongoose from"mongoose"

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        completed:{
            type:Boolean,
            default:false
        },
    }
)

const Product = mongoose.model('Product',ProductSchema)

export default Product