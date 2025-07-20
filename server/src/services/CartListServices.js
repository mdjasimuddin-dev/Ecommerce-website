const { default: mongoose } = require("mongoose")
const CartModel = require("../models/CartModel")
const ObjectId = mongoose.Types.ObjectId

exports.cartListService = async (req) => {
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

        let data = await CartModel.aggregate([
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


exports.cartListCreateService = async (req) => {
    try {
        const user_id = req.headers.userID
        const reqBody = req.body
        reqBody.userID = user_id

        let data = await CartModel.create(reqBody)
        return { status: 'success', data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


exports.updateCartListService = async (req) => {
    try {
        const user_id = req.headers.userID
        const cartID = req.params.cartID
        const reqBody = req.body


        await CartModel.updateOne({ _id: cartID, userID: user_id }, { $set: reqBody })
        return { status: 'success', message: "CartList Update successful." }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


exports.removeCartListService = async (req) => {
    try {
        const user_id = req.headers.userID
        const reqBody = req.body
        reqBody.userID = user_id

        await CartModel.deleteOne(reqBody)
        return { status: 'success', message: "Cart list delete successful." }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}