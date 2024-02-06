const userRepository = require("../repositories/userRepository");

const getUserService = () => {
  try {
    const response = userRepository.getUser();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occured while fetching Users" };
  }
};

const registerUserService = (reqBody) => {
  const { name, photo, email, mobile, gender, age } = reqBody;
  try {
    userRepository.registerUser(name, photo, email, mobile, gender, age);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getUserService, registerUserService };
