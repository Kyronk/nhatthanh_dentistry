const express = require("express");
require('dotenv').config();
const dbConnect = require("./src/config/dbConnect");
const cors = require("cors");
import initRouters from "./src/routers";


const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

initRouters(app);

const PORT = process.env.PORT || 4567;

dbConnect();

app.listen(PORT, () => console.log("server start on port : " + PORT));
