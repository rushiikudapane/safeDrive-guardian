const UserService = require("../services/userService");

const getUsers = async (req, res) => {
  const users = await UserService.getUserService();
  res.status(200).send(users);
};

// POST req to register new user
const registerUser = (req, res) => {
  const reqBody = req.body;

  const result = UserService.registerUserService(reqBody);
  if (result) {
    res.status(200).send("User has been registered, Thanks!");
  } else {
    res.status(500).send("Error occured while registering user!!!");
  }
};

module.exports = { getUsers, registerUser };
