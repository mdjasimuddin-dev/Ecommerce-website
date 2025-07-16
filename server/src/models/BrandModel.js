const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    brandName: { type: String, unique: true },
    brandImg: { type: String, unique: true }
}, {
    timestamp: true, versionKey: false
})


const BrandModel = mongoose.model('brands', DataSchema)
module.exports = BrandModel