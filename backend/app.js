const express = require("express");
const cors = require("cors");

const computerRoutes = require("./routes/computerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Computer Room API is running...");
});

// Computer API
app.use("/api/computers", computerRoutes);

module.exports = app;