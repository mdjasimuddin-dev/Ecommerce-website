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
    try {
        const result = await ListByBrandService(req)

        if (result.status === "fail") {
            return res.status(500).json(result)
        }

        res.status(200).json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }

}

exports.ProductListByCategory = async (req, res) => {
    try {
        const result = await ListByCategoryService(req)

        if (result.status === "fail") {
            return res.status(500).json(result)
        }

        res.status(200).json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

exports.ProductListByRemark = async (req, res) => {
    try {
        const result = await ListByRemarkService(req)
        if (result.status === 'fail') {
            return res.status(500).json(result)
        }
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}






exports.ProductListBySmiler = async (req, res) => {

    try {
        const result = await ListBySmilerService(req)
        if (result.status === 'fail') {
            res.status(200).json(result)
        }
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

exports.ProductDetails = async (req, res) => {
    try {
        const result = await ProductDetailsService(req)
        if (result === 'fail') {
            res.status(500).json(result)
        }
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

exports.ProductListByKeyword = async (req, res) => {
    try {
        const result = await ListByKeywordService(req)
        if (result.status === 'fail') {
            res.status(500).json(result)
        }
        res.status(200).json(result)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}





exports.ProductReviewList = async (req, res) => {

}




