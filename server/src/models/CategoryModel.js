const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    categoryName: { type: String, unique: true },
    categoryImg: { type: String, required: true }
}, {
    Timestamp: true, versionKey: false
})


const CategoryModel = mongoose.model('categories', DataSchema)
module.exports = CategoryModel