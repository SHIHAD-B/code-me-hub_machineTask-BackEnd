"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayProductController = void 0;
const proudctSchema_1 = __importDefault(require("../model/Schema/proudctSchema"));
const displayProductController = async () => {
    try {
        const product = await proudctSchema_1.default.find();
        return product ? product : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the products');
    }
};
exports.displayProductController = displayProductController;
