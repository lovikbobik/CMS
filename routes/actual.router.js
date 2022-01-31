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
actualRouter.post("/:id", async (req, res) => {
    try {
        const actual = await Actual.findOne({_id: req.body.userId});
        res.send(actual)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
})
module.exports = actualRouter;