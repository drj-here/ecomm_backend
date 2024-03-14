const WishlistRepository=require('../repository/wishlist-repo')

class WishlistService{

    constructor(){
        this.wishlistRepository=new WishlistRepository()
    }

    async create(data){
        try{
          const response=await this.wishlistRepository.create(data)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async get(wishlistId){
        try{
          const response=await this.wishlistRepository.get(wishlistId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async update(wishlistId,data){
        try{
          const response=await this.wishlistRepository.update(wishlistId,data)
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async delete(wishlistId){
        try{
          const response=await this.wishlistRepository.delete(wishlistId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }
}

module.exports=WishlistService