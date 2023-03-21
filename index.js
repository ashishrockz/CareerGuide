require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const path =require('path');
//const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares

// routes


const contentsRouter = require("./router/contents");
app.use("/contents", contentsRouter);
//app.use("/api/auth", authRoutes);

const port = process.env.PORT || 1000;
app.listen(port, console.log(`Listening on port ${port}...`));
