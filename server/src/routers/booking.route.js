import express from "express";

import * as booking from "../controllers/booking.controller";

const route = express.Router();

route.post("/create", booking.createBookingCustomer);

route.get("/list-booking", booking.createBookingCustomer);

export default route;