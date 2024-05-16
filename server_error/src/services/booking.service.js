import db from "../models";
import asyncHandler from "express-async-handler"



export const createBookingService = {

}

export const getBookingListService = new Promise ( async (resolve, reject) => {
    try {
        
        const response = await db.Booking.findAll({

        });
        resolve({
            response
        })
    } catch (error) {
        reject(error);
    }
})