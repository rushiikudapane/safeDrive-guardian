const mongoose = require("mongoose");

const DrivingData = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    averageSpeedTotal: {
      type: Number,
      default: 0,
    },
    sleepCountTotal: {
      type: Number,
      default: 0,
    },
    totalDistance: {
      type: Number,
      default: 0,
    },
    callBlocksCount: {
      name: {
        type: String,
        required: false,
      },
      mobile: {
        type: String,
        required: false,
      },
    },
    badge: {
      type: String,
      default: "Newbie",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DrivingData", DrivingData);
