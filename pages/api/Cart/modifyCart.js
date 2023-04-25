import Cart from '@/models/Cart';
export default async function handler(req,res){
    if(req.body.quantity<=0){
        await Cart.deleteOne({userid: req.body.userid,productId: req.body.productId});
        res.send('Item deleted from cart');
    }
    else{
        const result = await Cart.updateOne({userid: req.body.userid,productId: req.body.productId},{quantity: req.body.quantity});
        res.send('Quantity updated successfully');
    }
}