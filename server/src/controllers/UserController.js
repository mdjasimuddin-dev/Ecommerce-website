const { userOtpService, userOtpVerifyService } = require("../services/UserServices")

exports.userOtp = async (req, res) => {
    const result = await userOtpService(req)
    if (result.status === 'fail') {
        return res.status(500).json(result)
    }
    return res.status(200).json(result)
}


exports.userOtpVerifyLogin = async (req, res) => {
    const result = await userOtpVerifyService(req)
    if (result.status === 'fail') {
        return res.status(500).json(result)
    }

    if (result.status === 'success') {
        const cookieOptions = {
            httpOnly: false,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }
        res.cookie('token', result.token, cookieOptions)
    }
    return res.status(200).json(result)
}


exports.userLogout = (req, res) => {

}


exports.createProfile = (req, res) => {

}


exports.updateProfile = (req, res) => {

}


exports.readProfile = () => {

}