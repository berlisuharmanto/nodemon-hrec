const express = require("express");
const router = express.Router();
const {
  signUp,
  getUsers,
  updateUser,
  getUser,
} = require("../controllers/userAppRec");
const { upload } = require("../helpers/filehelper");

router.route("/signup").post(upload.single("file"), signUp);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUser);
router.route("/users/:id").put(upload.single("file"), updateUser);

module.exports = router;
