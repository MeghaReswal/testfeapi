const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    uniqueId: {
        type: String,
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    quantity: {
        type: Number
    }
})
const Product = mongoose.model("Product", productSchema)

module.exports = Product