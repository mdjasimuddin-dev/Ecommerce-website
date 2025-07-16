const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, required: true},
    userID: { type: mongoose.Schema.Types.ObjectId, required: true},
    color : {type : String},
    price : {type : String},
    qty : {type : String},
    size : {type : String},
}, {
    timestamp: true, versionKey: false
})

const CartModel = mongoose.model('carts', DataSchema)
module.exports = CartModel