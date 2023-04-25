import Orders from "@/models/Orders";
import dbConnect from '@/utils/connectMongo'
export default async function handler(req,res){
    await dbConnect();
    const response = await Orders.find({});
    res.send(response);
}