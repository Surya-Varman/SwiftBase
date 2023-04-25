import dbConnect from '../../../utils/connectMongo'
import Account from '../../../models/Accounts'
import userAccount from '../../../models/UserAccount'
export default async function handler(req,res){
    await dbConnect();
    const account = new Account({
        accountNumber: req.body.accountNumber,
        accountName: req.body.accountName,
        cardNumber: req.body.cardNumber,
        balance: 1000
    })
    try{
        await account.save();
    }
    catch{
        res.send('Error');
    }
    
    const newUserAccount = new userAccount({
        userid: req.body.userid,
        accountNumber: req.body.accountNumber
    })
    await newUserAccount.save();
    res.send('Saved Successfully');
}