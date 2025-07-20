const { saveWishListService } = require("../services/WishListServices")

exports.wishList = async (req, res) => {

}



exports.saveWishList = async (req, res) => {
    const result = await saveWishListService(req)
    res.status(200).json(result)
}


exports.removeWishList = async (req, res) => {

}