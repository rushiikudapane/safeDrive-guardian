const DrivingDataService = require("../services/DrivingDataService");

const getDrivingData = async (req, res) => {
  const data = await DrivingDataService.getDrivingDataService();
  res.status(200).send(data);
};

const updateDrivingData = (req, res) => {
  //   console.log("params: ", req.params);
  const userId = req.query.userId;
  const reqBody = req.body;
  const result = DrivingDataService.updateDrivingDataService(userId, reqBody);
  if (result === true) {
    res.status(200).send("Driving data has been updated, Thanks!");
  } else {
    res.status(500).send(result);
  }
};

module.exports = { getDrivingData, updateDrivingData };
