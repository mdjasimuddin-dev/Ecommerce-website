const BrandModel = require('./../models/BrandModel')
const CategoryModel = require('./../models/CategoryModel')
const ProductSliderModel = require('./../models/ProductSliderModel')
const ProductDetailsModel = require('./../models/productDetailsModel')
const ReviewModel = require('./../models/ProductReviewModel')
const ProductModel = require('./../models/ProductModel')
const mongoose = require('mongoose')
const ObjectID = mongoose.Types.ObjectId

const BrandService = async () => {
    try {
        const data = await BrandModel.find()
        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}


const CategoryService = async () => {
    try {
        const data = await CategoryModel.find()
        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}

const SliderService = async () => {
    try {
        const data = await ProductSliderModel.find()
        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}


const ListByBrandService = async (id) => {
    const brandID = new ObjectID(req.params.id)
    const MatchStage = { $match: { brandId: brandID } }
    const joinWithBrand = { $lookup: { from: 'brands', localField: 'brandID', foreignField: '_id', ass: 'brands' } }
    const JoinWithCategory = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', ass: 'category' } }

    try {
        const data = await ProductModel.aggregate([
            MatchStage,
            joinWithBrand,
            JoinWithCategory
        ])

        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}

const ListByCategoryService = async () => {

}


const ListBySmilerService = async () => {

}


const ListByKeywordService = async () => {

}



const ListByRemarkService = async () => {

}



const ProductDetailsService = async () => {

}



const ReviewListService = async () => {

}


module.exports = {
    BrandService,
    CategoryService,
    SliderService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilerService,
    ListByKeywordService,
    ListByRemarkService,
    ProductDetailsService,
    ReviewListService
}