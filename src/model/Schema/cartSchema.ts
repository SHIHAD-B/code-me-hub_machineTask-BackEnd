import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

const Cart = mongoose.model('Cart', cartSchema);

export default  Cart;
