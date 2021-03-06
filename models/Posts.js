const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
    name: {type: String, default: "user", required: true},
    username: {type: String, default: "user", required: true},
    verified: {type: Boolean, default: false},
    avatar: {
        type: String,
        default: "https://img2.freepng.ru/20180425/auw/kisspng-master-s-degree-academic-degree-graduate-universit-5ae0f678568f05.7552695615246926003546.jpg"
    },
    date: {type: Date, default: Date},
    text: {type: String},
    image: {type: String},
    shareCount: {type: Number, default: 0, required: true},
    likeCount: {type: Number, default: 0, required: true},
    retweetCount: {type: Number, default: 0, required: true},
    isLiked: {type: Boolean, default: false},

    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

})

module.exports = model('Post', PostSchema)
