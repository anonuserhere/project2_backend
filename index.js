// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const cors = require("cors");
// const mongodb = require("mongodb");
// const ObjectId = require("mongodb").ObjectId;
// const MongoClient = mongodb.MongoClient;

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// // passing db
// app.use((req, res, next) => {
//   req.db = db;
//   next();
// });

// const { router: EntryRouter } = require("./routes/entry");
// app.use("/welcome", EntryRouter);
// // require("./routes");
// // require("./models");

// let db;

// // main connection function
// async function connect() {
//   const mongo_url = process.env.MONGODB_URI;
//   try {
//     let client = await MongoClient.connect(mongo_url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = client.db("project2");
//     console.log("database connected");
//   } catch (e) {
//     console.log("Error connecting:", e);
//   }
// }

// async function main() {
//   await connect();
// }
// main();

// // port config
// let port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// // handle "uh-oh" events
// process.on(["SIGINT", "SIGQUIT", "SIGKILL", "SIGTERM"], async () => {
//   console.log("Closing server...");
//   try {
//     // db.shutdownServer();
//     await db.client.close();
//     process.exit(0);
//   } catch (e) {
//     console.error("Error shutting down server:", e);
//     process.exit(1);
//   }
// });

require("dotenv").config();
require("./routes");
require("./model");
// require("./firebase");
