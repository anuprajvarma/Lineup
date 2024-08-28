const express = require("express");
const cors = require("cors");
const router = require("./routes/ToDoRoutes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
