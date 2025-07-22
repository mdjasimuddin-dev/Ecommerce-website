const { IPNInvoiceList } = require("../controllers/InvoiceController")
const mongoose = require('mongoose')
const CartModel = require("../models/CartModel")
const ProfileModel = require("../models/ProfileModel")
const InvoiceModel = require("../models/InvoiceModel")
const InvoiceProductModel = require("../models/InvoiceProductModel")
const ObjectId = mongoose.Types.ObjectId

const invoiceListService = async (req) => {
    try {
        const user_id = new ObjectId(req.headers.userID)
        const email = new ObjectId(req.headers.userEmail)

        console.log(email, user_id);
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const createInvoiceService = async (req) => {
    try {
        const user_id = new ObjectId(req.headers.userID)
        const email = new ObjectId(req.headers.email)

        // step-01, calculate total payable price
        const MatchStage = { $match: { userID: user_id } }
        const joinProductStage = { $lookup: { from: 'products', localField: 'productID', foreignField: '_id', as: 'product' } }
        const unwindProductStage = { $unwind: '$product' }

        const cartProductList = await CartModel.aggregate([
            MatchStage,
            joinProductStage,
            unwindProductStage
        ])

        let totalPrice = 0
        cartProductList.forEach(item => {
            if (item.product.discount === true) {
                let price = parseFloat(item.product.discountPrice) * parseFloat(item.qty)
                totalPrice = price
            } else {
                let price = parseFloat(item.product.price) * parseFloat(item.qty)
                totalPrice = price
            }
        });


        let vat = 0.05 * totalPrice
        const payable = totalPrice + vat


        // step-02, prepare customer and ship details
        const profile = await ProfileModel.aggregate([
            MatchStage
        ])

        const cus_details = `Name : ${profile[0].cus_name}, Email : ${email}, Phone : ${profile[0].cus_phone}, Address : ${profile[0].cus_add}, City : ${profile[0].cus_city} State : ${profile[0].cus_state}, Country : ${profile[0].cus_country}`
        const ship_details = `Name : ${profile[0].ship_name}, Phone : ${profile[0].ship_phone}, Address : ${profile[0].ship_add},City : ${profile[0].cus_city}, State : ${profile[0].ship_state}, Country : ${profile[0].ship_country}`


        // step-03, Transaction Id and Others 
        const tran_id = Math.floor(10000000 + Math.random() * 90000000)
        const val_id = 0
        const delivery_status = "pending"
        const payment_status = "pending"

        // step-04, create Invoice
        const createInvoice = await InvoiceModel.create({
            userID: user_id,
            payable: payable,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,
            delivery_status: delivery_status,
            payment_status: payment_status,
            total: totalPrice,
            vat: vat,
        })

        // step-05, create product Invoice
        const invoice_id = createInvoice['_id']

        cartProductList.forEach(async (item) => {
            await InvoiceProductModel.create({
                userID: user_id,
                invoiceID: invoice_id,
                productID: item.productID,
                payable: payable,
                qty: item.qty,
                price: item.product.discount ? item.product.discountPrice : item.product.price,
                color: item.color,
                size: item.size
            })
        })


        // step-06, Remove product from cart list after payment 
        await CartModel.deleteMany({ userID: user_id })


        return { status: 'success', invoice_id }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}



const cancelInvoiceService = async (req) => {

}


const failInvoiceService = async (req) => {

}


const IPNInvoiceService = async (req) => {

}


const successInvoiceService = async (req) => {

}


module.exports = { invoiceListService, createInvoiceService, cancelInvoiceService, failInvoiceService, IPNInvoiceService, successInvoiceService }
