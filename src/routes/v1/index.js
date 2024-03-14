const express=require('express')
const router=express.Router()
const UserController=require('../../controller/user-controller')
const ProductController=require('../../controller/product-controller')
const CategoryController=require('../../controller/category-controller')
const CartController=require('../../controller/cart-controller')

router.post('/user/signup',UserController.create)
router.get('/user/get/:id',UserController.get)
router.patch('/user/update/:id',UserController.update)
router.delete('/user/delete/:id',UserController.destroy)
router.post('/user/login',UserController.login)
router.get('/user/isAuthenticated',UserController.isAuthenticated)

router.post('/product/create',ProductController.create)
router.get('/product/get/:id',ProductController.get)
router.patch('/product/update/:id',ProductController.update)
router.delete('/product/delete/:id',ProductController.destroy)

router.post('/category/create',CategoryController.create)
router.get('/category/get/:id',CategoryController.get)
router.get('/category/getAll',CategoryController.getAll)
router.patch('/category/update/:id',CategoryController.update)
router.delete('/category/delete/:id',CategoryController.destroy)

router.post('/cart/create',CartController.create)
router.get('/cart/get/:id',CartController.get)
router.patch('/cart/update/:id',CartController.update)
router.delete('/cart/delete/:id',CartController.destroy)

module.exports=router 