const express = require("express");
const router = express.Router();
const {
  getNotifications,
  getNotification,
  createNotification,
} = require("../controllers/notification");
const { upload } = require("../helpers/filehelper");

router.route("/").get(getNotifications);
router.route("/:id").get(getNotification);
router.route("/post").post(upload.single("file"), createNotification);

module.exports = router;
