const mongoose = require('mongoose')
const CartModel = require("../models/CartModel")
const ProfileModel = require("../models/ProfileModel")
const InvoiceModel = require("../models/InvoiceModel")
const InvoiceProductModel = require("../models/InvoiceProductModel")
const PaymentSettingModel = require("./../models/PaymentSettingModel")
const ObjectId = mongoose.Types.ObjectId
const FormData = require('form-data')
const axios = require('axios')

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
        const val_id = "0"
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

        // const invoiceProduct = cartProductList.map(item => ({
        //     userID: user_id,
        //     invoiceID: invoice_id,
        //     productID: item.productID,
        //     payable: payable,
        //     qty: item.qty,
        //     price: item.product.discount ? item.product.discountPrice : item.product.price,
        //     color: item.color,
        //     size: item.size
        // }))


        // const invoiceProductData = await InvoiceProductModel.insertMany(invoiceProduct);
        // console.log(invoiceProductData);
        cartProductList.forEach(async (item) => {
            await InvoiceProductModel.create({
                userID: user_id,
                invoiceID: invoice_id,
                productID: item.productID,
                payable: payable,
                qty: item.qty,
                price: item.product.discount ? parseFloat(item.product.discountPrice) : parseFloat(item.product.price),
                color: item.color,
                size: item.size
            })
        })

        // step-06, Remove product from cart list after payment 
        // await CartModel.deleteMany({ userID: user_id })



        // Step-07 Prepare SSL Payment
        const paymentSettings = await PaymentSettingModel.find()
        if (!paymentSettings) {
            return { status: 'fail', message: 'Payment settings not found in database.' };
        }

        // console.log(paymentSettings);


        let form = new FormData()
        // payment related mandatory 
        form.append('store_id', paymentSettings[0]['store_Id'])
        form.append('store_passwd', paymentSettings[0]['store_passwd'])
        form.append('total_amount', payable.toString())
        form.append('currency', paymentSettings[0]['currency'])
        form.append('tran_id', tran_id)
        form.append('product_category', "MJ SOFT BD Category")
        form.append('success_url', `${paymentSettings[0]['success_url']}/${tran_id}`)
        form.append('fail_url', `${paymentSettings[0]['fail_url']}/${tran_id}`)
        form.append('cancel_url', `${paymentSettings[0]['cancel_url']}/${tran_id}`)
        form.append('ipn_url', `${paymentSettings[0]['ipn_url']}/${tran_id}`)

        // Customer Information
        form.append('cus_name', profile[0]['cus_name'])
        form.append('cus_email', profile[0]['cus_email'])
        form.append('cus_phone', profile[0]['cus_phone'])
        form.append('cus_add1', profile[0]['cus_add'])
        form.append('cus_postcode', profile[0]['cus_postcode'])
        form.append('cus_city', profile[0]['cus_city'])
        form.append('cus_state', profile[0]['cus_state'])
        form.append('cus_country', profile[0]['cus_country'])

        // Shipment Information
        form.append('shipping_method', 'YES')
        form.append('num_of_item', 1)
        form.append('weight_of_items', 0.5)
        form.append('logistic_pickup_id', "MJx524df5dfad")
        form.append('logistic_delivery_type', 'Home')
        form.append('ship_name', profile[0]['ship_name'])
        form.append('ship_add1', profile[0]['ship_add'])
        form.append('ship_postcode', profile[0]['ship_postcode'])
        form.append('ship_city', profile[0]['ship_city'])
        form.append('ship_state', profile[0]['ship_state'])
        form.append('ship_country', profile[0]['ship_country'])

        // Product Information
        form.append('product_name', 'According Invoice')
        form.append('product_category', 'According Invoice')
        form.append('product_profile', 'According Invoice')


        const SSLRes = await axios.post(paymentSettings[0]['init_url'], form)

        return { status: 'success', data: SSLRes.data }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const successPaymentService = async (req) => {
    try {
        const trxId = req.params.trxId
        await InvoiceModel.updateOne({ tran_id: trxId }, { payment_status: 'success' })
        return { status: 'success', message: "Payment Successful" }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}



const failPaymentService = async (req) => {
    try {
        const trxId = req.params.trxId
        await InvoiceModel.updateOne({ tran_id: trxId }, { payment_status: 'Fail' })
        return { status: 'success', message: "Payment Fail" }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const cancelPaymentService = async (req) => {
    try {
        const trxId = req.params.trxId
        await InvoiceModel.updateOne({ tran_id: trxId }, { payment_status: 'cancel' })
        return { status: 'success', message: "Payment Cancel" }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}


const IPNPaymentService = async (req) => {

}





module.exports = { invoiceListService, createInvoiceService, successPaymentService, failPaymentService, cancelPaymentService, IPNPaymentService, }
