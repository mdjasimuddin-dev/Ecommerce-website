const BrandModel = require('./../models/BrandModel')
const CategoryModel = require('./../models/CategoryModel')
const ProductSliderModel = require('./../models/ProductSliderModel')
const ReviewModel = require('./../models/ReviewModel')
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






const ListBySmilerService = async (req) => {
    try {
        let categoryID = new ObjectId(req.params.CategoryID)
        let MatchStage = { $match: { categoryID: categoryID } }
        let limit = { $limit: 20 }
        let JoinWithBrandStage = { $lookup: { from: 'brands', localField: 'brandID', foreignField: '_id', as: 'brand' } }
        let JoinWithCategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } }
        let unwindBrandStage = { $unwind: '$brand' }
        let unwindCategoryStage = { $unwind: '$category' }
        let projection = { $project: { 'brand._id': 0, 'category._id': 0 } }


        const data = await ProductModel.aggregate([
            MatchStage, limit,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            unwindBrandStage, unwindCategoryStage,
            projection
        ])

        console.log(data);
        return { status: 'success', data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}

const ProductDetailsService = async (req) => {
    try {
        const productId = new ObjectId(req.params.productID)
        const MatchStage = { $match: { _id: productId } }
        const BrandStage = { $lookup: { from: 'brands', localField: 'brandID', foreignField: '_id', as: 'brand' } }
        const CategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } }
        const DetailsStage = { $lookup: { from: 'productsdetails', localField: '_id', foreignField: 'productID', as: 'product' } }

        const unwindBrandStage = { $unwind: '$brand' }
        const unwindCategoryStage = { $unwind: '$category' }
        const unwindDetailsStage = { $unwind: '$product' }

        const data = await ProductModel.aggregate([
            MatchStage,
            BrandStage,
            CategoryStage,
            DetailsStage,
            unwindBrandStage,
            unwindCategoryStage,
            unwindDetailsStage
        ])

        console.log(data);
        return { status: "success", data }

    } catch (error) {
        return { status: "fail", message: error.message }
    }
}

const ListByKeywordService = async (req) => {
    try {
        const keyword = req.params.keyword
        if (!keyword) {
            return { status: "fail", message: "Keyword is required." };
        }
        const searchRegex = { "$regex": keyword, "$options": "i" }
        const searchParams = [{ title: searchRegex }, { shortDes: searchRegex }]
        const searchQuery = { $or: searchParams }


        const MatchStage = { $match: searchQuery }

        const BrandStage = { $lookup: { from: 'brands', localField: 'brandID', foreignField: '_id', as: 'brand' } }
        const CategoryStage = { $lookup: { from: 'categories', localField: 'categoryID', foreignField: '_id', as: 'category' } }

        const unwindBrandStage = { $unwind: '$brand' }
        const unwindCategoryStage = { $unwind: '$category' }

        const data = await ProductModel.aggregate([
            MatchStage,
            BrandStage,
            CategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
        ])

        console.log(data);
        return { status: "success", data }
    } catch (error) {
        return { status: "fail", message: error.message }
    }
}


const ReviewListService = async (req) => {
    try {
        const productId = new ObjectId(req.params.productID)

        const MatchStage = { $match: { productID: productId } }
        const UserStage = { $lookup: { from: 'users', localField: 'userID', foreignField: '_id', as: 'userInfo' } };
        const ProfileStage = { $lookup: { from: 'profiles', localField: 'userID', foreignField: 'userID', as: 'userProfile' } };
        const ProductStage = { $lookup: { from: 'products', localField: 'productID', foreignField: '_id', as: 'product' } };

        const unwindUserStage = { $unwind: "$userInfo" }
        const unwindProfileStage = { $unwind: "$userProfile" }
        const unwindProductStage = { $unwind: "$product" }

        const projection = { $project: { 'desc': 1, 'rating': 1, 'userProfile.cus_name': 1, 'product.title': 1 } }


        const data = await ReviewModel.aggregate([
            MatchStage,
            UserStage,
            ProfileStage,
            ProductStage,
            unwindUserStage,
            unwindProfileStage,
            unwindProductStage,
            projection
        ])

        console.log(data);
        return { status: 'success', data }

    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const createReviewService = async (req) => {
    try {
        const user_id = new ObjectId(req.headers.userID)
        const reqBody = req.body

        await ReviewModel.create({
            userID: user_id,
            productID: reqBody.productID,
            desc: reqBody.desc,
            rating: reqBody.rating,
        })

        return { status: 'success', data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
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
    ReviewListService,
    createReviewService
}