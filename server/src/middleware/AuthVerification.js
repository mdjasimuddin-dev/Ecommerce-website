const { DecodedToken } = require("../utility/TokenHelper")

module.exports = (req, res, next) => {
    let token = req.headers.token
    if (!token) {
        token = req.cookies.token
    }

    let decoded = DecodedToken(token)

    if (decoded === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorize access" })
    }
    const email = decoded.email
    const userID = decoded.userID
    req.headers.useEmail = email
    req.headers.userID = userID

    next()
}