import bookingRoute from "./booking.route";
import doctorRoute from "./doctor.router";


const initRouters = (app) => {
    app.use("/api/v1/booking", bookingRoute);
    app.use("/api/v1/booking", doctorRoute);


    return app.use("/", (req, res) => {
        res.send("server on...");
    });
};

// export default initRouters;

module.exports = initRouters;