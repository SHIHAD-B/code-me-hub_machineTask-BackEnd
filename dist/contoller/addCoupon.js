"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCouponController = void 0;
const CouponSchema_1 = __importDefault(require("../model/Schema/CouponSchema"));
const addCouponController = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!data) {
            return Promise.resolve(false);
        }
        const coupon = yield CouponSchema_1.default.create(data);
        return coupon ? coupon : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the coupon');
    }
});
exports.addCouponController = addCouponController;
