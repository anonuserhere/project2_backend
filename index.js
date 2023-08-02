const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const MongoClient = mongodb.MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

process.on(["SIGINT", "SIGQUIT", "SIGKILL", "SIGTERM"], async () => {
  console.log("Closing server...");
  try {
    db.shutdownServer();
    await db.close();
    process.exit(0);
  } catch (e) {
    console.error("Error shutting down server:", e);
    process.exit(1);
  }
});