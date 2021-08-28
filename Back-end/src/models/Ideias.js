const mongoose = require('mongoose');

const organizingIdeasSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    goal: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    emphasis: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Ideias", organizingIdeasSchema);