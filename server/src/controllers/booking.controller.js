// create booking for customer
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