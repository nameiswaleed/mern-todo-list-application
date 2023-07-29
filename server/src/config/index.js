const dotenv = require("dotenv");
const path = require("path");
const { env } = require("process");
dotenv.config({ path: path.join(__dirname, "../../.env") });

module.exports = {
  port: env.PORT,
  mongoURI: env.MONGODB_URI,
};
