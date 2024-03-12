const ProductService=require('../service/product-service')

const productService=new ProductService()

const create=async(req,res)=>{
    try{
        const response=await productService.createProduct(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'new product created successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to create the product',
            data:{},
            err:error,
            success:false
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await productService.getProduct(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'product data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the product',
            data:{},
            err:error,
            success:false
        })
    }
}

const update=async(req,res)=>{
    try{
        const response=await productService.updateProduct(req.params.id,req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'product data updated successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to update the product',
            data:{},
            err:error,
            success:false
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await productService.deleteProduct(req.params.id)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'product deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to delete the product',
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
    get
}