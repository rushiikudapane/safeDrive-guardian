const mongoose = require("mongoose");

const SpeedData = mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    SpeedHistory: {
      type: Array,
      require: true,
    },
    AvgSpeed: {
      type: String,
      reuire: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("SpeedData", SpeedData);
