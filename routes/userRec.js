const express = require("express");
const router = express.Router();
const {
  signUp,
  getUsers,
  updateUser,
  getUser,
  login,
} = require("../controllers/userRec");
const { upload } = require("../helpers/filehelper");

const authMiddleware = require("../middleware/auth");

router.route("/signup").post(upload.single("file"), signUp);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUser);
router.route("/users/:id").put(upload.single("file"), updateUser);
router.route("/login").post(upload.single("file"), login);

module.exports = router;
