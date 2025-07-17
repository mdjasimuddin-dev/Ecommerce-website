const express = require('express')
const router = express.Router()


const productController = require('./../controllers/ProductController')


router.get('/productBrands', productController.ProductBrandList)
router.get('/productCategories', productController.ProductCategoryList)
router.get('/productSliders', productController.ProductSliderList)
router.get('/productByBrand/:brandID', productController.ProductListByBrand)
router.get('/productByCategory/:CategoryID', productController.ProductListByCategory)
router.get('/productByRemark/:remark', productController.ProductListByRemark)
router.get('/productBySmiler/:CategoryID', productController.ProductListBySmiler)
router.get('/productDetails/:productID', productController.ProductDetails)
router.get('/productByKeyword/:keyword', productController.ProductListByKeyword)


router.get('/productReviews/:productID', productController.ProductReviewList)




// API routing end point 
module.exports = router