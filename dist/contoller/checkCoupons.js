"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCouponController = void 0;
const CouponSchema_1 = __importDefault(require("../model/Schema/CouponSchema"));
const checkCouponController = async (code) => {
    try {
        if (!code) {
            return Promise.resolve(false);
        }
        const product = await CouponSchema_1.default.findOne({ code: code });
        return product ? product : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while check the coupon');
    }
};
exports.checkCouponController = checkCouponController;
