const { EmailSend } = require("../utility/EmailHelper")
const { userModel } = require('./../models/UserModel')

const userOtpService = async (req) => {
    try {
        const email = req.params.email
        const code = Math.floor(100000 + Math.random() * 90000)

        const MailSubject = `Verification Email`
        const MailText = `Your Verification code is ${code}`
        await EmailSend(email, MailSubject, MailText)

        await userModel.update({ email: email }, { $set: { otp: code } }, { upsert: true })
        return { status: 'success', message: '6 digit opt has been sent' }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}



const userOtpVerifyService = () => {

}


const userLogoutService = () => {

}


const userCreateService = () => {

}


const userUpdateService = () => {

}


const userReadService = () => {

}


module.exports = {
    userOtpService,
    userOtpVerifyService,
    userLogoutService,
    userCreateService,
    userUpdateService,
    userReadService
}