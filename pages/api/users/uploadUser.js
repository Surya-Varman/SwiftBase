import user from '../../../models/user';
import dbConnect from '../../../utils/connectMongo';
export default async function handler(req, res) {
    await dbConnect();
    console.log("user db connection successfull");
    console.log(req.body);
    let userid = req.body.sub;
    let userExists = await user.exists({ userid: userid });
    if(userExists===true){
        res.send("User already exists",200);
    }
    const temp = new user({
        userid: userid,
        name: req.body.name,
        email: req.body.email,
        isbuyer: req.body.isBuyer,
        isSeller: req.body.isSeller,
        cartItems: {},
        sellerProducts: [],
    });
    temp.save();
    console.log("new user saved successfully");
    res.send("Saved Successfully");
}