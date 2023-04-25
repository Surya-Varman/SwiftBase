import mongoose from "mongoose";
const Account = new mongoose.Schema({
    accountNumber: {type: String, required: true},
    accountName: {type: String, required: true},
    cardNumber: {type: String, required: true},
    balance: {type: Number, default: 1000},
})
export default mongoose.models.Account || mongoose.model('Account', Account)