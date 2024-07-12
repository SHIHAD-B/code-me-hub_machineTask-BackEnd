"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderController = void 0;
const cartSchema_1 = __importDefault(require("../model/Schema/cartSchema"));
const CouponSchema_1 = __importDefault(require("../model/Schema/CouponSchema"));
const orderSchema_1 = __importDefault(require("../model/Schema/orderSchema"));
const proudctSchema_1 = __importDefault(require("../model/Schema/proudctSchema"));
const addOrderController = async (data) => {
    try {
        const cartItems = await cartSchema_1.default.find();
        if (!cartItems.length) {
            return Promise.resolve(false);
        }
        let total = 0;
        for (const cartItem of cartItems) {
            const product = await proudctSchema_1.default.findById(cartItem.productId);
            if (!product) {
                return Promise.resolve(false);
            }
            total += product.price * cartItem.quantity;
        }
        let discount = 0;
        if (data !== "nill") {
            const coupon = await CouponSchema_1.default.findOne({ code: data });
            if (coupon) {
                discount = total * (coupon.discount / 100);
                total -= discount;
            }
            else {
                return Promise.resolve(false);
            }
        }
        const orderData = {
            totalAmount: total,
            discountAmount: discount,
            items: cartItems,
        };
        console.log(orderData);
        const order = await orderSchema_1.default.create(orderData);
        if (order) {
            await cartSchema_1.default.deleteMany({});
            return order;
        }
        return false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the order');
    }
};
exports.addOrderController = addOrderController;
