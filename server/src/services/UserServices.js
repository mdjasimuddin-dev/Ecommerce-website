const { EmailSend } = require("./../utility/EmailHelper")
const UserModel = require('./../models/UserModel')
const { EncodedToken } = require("../utility/TokenHelper")

const userOtpService = async (req) => {
    try {
        const email = req.params.email
        const code = Math.floor(100000 + Math.random() * 90000)

        const MailSubject = `Your Verification Code`
        const MailText = `Dear User,
Your verification code is: ${code}
Please use this code to complete your verification process. This code is valid for a limited time.
If you did not request this code, please ignore this email.
Best regards,
The MJ Soft Bd Team`
        await EmailSend(email, MailSubject, MailText)

        await UserModel.updateOne({ email: email }, { $set: { otp: code } }, { upsert: true })
        return { status: 'success', message: '6 digit opt has been sent' }
    } catch (error) {
        return { status: 'fail', message: error.message }
    }
}



const userOtpVerifyService = async (req) => {
    try {
        const email = req.params.email
        const otp = req.params.otp
        console.log(email, otp);

        const total = await UserModel.countDocuments({ email: email, otp: otp })
        console.log(total);

        if (!total) {
            return { status: 'fail', message: 'Invalid OTP or Email' };
        }

        if (total === 1) {
            const user = await UserModel.findOne({ email: email, otp: otp })
            console.log(user);


            const token = EncodedToken(email, user._id)
            console.log(token);

            // await UserModel.updateOne({ email: email }, { $set: { otp: '0' } })

            return { status: 'success', data: "Token Verify Done", token };
        }


    } catch (error) {
        return { status: 'fail', message: error.message }
    }
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