const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    img1: { type: String, required : true},
    img2: { type: String, required : true},
    img3: { type: String, required : true},
    img4: { type: String, required : true},
    img5: { type: String},
    img6: { type: String},
    img7: { type: String},
    img8: { type: String},
    desc: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: Boolean, required: true },
}, {
    Timestamps: true, versionKey: false
})


const ProductDetailsModel = mongoose.model('productsDetails', DataSchema)
module.exports = ProductDetailsModel