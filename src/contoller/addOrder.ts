
import Cart from "../model/Schema/cartSchema";
import Coupon from "../model/Schema/CouponSchema";
import Order from "../model/Schema/orderSchema";
import Product from "../model/Schema/proudctSchema";


export const addOrderController = async (data: string): Promise<any | boolean> => {
    try {
        const cartItems = await Cart.find();
        if (!cartItems.length) {
            return Promise.resolve(false);
        }

        let total = 0;
        for (const cartItem of cartItems) {
            const product = await Product.findById(cartItem.productId);
            if (!product) {
                return Promise.resolve(false); 
            }
            total += product.price * cartItem.quantity;
        }

        let discount = 0;
        if (data !== "nill") {
            const coupon = await Coupon.findOne({ code: data });
            if (coupon) {
                discount = total * (coupon.discount / 100);
                total -= discount;
            } else {
                return Promise.resolve(false); 
            }
        }

        const orderData = {
            totalAmount: total,
            discountAmount: discount,
            items: cartItems,
        };
console.log(orderData)

        const order = await Order.create(orderData);
        if (order) {
            await Cart.deleteMany({});
            return order;
        }

        return false;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the order');
    }
};
