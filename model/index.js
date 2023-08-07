const mongoose = require("mongoose");
const Entry = require("./entry_model");

const mongo_url = process.env.MONGODB_URI;
const db = mongoose.connection;

(async () => {
  await mongoose.connect(mongo_url);
})().catch((e) => console.log(e));

db.on("error", (e) => console.log(e));
db.on("connected", () => console.log("mongoose connected"));
db.on("disconnected", () => console.log("mongoose disconnected"));

module.exports = {
  Entry,
};
