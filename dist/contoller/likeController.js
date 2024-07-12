"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeController = void 0;
const proudctSchema_1 = __importDefault(require("../model/Schema/proudctSchema"));
const likeController = async (id) => {
    try {
        if (!id) {
            return Promise.resolve(false);
        }
        const product = await proudctSchema_1.default.findOne({ _id: id });
        if (!product) {
            return Promise.resolve(false);
        }
        const like = await proudctSchema_1.default.updateOne({ _id: id }, { $set: { liked: !product?.liked } });
        return like ? true : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while liking the product ');
    }
};
exports.likeController = likeController;
