const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    verified: {type: Boolean},
    avatar: {type: String},
})

module.exports = model('User', UserSchema)
