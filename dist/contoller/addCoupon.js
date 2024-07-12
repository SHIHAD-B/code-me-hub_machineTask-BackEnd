"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCouponController = void 0;
const CouponSchema_1 = __importDefault(require("../model/Schema/CouponSchema"));
const addCouponController = async (data) => {
    try {
        if (!data) {
            return Promise.resolve(false);
        }
        const coupon = await CouponSchema_1.default.create(data);
        return coupon ? coupon : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the coupon');
    }
};
exports.addCouponController = addCouponController;
