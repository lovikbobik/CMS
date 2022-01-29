const {Router} = require("express");
const postRouter = Router();

const Post = require("../models/Posts");

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
        const post = await Post.findOne({_id: req.params.id});
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = postRouter;