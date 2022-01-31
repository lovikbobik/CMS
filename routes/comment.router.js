const {Router} = require("express");
const commentRouter = Router();

const Comment = require("../models/Comment");

commentRouter.get("/", async (req, res) => {
    try {
        const comments = await Comment.find({});
        res.json(comments)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

module.exports = commentRouter;