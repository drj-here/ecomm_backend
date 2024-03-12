const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderItems:[{
        qty:{type:Integer,required:true},
        product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
        }
    }],
    shippingAddress: {
        fullName:
         { type: String, required: true },
        address:
         { type: String, required: true },
        city:
         { type: String, required: true },
        postalCode:
         { type: Number, required: true },
        country:
         { type: String, required: true },
    },
    paymentMethod:{
        type:String,
        required:true,
        default:'COD'
    },
    paymentResult:{
        id:String,
        status:String,
        update_time:String,
        email_address:String 
    },
    itemsPrice:{
        type:Integer,
        required:true
    },
    shippingPrice:{
        type:Integer,
        required:true
    },
    taxPrice:{
        type:Integer,
        required:true
    },
    totalPrice:{
        type:Integer,
        required:true
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    paidAt:{
        type:Date,
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    deliveredAt:{
        type:Date
    }
},{timestamps:true})

const Order=mongoose.model('Order',orderSchema)
module.exports=Order