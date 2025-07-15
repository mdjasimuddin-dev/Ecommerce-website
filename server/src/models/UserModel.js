const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    otp: { type: String, required: true },
}, {
    Timestamp: true, versionKey: false
})


const UserModel = mongoose.model('users', DataSchema)
module.exports = UserModel