const mongoose = require("mongoose");

const userRecSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UserRec", userRecSchema);
