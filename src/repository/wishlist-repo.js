const Wishlist=require('../model/wishlist')

class CartRepository{
      async create(data){
        try{
           const {productId,userId}=data;
           const findProd=await Wishlist.find({productId:productId,userId:userId})
           if(findProd?.length>0){
            throw error({message:'Product is already in the wishlist'})
           }
           const wishlistItem=await Wishlist.create(data)
           return wishlistItem;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async get(wishlistId){
        try{
           const wishlist=await Wishlist.findById(wishlistId)
           return wishlist;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async update(wishlistId,data){
        try{
           const wishlist=await Wishlist.findByIdAndUpdate(wishlistId,data)
           return wishlist;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async delete(wishlistId){
        try{
           await Wishlist.findByIdAndDelete(wishlistId)
           return true;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }
}

module.exports=CartRepository