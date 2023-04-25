import Account from '@/models/Accounts'
import SellerDetails from '@/models/SellerDetails'
export default async function handler(req,res){
    try{    
    const checkBalance = await Account.findOne({accountNumber: req.body.accountNumber});
    if(checkBalance.balance < req.body.totalCost + req.body.swiftBuyCut){
        res.status(400).send("Insufficient Balance");
    }
    else{
    for(let i=0;i<req.body.data.length;i++){
        const sellerUpdate = await SellerDetails.findOne({productId: req.body.data[i].productId});
        await SellerDetails.updateOne({productId: req.body.data[i].productId},{quantity: sellerUpdate.quantity-req.body.data[i].quantity});
        console.log("came here 1",sellerUpdate);
        const sellerAccount = await  Account.findOne({accountNumber: sellerUpdate.accountNumber});
        await Account.updateOne({accountNumber:sellerUpdate.accountNumber},{balance: sellerAccount.balance+req.body.data[i].price*req.body.data[i].quantity});
    }
    console.log("Came here 2")
    await Account.updateOne({accountNumber: req.body.accountNumber},{balance: checkBalance.balance-(req.body.totalCost + req.body.swiftBuyCut)});
    const currSwiftBuyAccount = await Account.findOne({accountNumber:'123456789'});
    console.log("came here 3",currSwiftBuyAccount)
    await Account.updateOne({accountNumber:'123456789'},{balance: currSwiftBuyAccount.balance+req.body.swiftBuyCut});
    res.send('success');
    }}
    catch(err){
        console.log(err);
    }

}