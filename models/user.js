const  mongoose =  require ( 'mongoose' ) ;
const  Schema = mongoose.Schema;
const UserSchema = new Schema({
    userid: {type:String,required:true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    isbuyer: { type: Boolean, required: true },
    isSeller: { type: Boolean, required: true },
    Addresses: [{type: String}],
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);