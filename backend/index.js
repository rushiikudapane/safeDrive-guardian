require("dotenv").config();
const express = require("express");
const connectDB = require("../backend/config/dbConnection");
const router = require("./routes/api");

const app = express(); //initailized express app

connectDB(); //Call made to connect database
const PORT = process.env.PORT | 5002;

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).send("Server started!!! Happy coding");
});

app.listen(PORT, () => {
  console.log(`Lisening to PORT: ${PORT}`);
});
