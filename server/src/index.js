const express = require("express");
const config = require("./config");
const db = require("./database");
const cors = require("cors");
const { todoRouter } = require("./routes");
// server initialization
const app = express();

//middlewares
app.use(cors(), express.json());
//routes
app.get("/", (req, res) => {
  res.status(200).send("OK");
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
db.on("error", () => {
  console.error("[DATABASE THROWING ERROR]");
});
