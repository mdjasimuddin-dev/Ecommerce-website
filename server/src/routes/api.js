const express = require('express')
const router = express.Router()


const productController = require('./../controllers/ProductController')
const userController = require('./../controllers/UserController')
const AuthVerification = require('./../middleware/AuthVerification')


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



router.get('/userOpt/:email', userController.userOtp)

router.get('/otpVerify/:email/:otp', userController.userOtpVerifyLogin)
router.get('/logout', AuthVerification, userController.userLogout)
router.get('/createProfile', AuthVerification, userController.createProfile)
router.get('/updateProfile', AuthVerification, userController.updateProfile)
router.get('/readProfile', AuthVerification, userController.readProfile)




// API routing end point 
module.exports = router