import axios from "axios"
import dbConnect from '../../../utils/connectMongo';
import Cart from '../../../models/Cart';
export default async function handler(req, res) {
    await dbConnect();
    // const {userid,productId,quantity} = req.body;
    const object = new Cart({
        userid: req.body.userid,
        productId: req.body.productId,
        quantity: req.body.quantity,
    })
    object.save();
    res.send("saved successfully");
}