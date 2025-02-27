"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayCartController = void 0;
const cartSchema_1 = __importDefault(require("../model/Schema/cartSchema"));
const displayCartController = async () => {
    try {
        const order = await cartSchema_1.default.find().populate("productId");
        return order ? order : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the cart');
    }
};
exports.displayCartController = displayCartController;
