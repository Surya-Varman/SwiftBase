import axios from "axios"
import dbConnect from '../../../utils/connectMongo';
import Cart from '../../../models/Cart';
async function doesUserExists(userid,productId){
    const user = await Cart.exists({userid: userid, productId: productId});
    return user;
}
async function updateCart(userid,productId){
    const current_value = await Cart.findOne({userid: userid, productId: productId});
    const result = await Cart.updateOne({userid: userid, productId: productId},{quantity: current_value.quantity+1});
    return result;
}
export default async function handler(req, res) {
    await dbConnect();
    const exists = await doesUserExists(req.body.userid,req.body.productId);
    if(exists){
        await updateCart(req.body.userid,req.body.productId);
        res.send("Product updated successfully")
    }
    else{
        const object = new Cart({
            userid: req.body.userid,
            productId: req.body.productId,
            quantity: req.body.quantity,
        })
        await object.save();
        res.send("saved successfully");
    }

}