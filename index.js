const express = require("express")
const mongoConnect = require("./libs/mongodb.js")
const router = require("./router/index.js")
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();


const app = express()
app.use(express.json());
app.use(cors());

app.use("/api", router)

const PORT = process.env.PORT || 2000;

app.listen(PORT,
    mongoConnect()
)