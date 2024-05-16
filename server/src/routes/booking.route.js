
const route = require("express").Router()

const controller = require("../controllers/booking.controller");


route.get("/get-list", controller.getBookingList);

module.exports = route;

