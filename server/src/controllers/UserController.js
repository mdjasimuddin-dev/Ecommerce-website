const { userOtpService, userOtpVerifyService, saveProfileData, readProfileService } = require("../services/UserServices")

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


exports.userLogout = async (req, res) => {
    const cookieOptions = {
        httpOnly: false,
        expires: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
    res.cookie('token', '', cookieOptions)
    return res.status(200).json({ message: "user logout done" })
}


exports.createProfile = async (req, res) => {
    const result = await saveProfileData(req)
    return res.status(200).json(result)
}


exports.updateProfile = async (req, res) => {
    const result = await saveProfileData(req)
    return res.status(200).json(result)
}


exports.readProfile = async (req, res) => {
    const result = await readProfileService(req)
    return res.status(200).json(result)
}