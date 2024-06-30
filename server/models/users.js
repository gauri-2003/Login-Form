const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    dob: Date,
    password: String
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel