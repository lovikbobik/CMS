const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json({extended: true}))

const PORT = 4000
const mongoUri = "mongodb+srv://lovik:1234qwer@cluster0.iqtby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use('/posts', require('./routes/post.router'))
app.use('/actual', require('./routes/actual.router'))
app.use('/users', require('./routes/user.router'))
app.use('/auth', require('./routes/auth.router'))

async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        app.listen(process.env.PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()