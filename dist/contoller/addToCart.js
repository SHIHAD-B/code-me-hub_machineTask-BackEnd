"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartController = void 0;
const cartSchema_1 = __importDefault(require("../model/Schema/cartSchema"));
const addToCartController = async (data) => {
    try {
        if (!data) {
            return Promise.resolve(false);
        }
        const product = await cartSchema_1.default.create(data);
        return product ? product : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the product to cart');
    }
};
exports.addToCartController = addToCartController;
