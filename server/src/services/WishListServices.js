const { default: mongoose } = require('mongoose')
const WishModel = require('./../models/WishModel')
const ObjectId = mongoose.Types.ObjectId

const WishListService = async (req) => {
    try {
        const user_id = new ObjectId(req.headers.userID)


        const MatchStage = { $match: { userID: user_id } }
        const JoinProductStage = { $lookup: { from: 'products', localField: 'productID', foreignField: '_id', as: 'product' } }
        const unwindProductStage = { $unwind: '$product' }
        const JoinCategoryStage = { $lookup: { from: 'categories', localField: 'product.categoryID', foreignField: '_id', as: 'category' } }
        const JoinBrandStage = { $lookup: { from: 'brands', localField: 'product.brandID', foreignField: '_id', as: 'brand' } }


        const unwindCategoryStage = { $unwind: '$category' }
        const unwindBrandStage = { $unwind: '$brand' }

        const projection = { $project: { 'product._id': 0, 'category._id': 0, 'brand._id': 0 } }


        const data = await WishModel.aggregate([
            MatchStage,
            JoinProductStage,
            unwindProductStage,
            JoinCategoryStage,
            JoinBrandStage,
            unwindCategoryStage,
            unwindBrandStage,
            projection
        ])

        return { status: 'success', data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const saveWishListService = async (req) => {
    try {
        const user_id = req.headers.userID
        let reqBody = req.body
        reqBody.userID = user_id

        if (!req.headers.userID) {
            return { status: 'fail', message: "Unauthorize access" }
        }

        await WishModel.updateOne(reqBody, { $set: reqBody }, { upsert: true })

        return { status: 'success', message: "WishList save successful." }
    } catch (error) {
        return { status: 'fail', message: "Something is wrong!" }
    }
}


const RemoveWishListService = async (req) => {
    try {
        const user_id = req.headers.userID
        let reqBody = req.body
        reqBody.userID = user_id

        if (!req.headers.userID) {
            return { status: 'fail', message: "Unauthorize access" }
        }

        await WishModel.deleteOne(reqBody)

        return { status: 'success', message: "WishList Remove successful." }
    } catch (error) {
        return { status: 'fail', message: "Something is wrong!" }
    }
}


module.exports = {
    WishListService, saveWishListService, RemoveWishListService
}