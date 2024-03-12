const {MONGODB_URI}=require('./serverConfig')
const DB_NAME=require('../utils/constants')
const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
       await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
       console.log("Database connected successfully");
    }
    catch(error){
        console.log("Something went wrong while connecting db. Error: ",error)
    }
}

module.exports=connectDB