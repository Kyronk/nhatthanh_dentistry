import bookingRoute from "./booking.route";



const initRouters = (app) => {
    app.use("/api/v1/booking", bookingRoute);


    return app.use("/", (req, res) => {
        res.send("server on...");
    });
};

export default initRouters;
