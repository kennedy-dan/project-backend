const mongoose = require('mongoose')

const locationSchemma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('Location', locationSchemma)