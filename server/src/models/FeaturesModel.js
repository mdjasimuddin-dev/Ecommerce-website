const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
}, {
    Timestamp: true, versionKey: false
})
const FeatureModel = mongoose.model('paymentSettings', DataSchema)
module.exports = FeatureModel