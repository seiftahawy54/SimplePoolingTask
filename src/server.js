const express = require("express");
const cors = require("cors");
const userRouter = require("./resources/user/user.router");
const trackRouter = require("./resources/track/track.router");
const app = express();

app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/track", trackRouter);

app.listen(3000);
