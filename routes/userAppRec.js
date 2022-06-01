const express = require("express");
const router = express.Router();
const {
  signUp,
  getUsers,
  updateUser,
  getUser,
  acceptUser,
  deleteUser,
} = require("../controllers/userAppRec");
const { upload } = require("../helpers/filehelper");

router.route("/signup").post(upload.single("file"), signUp);
router.route("/users").get(getUsers);
router.route("/users/:id").get(getUser);
router.route("/users/:id").put(upload.single("file"), updateUser);
router.route("/users/:id/accept").put(acceptUser);
router.route("/users/:id/delete").delete(deleteUser);

module.exports = router;
