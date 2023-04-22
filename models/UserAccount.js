import mongoose from "mongoose";
const UserAccountSchema = new mongoose.Schema({ 
    userid: {type: ObjectId, ref: 'User', required: true},
    productId: {type: ObjectId, ref: 'Product', required: true},
})
export default mongoose.models.UserAccount || mongoose.model('UserAccount', UserAccountSchema)