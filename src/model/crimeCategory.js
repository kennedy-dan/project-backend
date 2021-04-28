const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const crimeSchemma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryImage:{type: String}
},{timestamps: true})

module.exports = mongoose.model('CrimeCategory', crimeSchemma)