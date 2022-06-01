const UserAppRec = require("../models/UserAppRec");
const { checkIdentical } = require("../helpers/identicalchecker");
const bcrypt = require("bcrypt");
const expresValidator = require("express-validator");

const signUp = async (req, res) => {
  try {
    const {
      name,
      email,
      specialization,
      experience,
      plainPassword,
      confPass,
      position,
      status,
    } = req.body;

    console.log(req.body);

    console.log(plainPassword == confPass);

    const password = await bcrypt.hash(plainPassword, 10);

    const userExist = await checkIdentical("email", email);

    if (plainPassword !== confPass) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    } else if (userExist) {
      return res.status(400).json({
        message: "User already exists",
      });
    } else {
      const userAppRec = new UserAppRec({
        name,
        email,
        specialization,
        experience,
        password,
        position,
        status,
      });
      await userAppRec.save();
      res.status(201).send(userAppRec);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const userAppRec = await UserAppRec.findById(req.params.id);
    res.status(200).send(userAppRec);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const userAppRec = await UserAppRec.find();
    res.status(200).send(userAppRec);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      name,
      email,
      specialization,
      experience,
      plainPassword,
      confPass,
      position,
    } = req.body;

    const userAppRec = await UserAppRec.findById(req.params.id);

    if (plainPassword !== confPass) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    } else {
      userAppRec.name = name;
      userAppRec.email = email;
      userAppRec.specialization = specialization;
      userAppRec.experience = experience;
      userAppRec.password = password;
      userAppRec.position = position;

      await userAppRec.save();
      res.status(201).send(userAppRec);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  signUp,
  getUsers,
  updateUser,
  getUser,
};
