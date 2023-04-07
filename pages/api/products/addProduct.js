import product from '../../../models/product';
import dbConnect from '../../../utils/connectMongo';


export default async function handler(req, res) {
    await  dbConnect();
    console.log("Connections successfull");
    console.log(req.body);
    const temp = new product({
        productId: req.body.unique_id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        reviews: 0,
        itemsSold: 0,
        itemsReturned: 0,
    });
    res.setHeader('Content-Type', 'text/plain');
    temp.save().then(() => { res.send("Saved success fully") });
    res.send("Failed to save")
}