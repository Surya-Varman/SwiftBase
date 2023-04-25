import Cart from '../../../models/Cart'
import Product from '../../../models/product'
import dbConnect from '../../../utils/connectMongo';
export default async function handler(req,res){
    await dbConnect();
    const data = await Cart.find({userid: req.body.userid});
    const productArray = [];
    for(let i=0;i<data.length;i++){
        const product = await Product.findOne({productId: data[i].productId});
        product.quantity = data[i].quantity;
        productArray.push(product);
    }
    res.send(productArray);
}