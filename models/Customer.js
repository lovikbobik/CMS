const {Schema, model} = require('mongoose')

const CustomerSchema = new Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    bookmarks: [{type: Schema.Types.ObjectId, ref: 'Bookmark'}]
})

module.exports = model('Customer', CustomerSchema)