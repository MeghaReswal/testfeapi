const express = require("express")
const { productCreate, productPurchase, getAllProduct } = require("../controller/ProductController.js")


const router = express.Router()

router.post("/product", productCreate)
router.post("/purchase/:id", productPurchase)
router.get("/products", getAllProduct)



module.exports = router