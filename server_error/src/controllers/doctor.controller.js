import db from "../models";


export const getList = async (req, res) => {
    try {
        const response = await db.Booking.findAll({

        })

        return res.status(200).json({
            response
        })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "server is crack" + error
        })
    }
    
}