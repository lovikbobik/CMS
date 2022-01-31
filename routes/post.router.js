const {Router} = require("express");
const postRouter = Router();

const Post = require("../models/Posts");
const Comment = require("../models/Comment");

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
        const newPost = await new Post(req.body);
        newPost.save()
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

postRouter.put("/post/:post/push_comment/:user", async (req, res) => {
        try {
            const comment = await new Comment({
                author: req.params.user,
                text: req.body.text,
            })
            comment.save()
            const post = await Post.findByIdAndUpdate(req.params.post, {$push: {comments: comment._id}}).
            populate({
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