const {Router} = require("express");
const usersRouter = Router();

const User = require("../models/Users");

usersRouter.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

module.exports = usersRouter;