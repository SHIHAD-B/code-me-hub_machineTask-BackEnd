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
const express_1 = __importDefault(require("express"));
const contoller_1 = require("../contoller");
const router = express_1.default.Router();
//add products 
router.post('/addproduct', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const productResult = yield (0, contoller_1.addProductController)(data);
    if (productResult) {
        res.status(200).json({
            success: true,
            data: productResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to add product"
        });
    }
}));
//display products 
router.get('/displayproduct', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productResult = yield (0, contoller_1.displayProductController)();
    if (productResult) {
        res.status(200).json({
            success: true,
            data: productResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to display product"
        });
    }
}));
//add to cart
router.post('/addtocart', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const cartResult = yield (0, contoller_1.addToCartController)(data);
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to add product to cart"
        });
    }
}));
//display  cart
router.get('/displaycart', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cartResult = yield (0, contoller_1.displayCartController)();
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to display  cart"
        });
    }
}));
//add order
router.post('/addorder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const cartResult = yield (0, contoller_1.addOrderController)(data);
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to add order t"
        });
    }
}));
//display orders
router.get('/displayorder', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cartResult = yield (0, contoller_1.displayOrderController)();
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to display  order"
        });
    }
}));
//add coupon
router.post('/addcoupon', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const cartResult = yield (0, contoller_1.addCouponController)(data);
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to add coupon t"
        });
    }
}));
//check coupon
router.get('/displaycoupon/:code', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const code = req.params.code;
    const cartResult = yield (0, contoller_1.checkCouponController)(code);
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to check  coupon"
        });
    }
}));
exports.default = router;
