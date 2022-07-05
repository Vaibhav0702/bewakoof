const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://nike:nike@cluster0.lpebv.mongodb.net/bewakoof?retryWrites=true&w=majority"
  );
};
