const mongoose = require("mongoose");

const FacialData = mongoose.Schema(
  {
    userID: {
      type: String,
      require: true,
    },
    SleeHistory: {
      type: Array,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = FacialData;
