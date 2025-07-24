const { invoiceListService, createInvoiceService, successPaymentService, failPaymentService, cancelPaymentService, IPNPaymentService, invoiceProductListService } = require("../services/InvoiceServices")


exports.createInvoiceList = async (req, res) => {
    const result = await createInvoiceService(req)
    res.status(200).json(result)
}


exports.paymentSuccess = async (req, res) => {
    const result = await successPaymentService(req)
    res.status(200).json(result)
}



exports.paymentFail = async (req, res) => {
    const result = await failPaymentService(req)
    res.status(200).json(result)
}


exports.paymentCancel = async (req, res) => {
    const result = await cancelPaymentService(req)
    res.status(200).json(result)
}


exports.IpnPayment = async (req, res) => {
    const result = await IPNPaymentService(req)
    res.status(200).json(result)
}



exports.invoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}

exports.invoiceProductList = async (req, res) => {
    const result = await invoiceProductListService(req)
    res.status(200).json(result)
}