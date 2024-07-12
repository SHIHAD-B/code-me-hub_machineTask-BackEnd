"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartQuantityController = void 0;
const cartSchema_1 = __importDefault(require("../model/Schema/cartSchema"));
const cartQuantityController = async (value, id) => {
    try {
        if (!value) {
            return false;
        }
        const quantity = await cartSchema_1.default.updateOne({ productId: id }, { $set: { quantity: Number(value) } });
        if (quantity.modifiedCount > 0) {
            return true;
        }
        return false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the cart');
    }
};
exports.cartQuantityController = cartQuantityController;
