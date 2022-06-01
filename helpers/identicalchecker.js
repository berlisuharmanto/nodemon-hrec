const UserRec = require("../models/UserRec");

const checkIdentical = async (condition, value) => {
  const userExist = await UserRec.findOne({ [condition]: value });

  if (userExist) {
    return true;
  }
  return false;
};

module.exports = { checkIdentical };
