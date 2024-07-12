"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFromCartController = void 0;
const cartSchema_1 = __importDefault(require("../model/Schema/cartSchema"));
const deleteFromCartController = async (id) => {
    try {
        if (!id) {
            return false;
        }
        console.log(id);
        const result = await cartSchema_1.default.deleteOne({ productId: id });
        return result.deletedCount > 0;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while deleting from the cart');
    }
};
exports.deleteFromCartController = deleteFromCartController;
