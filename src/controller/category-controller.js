const CategoryService=require('../service/category-service')

const categoryService=new CategoryService()

const create=async(req,res)=>{
    try{
        const response=await categoryService.create(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'new category created successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to create the category',
            data:{},
            err:error,
            success:false
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await categoryService.get(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'category data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the category',
            data:{},
            err:error,
            success:false
        })
    }
}

const getAll=async(req,res)=>{
    try{
        const response=await categoryService.getAll(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'category data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the category',
            data:{},
            err:error,
            success:false
        })
    }
}

const update=async(req,res)=>{
    try{
        const response=await categoryService.update(req.params.id,req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'category data updated successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to update the category',
            data:{},
            err:error,
            success:false
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await categoryService.delete(req.params.id)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'category deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to delete the category',
            data:{},
            err:error,
            success:false
        })
    }
}

module.exports={
    create,
    update,
    destroy,
    get,
    getAll
}