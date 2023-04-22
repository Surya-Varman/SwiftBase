import Product from '../../../models/product';
import dbConnect from '../../../utils/connectMongo';
export default async function handler(req, res){
    await dbConnect();
    const products = await Product.find({});
    const products_json = {};
    products_json["Groceries"] =[];
    products_json["Tech"] =[];
    products_json["Fashion"] =[];
   
    
    for(let i=0;i<products.length;i++){
        if(products[i]["category"] ==="groceries"){
            products_json["Groceries"].push(products[i])
            
        }
        else if(products[i].category === "tech"){
            products_json["Tech"].push(products[i])
            
        }
        else{
            products_json["Fashion"].push(products[i])
            
        }
    }
    res.send(products_json);
}