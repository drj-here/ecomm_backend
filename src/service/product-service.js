const ProductRepository=require('../repository/product-repo')

class ProductService{
    constructor(){
        this.productRepository=new ProductRepository()
    }

    async createProduct(data){
        try{
           const response=await this.productRepository.create(data)
           return response;
        }
        catch(error){
            console.log("Something went wrong in service layer")
            throw error;
        }
    }

    async updateProduct(productId,data){
        try{
           const response=await this.productRepository.update(productId,data)
           return response;
        }
        catch(error){
            console.log("Something went wrong in service layer")
            throw error;
        }
    }

    async deleteProduct(productId){
        try{
           const response=await this.productRepository.delete(productId)
           return response;
        }
        catch(error){
            console.log("Something went wrong in service layer")
            throw error;
        }
    }

    async getProduct(productId){
        try{
           const response=await this.productRepository.getAll(productId)
           return response;
        }
        catch(error){
            console.log("Something went wrong in service layer")
            throw error;
        }
    }

}

module.exports=ProductService;