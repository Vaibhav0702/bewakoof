const mongoose = require("mongoose");

const womensSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    image: [{ type: String }],
    name: { type: String, required: true },
    gender: [{ type: String, required: false }],
    price: { type: String, required: true },
    canceledprice: { type: String, required: false },
    tribe: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("womens", womensSchema);
