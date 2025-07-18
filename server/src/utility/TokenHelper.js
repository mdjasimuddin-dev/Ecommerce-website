var jwt = require('jsonwebtoken');



exports.EncodedToken = (userEmail, userID) => {
    let KEY = process.env.JWT_SECRET_KEY
    let EXPIRE = { expiresIn: '24h' }
    let Payload = {
        email: userEmail,
        userID: userID
    }

    console.log(jwt.sign(Payload, KEY, EXPIRE));
    return jwt.sign(Payload, KEY, EXPIRE)
}


exports.DecodedToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}