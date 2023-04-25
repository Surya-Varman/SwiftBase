import mongoose from 'mongoose'
const SellerSchema = new mongoose.Schema({
    userid: {type:String,required:true},
    productId: {type:String,required:true},
    quantity: {type:Number,required:true},
    accountNumber: {type:String,required:true},
})
export default mongoose.models.Seller || mongoose.model('Seller', SellerSchema)