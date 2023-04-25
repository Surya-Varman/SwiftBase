import Order from '@/models/Orders'
export default async function handler(req,res){
    for(let i=0;i<req.body.cart.length;i++){
        const order = new Order({
            userid: req.body.userid,
            productId: req.body.cart[i].productId,
            quantity: req.body.cart[i].quantity,
            status: "Verification Pending",
            accountNumber: req.body.accountNumber,
            warehouse: req.body.warehouse
        }) 
        await order.save();
    }
    res.send("saved successfully");
}