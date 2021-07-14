const express = require('express')
const router=express.Router();


const {getProducts,newProduct,getSingleProducts,updateProducts,DaleteProducts}=require('../controllers/productcontroller')

router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleProducts);

router.route('/admin/product/:id').put(updateProducts);

router.route('/admin/product/:id').delete(DaleteProducts);

router.route('/admin/products/new').post(newProduct);




module.exports=router;