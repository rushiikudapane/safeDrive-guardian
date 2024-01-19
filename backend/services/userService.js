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
  const { name, email, contact, driversLicense } = reqBody;
  try {
    userRepository.registerUser(name, email, contact, driversLicense);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getUserService, registerUserService };
