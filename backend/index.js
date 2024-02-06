require("dotenv").config();
const express = require("express");
const connectDB = require("../backend/config/dbConnection");
const userRouter = require("./routes/Users");
const drivingDataRouter = require("./routes/DrivingData");

const app = express(); //initailized express app

connectDB(); //Call made to connect database
const PORT = process.env.PORT | 5002;

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/data", drivingDataRouter);

app.get("/", (req, res) => {
  res.status(200).send("Server started!!! Happy coding");
});

app.listen(PORT, () => {
  console.log(`Lisening to PORT: ${PORT}`);
});
