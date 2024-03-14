const Cart=require('../model/cart')

class CartRepository{
      async create(data){
        try{
           const {productId,userId}=data;
           const findProd=await Cart.find({productId:productId,userId:userId})
           if(findProd?.length>0){
            throw error({message:'Product is already in the cart'})
           }
           const cartItem=await Cart.create(data)
           return cartItem;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async get(cartId){
        try{
           const cart=await Cart.findById(cartId)
           return cart;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async update(cartId,data){
        try{
           const cart=await Cart.findByIdAndUpdate(cartId,data)
           return cart;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async delete(cartId){
        try{
           await Cart.findByIdAndDelete(cartId)
           return true;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }
}

module.exports=CartRepository