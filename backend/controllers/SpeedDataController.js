const speedDataService = require("../services/speedDataService");

const getSpeedHistory = async (req, res) => {
  const speedHistory = await speedDataService.getSpeedDataService();
  res.status(200).send(speedHistory);
};

const getAvgSpeed = async (req, res) => {
  const avgSpeed = await speedDataService.getAvgSpeedDataServive();
  res.status(200).send(avgSpeed);
};

const setSpeedHistory = (req, res) => {
  const reqBody = req.body;

  const result = speedDataService.setSpeedDataHistoryUserService(reqBody);
  if (result) {
    res.status(200).send("Speed has been registered, Thanks!");
  } else {
    res.status(500).send("Error occured while registering user!!!");
  }
};

// const setAvgSpeed = (req, res) => {
//     const reqBody = req.body;

//     const result = speedDataService.setSpeedDataHistoryUserService(reqBody);
//     if (result) {
//       res.status(200).send("User has been registered, Thanks!");
//     } else {
//       res.status(500).send("Error occured while registering user!!!");
//     }
//   };

module.exports = { getSpeedHistory, setSpeedHistory, getAvgSpeed };
