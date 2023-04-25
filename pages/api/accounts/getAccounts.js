import Accounts from "@/models/Accounts";
import UserAccount from "@/models/UserAccount";
import dbConnect from '@/utils/connectMongo'
export default async function handler(req, res) {
    await dbConnect();
    const response = await UserAccount.find({userid: req.body.userid});
    const accountArray = []
    for(let i=0;i<response.length;i++){
        const accountDetails = await Accounts.findOne({accountNumber: response[i].accountNumber});
        accountArray.push(accountDetails);
    }
    res.send(accountArray);
}