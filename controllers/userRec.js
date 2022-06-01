const UserRec = require("../models/UserRec");
const { checkIdentical } = require("../helpers/identicalchecker");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, plainPassword, confPass, position } = req.body;

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
      const userRec = new UserRec({
        name,
        email,
        password,
        position,
      });
      await userRec.save();

      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      userRec.token = token;

      res.status(201).send({ token: userRec.token, id: userRec._id });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserRec.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    user.token = token;

    res.send({ token: user.token, id: user._id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const userRec = await UserRec.findById(req.params.id);
    res.status(200).send(userRec);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const userRec = await UserRec.find();
    res.status(200).send(userRec);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const userRec = await UserRec.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
      },
      { new: true }
    );
    res.status(200).send(userRec);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { signUp, getUsers, updateUser, getUser, login };
