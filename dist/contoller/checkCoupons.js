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
exports.checkCouponController = void 0;
const CouponSchema_1 = __importDefault(require("../model/Schema/CouponSchema"));
const checkCouponController = (code) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!code) {
            return Promise.resolve(false);
        }
        const product = yield CouponSchema_1.default.findOne({ code: code });
        return product ? product : false;
    }
    catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while check the coupon');
    }
});
exports.checkCouponController = checkCouponController;
