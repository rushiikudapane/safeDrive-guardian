const userSchema = require("../models/Users");

const getUser = async () => {
  const response = await userSchema.find();
  // console.log(response);
  return response;
};

const registerUser = async (name, photo, email, mobile, gender, age) => {
  const newUser = new userSchema({
    name,
    photo,
    email,
    mobile,
    gender,
    age,
  });

  await newUser.save();
};

module.exports = { getUser, registerUser };
