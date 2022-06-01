const express = require("express");
const router = express.Router();
const {
  getEvaluations,
  getEvaluation,
  createEvaluation,
} = require("../controllers/evaluation");
const { upload } = require("../helpers/filehelper");

router.route("/").get(getEvaluations);
router.route("/:id").get(getEvaluation);
router.route("/post").post(upload.single("file"), createEvaluation);

module.exports = router;
