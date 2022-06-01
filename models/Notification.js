const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  hrd: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  appli: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Notification", notificationSchema);
