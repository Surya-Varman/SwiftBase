import mongoose from "mongoose";
const Schema = mongoose.Schema;
const sellerProductSchema = new Schema({
    sellerId: { type: String, required: true },
    productId: { type: String, required: true }
});
export default mongoose.models.SellerProduct || mongoose.model('SellerProduct', sellerProductSchema);