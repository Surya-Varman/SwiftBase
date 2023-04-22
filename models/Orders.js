import mongoose from 'mongoose'
const OrderSchema = new mongoose.Schema({
    userid: {type:String,required:true},
    productId: {type:String,required:true},
    quantity: {type:Number,required:true},
    status: {type:String,required:true},
    AccountName: {type:String,required:true},
    Date: {type: Date, default: Date.now},
})