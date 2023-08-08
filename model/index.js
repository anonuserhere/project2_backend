const mongoose = require("mongoose");
const Entry = require("./entry_model");

const mongo_url = process.env.MONGODB_URI;
const db = mongoose.connection;

(async () => {
  await mongoose.connect(mongo_url);
})().catch((e) => console.log(e));

db.on("error", (e) => console.log(e));
db.on("connected", () => console.log("Connected"));
db.on("disconnected", () => console.log("Disconnected"));

module.exports = {
  Entry,
};
