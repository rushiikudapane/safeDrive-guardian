const DrivingDataSchema = require("../models/DrivingData ");

const getDrivingData = async () => {
  const response = await DrivingDataSchema.find();
  return response;
};

const updateDrivingData = async (userId, updatedData) => {
  let userDrivingData = await DrivingDataSchema.findOne({ user: userId });
  //   console.log("This is USERID: ", userId);

  if (!userDrivingData) {
    userDrivingData = new DrivingDataSchema({ user: userId, ...updatedData });
  } else {
    Object.assign(userDrivingData, updatedData);
  }

  await userDrivingData.save();
};

module.exports = { getDrivingData, updateDrivingData };
