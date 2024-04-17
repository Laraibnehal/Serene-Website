require("dotenv").config();
const connectDB = require("./db/conn")
const Product = require("./model/product")
const ProductJson = require("./perfumeData.json")
const start = async () => {
    try{
        await connectDB(process.env.DATABASE)
        await Product.deleteMany()
        await Product.create(ProductJson);
        console.log('Database connected')
    }
    catch (e){
        console.log(e);
    }
}
start()