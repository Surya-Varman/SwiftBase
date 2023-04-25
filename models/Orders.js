import mongoose from 'mongoose'
const OrderSchema = new mongoose.Schema({
    userid: {type:String,required:true},
    productId: {type:String,required:true},
    quantity: {type:Number,required:true},
    status: {type:String,required:true},
    accountNumber: {type:String,required:true},
    date: {type: Date, default: Date.now},
})
export default mongoose.models.Order || mongoose.model('Order', OrderSchema)