const Product = require("../modals/producs.js")
const User = require("../modals/User.js")

const productCreate = async (req, res) => {
    try {
        const { name, price, uniqueId, quantity } = req?.body

        if (!name || !price || !uniqueId || !quantity || quantity <= 0 || price <= 0) {
            res.status(400).send("invalid request")
        }

        const buyProd = new Product({ name, price, uniqueId, quantity })

        await buyProd.save()

        console.log("buyProd", buyProd)

        res.status(200).send({
            success: true,
            message: "product created successfully"
        })
    } catch {

        res.status(200).send({
            success: false,
            message: "something went wrong"
        })

    }


}

const productPurchase = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("id", id);

        const findProduct = await Product.findById(id);

        if (!findProduct) {
            return res.status(404).send({
                success: false,
                message: "Product does not exist"
            });
        }

        const productPrice = findProduct.price;

        if (findProduct.quantity < 1) {
            return res.status(400).send({
                success: false,
                message: "Product is out of stock"
            });
        }

        findProduct.quantity -= 1;
        await findProduct.save();


        return res.status(200).send({
            success: true,
            message: "Product purchased successfully",
            price: productPrice
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send({
            success: false,
            message: "Something went wrong"
        });
    }
};

const getAllProduct = async (req, res) => {

    try {
        const product = await Product.find()

        console.log("Product", product)

        if (!product) {
            res.status(401).send({
                success: false,
                message: "product data not found"
            })
        }

        res.status(200).send({
            success: true,
            data: product
        })


    } catch (err) {
        res.status(401).send({
            success: false,
            message: "something went wrong"
        })
    }

}


module.exports = { productCreate, productPurchase, getAllProduct }