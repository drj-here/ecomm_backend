const mongoose=require('mongoose')
const Category=require('./category')
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true,
        Uinque:true
    },
    productImage:{
        type:String,
        required:true
    },
    productSlug:{
        type:String,
        required:true
    },
    productPrice:{
        type:Integer,
        required:true,
        default:0
    },
    productQuantity:{
        type:Integer,
        required:true,
        default:0
    },
    productFeatured:{
        type:Boolean,
        default:false 
    },
    productCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
},{timestamps:true})

const Product=mongoose.model('Product',productSchema)
module.exports=Product;