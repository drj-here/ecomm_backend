const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({
    categoryName:{
        type:String,
    },
    categoryDescription:{
        type:String 
    },
    categoryImage:{
        type:String
    },
    categorySlug:{
        type:String
    }
},{timestamps:true})

const Category=mongoose.model('Category',categorySchema)
module.exports=Category