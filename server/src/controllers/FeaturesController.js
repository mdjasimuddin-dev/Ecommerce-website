const { featuresListService } = require("../services/FeaturesServices")


exports.featuresList = async (req, res) => {
    const result = await featuresListService(req)
    res.status(200).json(result)
}