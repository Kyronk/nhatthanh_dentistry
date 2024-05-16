import express from "express";

// import * as booking from "../controllers/booking.controller";
import * as controllers from "../controllers"

const route = express.Router();

// route.post("/create", controllers.getList);

route.get("/list-booking", controllers.getList);

module.exports = route;