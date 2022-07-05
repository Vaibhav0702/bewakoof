const express = require("express");



const Mens = require("../models/mens.models");

const router = express.Router();

router.post("", async (req, res) => {

  req.body.userId = req.user._id;

  try {
    const mens = await Mens.create(req.body);

    return res.status(201).send({ mens: mens });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch(
  "/:id",
  async (req, res) => {
    req.body.userId = req.user._id;

    try {
      const mens = await Mens.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      res.status(200).send({ mens: mens });
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
      const mens = await Mens.findByIdAndDelete(req.params.id);

      res.status(200).send({mens: mens });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.get("/:id", async (req, res) => {
    try {
      const mens = await Mens.findById(req.params.id);
  
      return res.status(201).send({ mens : mens });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

router.get("", async (req, res) => {
  try {
    const mens = await Mens.find().lean().exec();

    return res.status(201).send({ mens : mens });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
