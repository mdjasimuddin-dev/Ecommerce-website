const {
    BrandService,
    CategoryService,
    SliderService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilerService,
    ListByKeywordService,
    ListByRemarkService,
    ProductDetailsService,
    ReviewListService
} = require('./../services/ProductServices')


exports.ProductBrandList = async (req, res) => {
    try {
        const result = await BrandService()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}



exports.ProductCategoryList = async (req, res) => {
    try {
        const result = await CategoryService()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}




exports.ProductSliderList = async (req, res) => {
    try {
        const result = await SliderService()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ status: "fail", message: error.message });
    }
}





exports.ProductListByBrand = async (req, res) => {

}


exports.ProductListByCategory = async (req, res) => {

}

exports.ProductListBySmiler = async (req, res) => {

}

exports.ProductListByKeyword = async (req, res) => {

}

exports.ProductListByRemark = async (req, res) => {

}

exports.ProductDetails = async (req, res) => {

}

exports.ProductReviewList = async (req, res) => {

}




