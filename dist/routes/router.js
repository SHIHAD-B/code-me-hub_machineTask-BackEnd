"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contoller_1 = require("../contoller");
const router = express_1.default.Router();
//add products 
router.post('/addproduct', async (req, res) => {
    const data = req.body;
    const productResult = await (0, contoller_1.addProductController)(data);
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
});
//display products 
router.get('/displayproduct', async (req, res) => {
    const productResult = await (0, contoller_1.displayProductController)();
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
});
//add to cart
router.post('/addtocart', async (req, res) => {
    const data = req.body;
    const cartResult = await (0, contoller_1.addToCartController)(data);
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
});
//display  cart
router.get('/displaycart', async (req, res) => {
    const cartResult = await (0, contoller_1.displayCartController)();
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
});
//add order
router.post('/addorder', async (req, res) => {
    const data = req.body.code;
    const cartResult = await (0, contoller_1.addOrderController)(data);
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to add order "
        });
    }
});
//display orders
router.get('/displayorder/:id', async (req, res) => {
    const id = req.params.id;
    const cartResult = await (0, contoller_1.displayOrderController)(id);
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
});
//add coupon
router.post('/addcoupon', async (req, res) => {
    const data = req.body;
    const cartResult = await (0, contoller_1.addCouponController)(data);
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
});
//check coupon
router.get('/checkcoupon/:code', async (req, res) => {
    const code = req.params.code;
    const couponResult = await (0, contoller_1.checkCouponController)(code);
    if (couponResult) {
        res.status(200).json({
            success: true,
            data: couponResult
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to check  coupon"
        });
    }
});
//like proudct
router.patch('/likeproduct', async (req, res) => {
    const id = req.body.id;
    const like = await (0, contoller_1.likeController)(id);
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to like product"
        });
    }
});
//cart quantity modifier
router.patch('/updatecartquantity', async (req, res) => {
    const id = req.body.id;
    const value = req.body.value;
    const like = await (0, contoller_1.cartQuantityController)(value, id);
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to update cart quantity"
        });
    }
});
//delete from cart
router.delete('/deletefromcart/:id', async (req, res) => {
    const id = req.params.id;
    const like = await (0, contoller_1.deleteFromCartController)(id);
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        });
    }
    else {
        res.status(400).json({
            success: false,
            error: "failed to delete from cart"
        });
    }
});
exports.default = router;
