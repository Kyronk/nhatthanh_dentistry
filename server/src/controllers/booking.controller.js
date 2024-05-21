
const asyncHandler = require("express-async-handler");
const bookingService = require("../services/booking.service");

// create booking
const createBooking = asyncHandler (async (req, res) => {
    
    const { name, phone, date, hour, description } = req.body;
    
    
    try {
        // const response = await bookingService.
        const response = await bookingService.getListBookingService({name, phone, date, hour, description});


        return res.status(200).json(response);
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