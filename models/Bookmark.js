const {Schema, model} = require('mongoose')

const BookmarkSchema = new Schema({
    post: {type: Schema.Types.ObjectId, ref: 'Post', unique: true}
})

module.exports = model('Bookmark', BookmarkSchema)