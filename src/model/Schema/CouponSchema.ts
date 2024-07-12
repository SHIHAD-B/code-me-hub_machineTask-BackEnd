import mongoose from "mongoose";
const Schema = mongoose.Schema;

const couponSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default  Coupon;
