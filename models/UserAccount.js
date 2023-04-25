import mongoose from "mongoose";
const UserAccountSchema = new mongoose.Schema({ 
    userid: {type: String, required: true},
    accountNumber: {type: String, required: true},
})
export default mongoose.models.UserAccount || mongoose.model('UserAccount', UserAccountSchema)