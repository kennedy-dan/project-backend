const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchemma = new mongoose.Schema({
    firstName: {
        type:'String',
        required: true
    },
    lastName: {
        type: 'String',
        required: true
    },
    email: {
        type: 'String',
        required:true,
        unique: true
    },
    hash_password: {
        type: String,
        required: true,
    },
    role: {
        type: String, 
        enum: ['user', 'admin'],
        default: 'user'
    },
},{timestamps: true})

userSchemma.virtual('password')
.set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10)
})

userSchemma.virtual('fullName')
.get(function(){
    return `${this.firstName} ${this.lastName}`
})

userSchemma.methods = {
    authenticate:  function(password){
        return bcrypt.compare(password, this.hash_password)
    }
}

module.exports = mongoose.model('User', userSchemma)