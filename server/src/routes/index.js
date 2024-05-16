const bookingRoute = require("./booking.route");



const initRoutes = (app) => {

    app.use("/api/v1/booking", bookingRoute);
    // app.use("/api/insert", insert);
    // app.use("/api/properties", properties);
    // app.use("/api/auth", auth);
    // app.use("/api/user", user);



    // app.use("/", badRequestException);
    // app.use( badRequestException);
    // app.use(errHandler);
}

module.exports = initRoutes;