import mongoose from "mongoose";
const CartSchema = new mongoose.Schema({
    userid: {type:String,required:true},
    productId: {type:String,required:true},
    quantity: {type:Number,required:true},
});
module.exports = mongoose.models.Cart || mongoose.model('Cart', CartSchema);