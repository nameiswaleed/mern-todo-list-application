const express = require("express");
const config = require("./config");
const db = require("./database");
const cors = require("cors");
const { todoRouter } = require("./routes");
// server initialization
const app = express();

//middlewares
// cors and json
app.use(cors(), express.json());
//routes
app.get("/", (req, res) => {
  res.status(200).send("Server is running fine");
});
app.use("/api/todos", todoRouter);

//database validation and verification
db.on("open", () => {
  console.log("[DATABASE CONNECTED SUCCESSFULLY]");
  //   listenting app
  app.listen(config.port, () => {
    console.log(`🚀 Server running on port ${config.port}`);
  });
});
//error if db does not work server not start
db.on("error", () => {
  console.error("[DATABASE THROWING ERROR]");
});
