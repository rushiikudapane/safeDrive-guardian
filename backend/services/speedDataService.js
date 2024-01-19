const speedDataRepository = require("../repositories/speedDataRepository");

const getSpeedDataService = () => {
  try {
    const response = speedDataRepository.getSpeedData();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occured while fetching Speed Data" };
  }
};

const getAvgSpeedDataServive = () => {
  try {
    const response = speedDataRepository.getAvgSpeedData();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occured while fetching Average Speed Data" };
  }
};

const setSpeedDataHistoryUserService = (reqBody) => {
  const { speed, timestamp } = reqBody;
  try {
    speedDataRepository.setSpeedData(speed, timestamp);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  getSpeedDataService,
  getAvgSpeedDataServive,
  setSpeedDataHistoryUserService,
};
