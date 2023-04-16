import {useUser} from '@auth0/nextjs-auth0/client'
import mongoose from "mongoose";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";
export default async function Handler(req,res) {
    await dbConnect();
    const [user, error, isLoading] = useUser();
    const person = await User.findOne({userid:user.sub});
    person.sellerProducts.push(req.body.productId);
    person.save();
}