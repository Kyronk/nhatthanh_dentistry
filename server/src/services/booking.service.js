const db = require("../models");



const getListBookingService = ({name, phone, date, hour, description}) => new Promise(async (resolve, reject) => {
    try {
        // const response = await db.Booking.findAll();
    

        resolve({
            err: 0,
            msg: "ok ok",
            dataREQ: {
                name,
                phone,
                date,
                hour,
                description
            }
            // response
        })

    } catch (error) {
        reject(error);
    }
})


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
    getBookingList,
    getListBookingService
}

