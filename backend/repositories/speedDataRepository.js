const SpeedDataSchema = require("../models/SpeedData");

const getSpeedData = async () => {
  const response = await SpeedDataSchema.find();
  // console.log(response);
  return response;
};

const getAvgSpeedData = async () => {
  const response = await SpeedDataSchema.find();
  // console.log(response);
  return response;
};

const setSpeedData = async (speed, timestamp) => {
  const newSpeedData = new SpeedDataSchema({
    speed: speed,
    timestamp: timestamp,
  });

  await newSpeedData.save();
};

module.exports = { getSpeedData, getAvgSpeedData, setSpeedData };
