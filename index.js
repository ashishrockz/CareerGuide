require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
//const authRoutes = require("./routes/auth");
const path =require('path');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,"./client/build")));
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./client/bulid/index.html"));;
});

// routes

const contentsRouter = require("./router/contents");
app.use("/contents", contentsRouter);
//app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
