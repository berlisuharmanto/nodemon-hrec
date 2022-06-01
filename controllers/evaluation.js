const Evaluation = require("../models/Evaluation");

const getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.status(200).send(evaluations);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    res.status(200).send(evaluation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createEvaluation = async (req, res) => {
  try {
    const { owner, ct, math, ps, organizing } = req.body;

    const evaluation = new Evaluation({
      owner,
      ct,
      math,
      ps,
      organizing,
    });
    await evaluation.save();
    res.status(200).send(evaluation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getEvaluations,
  getEvaluation,
  createEvaluation,
};
