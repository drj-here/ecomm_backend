const express=require('express')
const router=express.Router()
const UserController=require('../../controller/user-controller')
const ProductController=require('../../controller/product-controller')

router.post('/user/signup',UserController.create)
router.get('/user/get/:id',UserController.get)
router.patch('/user/update/:id',UserController.update)
router.delete('/user/delete/:id',UserController.destroy)
router.post('/user/login',UserController.login)
router.get('/user/isAuthenticated',UserController.isAuthenticated)

router.post('/product/create',ProductController.create)
router.get('/product/get/:id',ProductController.get)
router.patch('/product/update/:id',ProductController.update)
router.delete('/product/delete',ProductController.destroy)

module.exports=router 