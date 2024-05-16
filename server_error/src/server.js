// const express = require("express");
import express from "express";
require('dotenv').config();
const dbConnect = require("./config/dbConnect");

// import dbConnect from "./config/dbConnect";
const cors = require("cors");
// import dbConnect from "./routers";
const initRouters = require("./routers/index");


const app = express();
dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],

}));

initRouters(app);

const PORT = process.env.PORT || 4567;


app.listen(PORT, () => console.log("server start on port : " + PORT));
