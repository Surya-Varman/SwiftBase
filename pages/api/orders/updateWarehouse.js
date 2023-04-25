import Orders from '@/models/Orders'
import dbConnect from '@/utils/connectMongo'
export default async function handler(req, res) {
    await dbConnect();
    console.log(req.body)
    const result = await Orders.updateOne({userid: req.body.userid, productId: req.body.productId, warehouse: req.body.oldWarehouse},{warehouse: req.body.warehouse});
    res.send('success');
}