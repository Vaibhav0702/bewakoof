const express = require("express");

const Products = require("../models/product.models");

const router = express.Router();

router.post("", async (req, res) => {

  req.body.userId = req.user._id;

  try {
    const products = await Products.create(req.body);

    return res.status(201).send({ products: products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch(
  "/:id",
  async (req, res) => {
    req.body.userId = req.user._id;
    try {
      const products = await Products.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).send({ products : products });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.delete(
  "/:id",
  async (req, res) => {
    req.body.userId = req.user._id;
    try {
      const products = await Products.findByIdAndDelete(req.params.id);

      res.status(200).send({ products: products });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.get("", async (req, res) => {
  try {
    const products = await Products.find().lean().exec();

    return res.status(201).send({ products : products });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
