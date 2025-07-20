const WishModel = require('./../models/WishModel')

const WithListService = async () => {

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
    WithListService, saveWishListService, RemoveWishListService
}