const mongoose = require('mongoose')
const FeatureModel = require('./../models/FeaturesModel')
const ObjectId = mongoose.Types.ObjectId

const featuresListService = async () => {
    try {
        let data = await FeatureModel.find()

        return { status: 'success', data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}



module.exports = { featuresListService }