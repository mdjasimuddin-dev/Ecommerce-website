const { invoiceListService, createInvoiceService } = require("../services/InvoiceServices")

exports.invoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}



exports.createInvoiceList = async (req, res) => {
    const result = await createInvoiceService(req)
    res.status(200).json(result)
}


exports.CancelInvoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}



exports.FailInvoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}


exports.IPNInvoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}


exports.successInvoiceList = async (req, res) => {
    const result = await invoiceListService(req)
    res.status(200).json(result)
}