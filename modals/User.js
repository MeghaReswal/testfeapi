const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    prodDetail: {
        type: Object

    }

})

const User = mongoose.model("User", UserSchema)

module.exports = User