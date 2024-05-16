
const asyncHandler = require("express-async-handler");

const bookingService = require("../services/booking.service");

const createBooking = asyncHandler (async (req, res) => {
    
    try {
        
        

        return res.status(200).json({
            code: 0,
            msg: "ok ok"
        });
    } catch (error) {
        console.log(error)
    }
})

const getBookingList = asyncHandler (async (req, res) => {

    try {
        
        const response = await bookingService.getBookingList();

        return res.status(200).json(response);

        // return res.status(200).json({
        //     code: 0,
        //     msg: "test route get list"
        // })
    } catch (error) {
        console.log(error);
    }
})

module.exports = {
    createBooking,
    getBookingList,
}