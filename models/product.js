const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String},
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    reviews: { type: Number, default: 0 },
    itemsSold: { type: Number, required: true },
    itemsReturned: { type: Number, required: true },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);