const Product=require('../model/product')

class ProductRepository{
      async create(data){
        try{
           const product=await Product.create(data)
           return product;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async getAll(){
        // TODO: apply filter
        try{
           const products=await Product.find()
           return products;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async update(productId,data){
        try{
           const product=await Product.findByIdAndUpdate(productId,data)
           return product;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }

      async delete(productId){
        try{
           await Product.findByIdAndDelete(productId)
           return true;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
      }
}

module.exports=ProductRepository