const {Router} = require("express");
const postRouter = Router();

const Post = require("../models/Posts");
const Comment = require("../models/Comment");
const Customer = require("../models/Customer")
const Bookmark = require("../models/Bookmark")

postRouter.get("/", async (req, res) => {
    try {
        const posts = await Post.find({});
        res.send(posts)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

postRouter.post("/", async (req, res) => {
    try {
        const {text, userId} = req.body
        const user = await Customer.findOne({_id: userId})
        const newPost = await new Post({
            name: user.name,
            text: text
        });
        newPost.save()
        await Customer.findByIdAndUpdate(userId, {$push: {posts: newPost._id}})
        return res.status(200).json(newPost);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

postRouter.post('/search', async (req, res) => {
    try {
        const posts = await Post.find({text: {$regex: req.body.text}})
        return res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

postRouter.get("/:id", async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id}).populate({
            path: 'comments',
            populate: {
                path: 'author'
            }
        });
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

postRouter.post('/bookmarks', async (req, res) => {
    try {
        const {userId} = req.body
        const user = await Customer.findOne({_id: userId}).populate(
            {
                path: 'bookmarks',
                populate: {
                    path: 'post'
                }
            });
        res.json(user.bookmarks)

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

})


postRouter.post('/bookmark', async (req, res) => {
        try {
            const {userId, postId} = req.body
            const bookmark = await new Bookmark({
                post: postId
            })
            bookmark.save()
            const user = await Customer.findByIdAndUpdate(userId, {$push: {bookmarks: bookmark}}).populate(
                {
                    path: 'bookmarks',
                    populate: {
                        path: 'post'
                    }
                });

            res.json({bookmark, user})


        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }
)

postRouter.put("/post/:post/push_comment/:user", async (req, res) => {
        try {
            const comment = await new Comment({
                author: req.params.user,
                text: req.body.text,
            })
            comment.save()
            const post = await Post.findByIdAndUpdate(req.params.post, {$push: {comments: comment._id}}).populate({
                path: 'comments',
                populate: {
                    path: 'author'
                }
            });
            return res.status(200).json({post, comment});
        } catch (err) {
            return res.status(400).json({message: err.message});
        }
    }
);

module.exports = postRouter;