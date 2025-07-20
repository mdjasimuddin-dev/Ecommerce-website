const { cartListService, cartListCreateService, updateCartListService, removeCartListService } = require("../services/CartListServices")

exports.cartsList = async (req, res) => {
    const result = await cartListService(req)
    res.status(200).json(result)
}



exports.createCartList = async (req, res) => {
    const result = await cartListCreateService(req)
    res.status(200).json(result)
}


exports.updateCartList = async (req, res) => {
    const result = await updateCartListService(req)
    res.status(200).json(result)
}

exports.removeCartList = async (req, res) => {
    const result = await removeCartListService(req)
    res.status(200).json(result)
}