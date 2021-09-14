const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        set: value =>  crypto.createHash('md5').update(value).digest('hex'),
    },
    email: {
        type: String,
        required: true,
    },
   
})

module.exports = mongoose.model("User", userSchema);