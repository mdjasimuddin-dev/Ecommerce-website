const { saveWishListService, RemoveWishListService, WishListService } = require("../services/WishListServices")

exports.wishList = async (req, res) => {
    const result = await WishListService(req)
    res.status(200).json(result)
}



exports.saveWishList = async (req, res) => {
    const result = await saveWishListService(req)
    res.status(200).json(result)
}


exports.removeWishList = async (req, res) => {
    const result = await RemoveWishListService(req)
    res.status(200).json(result)
}