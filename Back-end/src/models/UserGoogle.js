const mongoose = require('mongoose');

const userGoogleSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    googleId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    
   
})

module.exports = mongoose.model("UserGoogle", userGoogleSchema);