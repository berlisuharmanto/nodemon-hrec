require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const apiPort = process.env.PORT || 5000;

const connectDB = require("./lib/db/connect");
const userRecRouter = require("./routes/userRec");
const imageRecRouter = require("./routes/imageRec");
const userAppRec = require("./routes/userAppRec");
const imageAppRec = require("./routes/ImageAppRec");
const notification = require("./routes/notification");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");

app.get("/api/v1", (req, res) => {
  res.send(
    '<h1>HREC API</h1><a href="/api/v1/userrec/users/">User Recruiter List</a><br><a href="/api/v1/imagerec/">Image Rec List</a><br><a href="/api/v1/userapprec/users/">User Application Recruiter List</a><br><a href="/api/v1/imageapprec/">Image Application Rec List</a><br><a href="/api/v1/notification/">Notification List</a>'
  );
});

app.use("/api/v1/userrec", userRecRouter);
app.use("/api/v1/imagerec", imageRecRouter);
app.use("/api/v1/userapprec", userAppRec);
app.use("/api/v1/imageapprec", imageAppRec);
app.use("/api/v1/notification", notification);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(apiPort, console.log(`Server running on port ${apiPort}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
