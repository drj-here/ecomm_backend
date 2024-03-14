const CartRepository=require('../repository/cart-repo')

class CartService{

    constructor(){
        this.cartRepository=new CartRepository()
    }

    async create(data){
        try{
          const response=await this.cartRepository.create(data)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async get(cartId){
        try{
          const response=await this.cartRepository.get(cartId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async update(cartId,data){
        try{
          const response=await this.cartRepository.update(cartId,data)
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async delete(cartId){
        try{
          const response=await this.cartRepository.delete(cartId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }
}

module.exports=CartService