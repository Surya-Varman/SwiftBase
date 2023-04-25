import mongoose from "mongoose";
import dbConnect from '../../../utils/connectMongo';
import User from "../../../models/user";
import SellerDetails from '@/models/SellerDetails';
export default async function Handler(req,res) {
    await dbConnect();
    const object = new SellerDetails({
        userid: req.body.userid,
        productId: req.body.productId,
        quantity: req.body.quantity,
        accountNumber: req.body.accountNumber,
    });
    object.save();
    res.send("saved successfully");
    // const person = await User.findOne({userid:user.sub});
    // person.sellerProducts.push(req.body.productId);
    // person.save();
}