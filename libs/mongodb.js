const mongoose = require("mongoose")

const mongoConnect = () => {

    try {
        mongoose.connect(process.env.MONGO_URI).then(console.log("db connected")).catch((err) => console.log(` db disconnected ${err}`))

    } catch (err) {
        console.log(` something went wrong ${err}`)
    }

}

module.exports = mongoConnect