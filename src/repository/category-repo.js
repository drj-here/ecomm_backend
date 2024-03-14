const Category=require('../model/category')

class CategoryRepository{
   
    async get(categoryId){
        try{
           const category=await Category.findById(categoryId)
           if(!category){
            throw error({message:'Category does not exist'})
           }
           return category;
        }
        catch(error){
        console.log('something went wrong in repos layer')
        throw error;
        }
    }

    async create(data){
        try{
            const category=await Category.create(data);
            return category;
        }
        catch(error){
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }

    async getAll(){
        try{
            const category=await Category.find()
            return category;
        }
        catch(error){
            console.log("Something went wrong in repo layer")
            throw error;
        }
    }

    async update(categoryId,data){
        try{
           const category=await Category.findOneAndUpdate({_id:categoryId},data,{new:true})
           return category;
        }
        catch(error){
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }


    async delete(categoryId){
        try{
           const category=await Category.deleteOne({_id:categoryId})
           if(!category){
            throw error({message:'category does not exist'})
           }
           return true;
        }
        catch(error){
            console.log('something went wrong in the repo layer')
            throw error;
        }
    }
}

module.exports=CategoryRepository