const mongoose = require("mongoose");

const imageRecSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileType: {
    type: String,
    required: true,
  },
  fileSize: {
    type: Number,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserRec",
    required: true,
  },
});

module.exports = mongoose.model("ImageRec", imageRecSchema);
