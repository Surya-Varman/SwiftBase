import Product from '../../../models/product'
export default async function handler(req,res){
    const data = await Product.findOne({productId: req.body.productId});
    res.send(data);
}