const express=require('express')
const app=express()

const bodyParser=require('body-parser')
const {PORT}=require('./config/serverConfig')
const connectDB=require('./config/db')
app.listen(PORT,()=>{
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    connectDB()
    console.log(`server started on PORT ${PORT}`)
})