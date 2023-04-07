import user from '../../../models/user';
import dbConnect from '../../../utils/connectMongo';
export default async function handler(req, res) {
    await dbConnect();
    console.log("user db connection successfull");
    let sub = req.body.sub;
    let userid = sub.split("|")[1];
    const temp = new user({
        userid: userid,
        name: req.body.name,
        email: req.body.email,
        isbuyer: req.body.isBuyer,
        isSeller: req.body.isSeller,
    });
    temp.save();
    res.send("Saved Successfully");
}