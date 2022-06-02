const mongoose = require("mongoose");

const userAppRecSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: [
    {
      type: String,
      required: true,
    },
  ],
  degree: {
    type: String,
    required: true,
  },
  evaluation: {
    speech: {
      type: Number,
      required: true,
    },
    leadership: {
      type: Number,
      required: true,
    },
    thinking: {
      type: Number,
      required: true,
    },
    math: {
      type: Number,
      required: true,
    },
    solving: {
      type: Number,
      required: true,
    },
    organizing: {
      type: Number,
      required: true,
    },
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("UserAppRec", userAppRecSchema);
