const CategoryRepository=require('../repository/category-repo')

class CategoryService{

    constructor(){
        this.categoryRepository=new CategoryRepository()
    }

    async create(data){
        try{
          const response=await this.categoryRepository.create(data)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async get(categoryId){
        try{
          const response=await this.categoryRepository.get(categoryId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async getAll(){
        try{
          const response=await this.categoryRepository.getAll()
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async update(categoryId,data){
        try{
          const response=await this.categoryRepository.update(categoryId,data)
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }

    async delete(categoryId){
        try{
          const response=await this.categoryRepository.delete(categoryId)
          return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
        }
    }
}

module.exports=CategoryService