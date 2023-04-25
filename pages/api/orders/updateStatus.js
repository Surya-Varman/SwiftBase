import Orders from '@/models/Orders'
import dbConnect from '@/utils/connectMongo'
export default async function handler(req, res) {
    await dbConnect();
    const result = await Orders.updateOne({userid: req.body.userid, productId: req.body.productId, warehouse: req.body.warehouse},{status: req.body.status});
    res.send('success');
}