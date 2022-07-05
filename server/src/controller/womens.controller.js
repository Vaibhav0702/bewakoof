const express = require("express");

const Women = require("../models/womens.models");

const router = express.Router();

router.post("", async (req, res) => {



  try {
    const women = await Women.create(req.body);

    return res.status(201).send({ women: women });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch(
  "/:id",
  async (req, res) => {
    
    try {
      const women = await Women.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).send({ women: women });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.delete(
  "/:id",
  async (req, res) => {
  
    try {
      const women = await Women.findByIdAndDelete(req.params.id);

      res.status(200).send({ women: women });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.get("/:id", async (req, res) => {
    try {
      const women = await Women.findById(req.params.id);
  
      return res.status(201).send({ women: women });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

router.get("", async (req, res) => {
  try {
    const women = await Women.find().lean().exec();

    return res.status(201).send({ women: women });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
