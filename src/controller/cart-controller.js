const CartService=require('../service/cart-service')

const cartService=new CartService()

const create=async(req,res)=>{
    try{
        const response=await cartService.create(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'new cart created successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to create the cart',
            data:{},
            err:error,
            success:false
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await cartService.get(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'cart data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the cart',
            data:{},
            err:error,
            success:false
        })
    }
}


const update=async(req,res)=>{
    try{
        const response=await cartService.update(req.params.id,req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'cart data updated successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to update the cart',
            data:{},
            err:error,
            success:false
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await cartService.delete(req.params.id)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'cart deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to delete the cart',
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