const {Router} = require("express");
const actualRouter = Router();

const Actual = require("../models/Actual");

actualRouter.get("/", async (req, res) => {
    try {
        const actual = await Actual.find({});
        res.send(actual)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})

module.exports = actualRouter;