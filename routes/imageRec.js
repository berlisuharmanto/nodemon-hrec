const express = require("express");
const router = express.Router();
const {
  imageRecUpload,
  getRecImages,
  imageUpdate,
  getRecImage,
} = require("../controllers/imageRec");
const { upload } = require("../helpers/filehelper");

router.route("/upload").post(upload.single("file"), imageRecUpload);
router.route("/").get(getRecImages);
router.route("/:owner").put(upload.single("file"), imageUpdate);
router.route("/:owner").get(getRecImage);

module.exports = router;
