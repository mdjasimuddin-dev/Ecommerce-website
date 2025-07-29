const express = require('express')
const router = express.Router()


const productController = require('./../controllers/ProductController')
const userController = require('./../controllers/UserController')
const AuthVerification = require('./../middleware/AuthVerification')
const wishListController = require('./../controllers/WishListController')
const cartListController = require('./../controllers/CartListController')
const invoiceController = require('./../controllers/InvoiceController')
const featuresController = require('./../controllers/FeaturesController')

// product 
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


// user 
router.get('/userOpt/:email', userController.userOtp)
router.get('/otpVerify/:email/:otp', userController.userOtpVerifyLogin)
router.get('/logout', AuthVerification, userController.userLogout)
router.get('/createProfile', AuthVerification, userController.createProfile)
router.get('/updateProfile', AuthVerification, userController.updateProfile)
router.get('/readProfile', AuthVerification, userController.readProfile)


// Wish List
router.get('/WishList', AuthVerification, wishListController.wishList)
router.post('/saveWishList', AuthVerification, wishListController.saveWishList)
router.get('/removeWishList', AuthVerification, wishListController.removeWishList)


// Cart List 
router.get('/cartList', AuthVerification, cartListController.cartsList)
router.post('/createCartList', AuthVerification, cartListController.createCartList)
router.post('/updateCartList/:cartID', AuthVerification, cartListController.updateCartList)
router.get('/removeCartList', AuthVerification, cartListController.removeCartList)


// Invoice and Payment
router.post('/createInvoice', AuthVerification, invoiceController.createInvoiceList)
router.post('/ssl-payment-success/:trxId', invoiceController.paymentSuccess)
router.post('/ssl-payment-fail/:trxId', invoiceController.paymentFail)
router.post('/ssl-payment-cancel/:trxId', invoiceController.paymentCancel)
router.post('/ssl-payment-ipn/:trxId', invoiceController.IpnPayment)

// user Invoice find
router.get('/invoiceList', AuthVerification, invoiceController.invoiceList)
router.get('/invoiceProductList/:invoiceID', AuthVerification, invoiceController.invoiceProductList)


// feature
router.get('/featuresList', featuresController.featuresList)

// review 
router.post('/createReview', AuthVerification, productController.createReview)


// API routing end point 
module.exports = router