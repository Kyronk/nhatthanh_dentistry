// create booking for customer
// const asyncHandler = require("express-async-handler");
import asyncHandler from "express-async-handler";
// import * as services from "../services/index";

// const



export const createBookingCustomer = (req, res) => {
    const { id, nameCustomer, phone} = req.body;


    try {
        return res.status(200).json({
            test: "ok",
            router: "get ok booking route"
        })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at post controller" + error
        })
    }
}


export const getListBookingController = asyncHandler( async (req, res) => {
    try {
        return res.status(201).json({
            test: "ok ok",
            router: "test this router is done"
        })
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at booking controller" + error
        })
    }
})