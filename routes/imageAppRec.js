const express = require("express");
const router = express.Router();
const {
  imageAppRecUpload,
  getAppImages,
} = require("../controllers/imageAppRec");
const { upload } = require("../helpers/filehelper");

router.route("/upload").post(upload.single("file"), imageAppRecUpload);
router.route("/").get(getAppImages);

module.exports = router;
