const express = require("express");

const cors = require("cors");


const mensController = require("./controller/mens.controller")

const womensController = require("./controller/womens.controller")

const productsController = require("./controller/product.controller")




const app = express();

app.use(cors());
app.use(express.json());


app.use("/mens", mensController);
app.use("/womens", womensController);

app.use("/products", productsController);


module.exports = app;