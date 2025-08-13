import express, { request, response }  from "express";
import connectToMongoDB from "./database_config.js";
import product_router from "./routes/product.route.js";
import dotenv from 'dotenv'

dotenv.config()


// crear una app
const app = express()

app.use(express.json())

connectToMongoDB()

app.use('/api/products',product_router)

const products = [
    {
        title:'remera san lorenzo',
        price:100,
        id:1
    },
    {
        title:'remera river',
        price:120,
        id:2
    },
    {
        title:'remera boca',
        price:110,
        id:3
    },
    {
        title:'remera independiente',
        price:80,
        id:4
    },
    {
        title:'remera racing',
        price:80,
        id:5
    }
]


const getAllProducts = () =>{
    return products
}

const getProductById = (product_id)=>{
    /*logica para buscar por id*/
    return products.find((product)=>{
    return Number(product.id) === Number(product_id)
    })
}


app.get('/products', (request , response)=>{
    const products = getAllProducts()
    const response_to_send = {
        message:"productos obteidos",
        status: 200,
        data:{
            products: products
        }
    }
    response.json(response_to_send)
})

app.get('/products/:product_id',(request,response) =>{
    const product_id = request.params.product_id

    //buscar el producto por id
    const product_found = getProductById(product_id)

    if(!product_found){
        response.json({
            message:'producto no encontrado'
        })
    }
    response.json({
        message:'producto encontrado',
        data:{
            product:product_found
        }

    })
})



app.post('/products',(request,response)=>{
    const product_title = request.body.title
    const product_price = request.body.price

    const new_product ={
        title:product_title,
        price: product_price,
        id:products.length +1
    }
    products.push(new_product)

    response.json({
        message:'producto creado',
        data:{
            product:getAllProducts()
        }
    })
})


app.get('/products',async(request,response)=>{
    const tasks = await getTasks()
    response.json({
        message:'lista de tareas obtenidas',
        data:{
            tasks:tasks
        }
    })
})

app.post('/products',async(request,response)=>{
    const title = request.body.title
    await createTask(title)
    const tasks = await getTasks()
    response.json({
        message:'tarea creada exitosamente',
        data:{
            tasks:tasks
        }
    })
})

//dedicamos un puerto de ejecucion a nuestra aplicacion
app.listen(8080,()=>{

    console.log('servidor escuchandose en el puerto '+ 8080)

})