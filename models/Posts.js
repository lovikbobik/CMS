const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    name: {type: String, default: "user" ,required: true},
    username: {type: String,  default: "user",required: true},
    verified: {type: Boolean, default: false},
    avatar: {type: String, default: "https://i.ytimg.com/vi/IuBbnJr2RTY/maxresdefault.jpg"},
    date: {type: Date, default: Date},
    text: {type: String},
    image: {type: String},
    shareCount: {type: Number,  default: 0, required: true},
    likeCount: {type: Number,  default: 0, required: true},
    retweetCount: {type: Number,  default: 0, required: true},
    isLiked: {type: Boolean, default: false}
})

module.exports = model('Post', PostSchema)
