const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    img1: { type: String, required : true},
    title: { type: String, required : true},
    desc: { type: String, required : true},
}, {
    timestamps: true, versionKey: false
})


const ProductSliderModel = mongoose.model('productSliders', DataSchema)
module.exports = ProductSliderModel