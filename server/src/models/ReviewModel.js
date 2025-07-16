const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    productID: { type: mongoose.Schema.Types.ObjectId, required: true},
    userID: { type: mongoose.Schema.Types.ObjectId, required: true},
    desc : {type : String},
    rating : {type : String, required:true},
}, {
    timestamp: true, versionKey: false
})
const ReviewModel = mongoose.model('reviews', DataSchema)
module.exports = ReviewModel