import express, { Response, Request } from 'express';
import { addCouponController, addOrderController, addProductController, addToCartController, cartQuantityController, checkCouponController, deleteFromCartController, displayCartController, displayOrderController, displayProductController, likeController } from '../contoller';


const router = express.Router();

//add products 
router.post('/addproduct', async (req: Request, res: Response) => {
    const data = req.body
    const productResult = await addProductController(data)
    if (productResult) {
        res.status(200).json({
            success: true,
            data: productResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to add product"
        })
    }
});

//display products 
router.get('/displayproduct', async (req: Request, res: Response) => {
    const productResult = await displayProductController()
    if (productResult) {
        res.status(200).json({
            success: true,
            data: productResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to display product"
        })
    }
});

//add to cart
router.post('/addtocart', async (req: Request, res: Response) => {
    const data = req.body
    const cartResult = await addToCartController(data)
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to add product to cart"
        })
    }
});

//display  cart
router.get('/displaycart', async (req: Request, res: Response) => {

    const cartResult = await displayCartController()
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to display  cart"
        })
    }
});

//add order

router.post('/addorder', async (req: Request, res: Response) => {
    const data = req.body.code
    const cartResult = await addOrderController(data)
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to add order "
        })
    }
});

//display orders
router.get('/displayorder/:id', async (req: Request, res: Response) => {
     const id=req.params.id
    const cartResult = await displayOrderController(id)
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to display  order"
        })
    }
});

//add coupon
router.post('/addcoupon', async (req: Request, res: Response) => {
    const data = req.body
    const cartResult = await addCouponController(data)
    if (cartResult) {
        res.status(200).json({
            success: true,
            data: cartResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to add coupon t"
        })
    }
});

//check coupon
router.get('/checkcoupon/:code', async (req: Request, res: Response) => {
    const code = req.params.code
    const couponResult = await checkCouponController(code)
    if (couponResult) {
        res.status(200).json({
            success: true,
            data: couponResult
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to check  coupon"
        })
    }
});

//like proudct
router.patch('/likeproduct', async (req: Request, res: Response) => {
    const id = req.body.id
    const like = await likeController(id)
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to like product"
        })
    }
});

//cart quantity modifier
router.patch('/updatecartquantity', async (req: Request, res: Response) => {
    const id = req.body.id
    const value = req.body.value
    const like = await cartQuantityController(value, id)
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to update cart quantity"
        })
    }
});

//delete from cart
router.delete('/deletefromcart/:id', async (req: Request, res: Response) => {
    const id = req.params.id
    const like = await deleteFromCartController(id)
    if (like) {
        res.status(200).json({
            success: true,
            data: like
        })
    } else {
        res.status(400).json({
            success: false,
            error: "failed to delete from cart"
        })
    }
});

export default router;
