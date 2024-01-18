const mongoose = require("mongoose");

const Users = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    driversLicense: {
      type: String,
      require: false,
    },
  },
  {
    timestamp: true,
  }
);
