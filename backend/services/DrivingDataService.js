const DrivingDataRepository = require("../repositories/DrivingDataRepository");

const getDrivingDataService = () => {
  try {
    const response = DrivingDataRepository.getDrivingData();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occurred while fetching Driving Data" };
  }
};

const updateDrivingDataService = (userId, reqBody) => {
  try {
    // console.log("this is userID from service: ", userId);
    DrivingDataRepository.updateDrivingData(userId, reqBody);
    return true;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

module.exports = { getDrivingDataService, updateDrivingDataService };
