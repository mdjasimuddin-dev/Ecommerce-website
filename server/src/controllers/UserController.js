const { userOtpService } = require("../services/UserServices")

exports.userOtp = async (req, res) => {
    const result = await userOtpService(req)
    if (result.status === 'fail') {
        return res.status(500).json(result)
    }
    return res.status(200).json(result)
}


exports.userOtpVerify = (req, res) => {

}


exports.userLogout = (req, res) => {

}


exports.createProfile = (req, res) => {

}


exports.updateProfile = (req, res) => {

}


exports.readProfile = () => {

}