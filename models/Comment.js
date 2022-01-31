const {Schema, model} = require('mongoose')

const CommentSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Customer'},
    text: {type: String, required: true}
})

module.exports = model('Comment', CommentSchema)