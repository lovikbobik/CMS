const {Schema, model} = require('mongoose')

const CustomerSchema = new Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: 'https://img2.freepng.ru/20180425/auw/kisspng-master-s-degree-academic-degree-graduate-universit-5ae0f678568f05.7552695615246926003546.jpg'},

    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    bookmarks: [{type: Schema.Types.ObjectId, ref: 'Bookmark'}]
})

module.exports = model('Customer', CustomerSchema)