"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayOrderController = void 0;
const orderSchema_1 = __importDefault(require("../model/Schema/orderSchema"));
const displayOrderController = async (id) => {
    try {
        const order = await orderSchema_1.default.findOne({ _id: id }).populate("items.productId");
        return order ? order : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the orders');
    }
};
exports.displayOrderController = displayOrderController;
