import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const MONGO_URI = process.env.MONGO_URI




async function connectToMongoDB() {
    try{
        await  mongoose.connect(MONGO_URI)
        console.log('conexion con MongoDB establecida')
    }
    catch(error){
        console.log('error al conectarse con MongoDB', error)
    }
    
}

export default connectToMongoDB