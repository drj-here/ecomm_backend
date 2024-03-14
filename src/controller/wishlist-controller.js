const WishlistService=require('../service/wishlist-service')

const wishlistService=new WishlistService()

const create=async(req,res)=>{
    try{
        const response=await wishlistService.create(req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'new wishlist created successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to create the wishlist',
            data:{},
            err:error,
            success:false
        })
    }
}

const get=async(req,res)=>{
    try{
        const response=await wishlistService.get(req.params.id)
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'wishlist data fetched successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to fetch the wishlist',
            data:{},
            err:error,
            success:false
        })
    }
}


const update=async(req,res)=>{
    try{
        const response=await wishlistService.update(req.params.id,req.body)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'wishlist data updated successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to update the wishlist',
            data:{},
            err:error,
            success:false
        })
    }
}

const destroy=async(req,res)=>{
    try{
        const response=await wishlistService.delete(req.params.id)
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'wishlist deleted successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'not able to delete the wishlist',
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