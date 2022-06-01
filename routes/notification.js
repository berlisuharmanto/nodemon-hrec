const express = require("express");
const router = express.Router();
const {
  getNotifications,
  getUserNotification,
  createNotification,
  deleteNotification,
} = require("../controllers/notification");
const { upload } = require("../helpers/filehelper");

router.route("/").get(getNotifications);
router.route("/:hrd").get(getUserNotification);
router.route("/post").post(upload.single("file"), createNotification);
router.route("/:id/delete").delete(deleteNotification);

module.exports = router;
