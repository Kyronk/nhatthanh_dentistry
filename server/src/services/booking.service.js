const db = require("../models");
const asyncHandler = require("express-async-handler");


// const getListBookingService = () => asyncHandler(async (resolve, reject) => {
//     try {


//         resolve({
//             err: 0,
//             msg: "ok ok"
//         })

//     } catch (error) {
//         reject(error);
//     }
// });

const getBookingList = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Booking.findAll();


        resolve({
            err: 0,
            msg: "ok ok",
            response
        })

    } catch (error) {
        reject(error);
    }
})



module.exports = {
    getBookingList
}

