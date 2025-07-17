const BrandModel = require('./../models/BrandModel')
const CategoryModel = require('./../models/CategoryModel')
const ProductSliderModel = require('./../models/ProductSliderModel')
const ProductDetailsModel = require('./../models/productDetailsModel')
const ReviewModel = require('./../models/ProductReviewModel')
const ProductModel = require('./../models/ProductModel')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

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






const ListByBrandService = async (req) => {
    const brandId = new ObjectId(req.params.brandID)
    let MatchStage = { $match: { brandID: brandId } }
    let joinWithBrand = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "brands" } }
    const JoinWithCategory = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } }
    let unwindBrandStage = { $unwind: "$brands" }
    let unwindCategoryStage = { $unwind: "$category" }
    let projectionStage = { $project: { 'brands._id': 0, 'category._id': 0, 'categoryID': 0, 'brandID': 0, 'createdAt': 0, 'updatedAt': 0 } }
    try {
        const data = await ProductModel.aggregate([
            MatchStage,
            joinWithBrand,
            JoinWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        console.log(data);

        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}

const ListByCategoryService = async (req) => {

    let categoryID = new ObjectId(req.params.CategoryID)
    let MatchStage = { $match: { categoryID: categoryID } }
    let JoinWithBrand = { $lookup: { from: "brands", localField: 'brandID', foreignField: "_id", as: "brands" } }
    let JoinWithCategory = { $lookup: { from: "categories", localField: 'categoryID', foreignField: "_id", as: "categories" } }
    let unwindBrandStage = { $unwind: "$brands" }
    let unwindCategoryStage = { $unwind: "$categories" }
    let projectionStage = { $project: { 'brands._id': 0, 'category._id': 0, 'categoryID': 0, 'brandID': 0, 'createdAt': 0, 'updatedAt': 0 } }
    try {
        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoinWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        console.log(data);

        return { status: "success", data }

    } catch (error) {
        return { status: "fail", message: error.message }
    }
}

const ListByRemarkService = async (req) => {
    try {
        let remark = req.params.remark
        let MatchStage = { $match: { remark: remark } }
        let JoinWithBrand = { $lookup: { from: "brands", localField: 'brandID', foreignField: "_id", as: "brands" } }
        let JoinWithCategory = { $lookup: { from: "categories", localField: 'categoryID', foreignField: "_id", as: "categories" } }
        let unwindBrandStage = { $unwind: "$brands" }
        let unwindCategoryStage = { $unwind: "$categories" }
        let projectionStage = { $project: { 'brands._id': 0, 'category._id': 0, 'categoryID': 0, 'brandID': 0, 'createdAt': 0, 'updatedAt': 0 } }

        const data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrand,
            JoinWithCategory,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        console.log(data);

        return { status: "success", data }

    } catch (error) {
        return { status: "fail", message: error.message }
    }
}






const ListBySmilerService = async () => {

}

const ListByKeywordService = async () => {

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