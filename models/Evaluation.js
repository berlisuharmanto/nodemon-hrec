const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  ct: {
    type: String,
    required: true,
  },
  math: {
    type: String,
    required: true,
  },
  ps: {
    type: String,
    required: true,
  },
  organizing: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Evaluation", evaluationSchema);
