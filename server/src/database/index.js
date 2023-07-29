const mongoose = require("mongoose");
const config = require("../config");

// declaring the connection function
const conn = async () => {
  await mongoose.connect(config.mongoURI);
};

conn();
//exporting database
module.exports = mongoose.connection;
