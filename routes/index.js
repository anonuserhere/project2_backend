const express = require("express");
const app = express();
const cors = require("cors");

const { router: EntryRouter } = require("./entry");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", EntryRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
