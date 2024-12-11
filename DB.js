const mongoose = require("mongoose");

const connectDB = async (url) => {
  await mongoose.connect(url);
  console.log("connected to database");
};

module.exports = connectDB;
