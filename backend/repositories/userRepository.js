const userSchema = require("../models/Users");

const getUser = async () => {
  const response = await userSchema.find();
  // console.log(response);
  return response;
};

const registerUser = async (name, email, contact, driversLicense) => {
  const newUser = new userSchema({
    name,
    email,
    contact,
    driversLicense,
  });

  await newUser.save();
};

module.exports = { getUser, registerUser };
