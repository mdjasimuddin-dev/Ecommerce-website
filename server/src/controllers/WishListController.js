const { saveWishListService, RemoveWishListService } = require("../services/WishListServices")

exports.wishList = async (req, res) => {

}



exports.saveWishList = async (req, res) => {
    const result = await saveWishListService(req)
    res.status(200).json(result)
}


exports.removeWishList = async (req, res) => {
    const result = await RemoveWishListService(req)
    res.status(200).json(result)
}