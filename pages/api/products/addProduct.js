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
        quantity: req.body.Quantity,
        reviews: 0,
        itemsSold: 0,
        itemsReturned: 0,
    });
    // res.setHeader('Content-Type', 'text/plain');
    let error = false;
    // temp.save();
    temp.save().then(() => { error = false; }).catch((err) => { error = true; });
    // res.send("Error",500);
    if (error) {
        res.send("Error", 500);
    }
    res.send("Success", 200);
    
}