import { ICoupon, } from "../interfaces";
import Coupon from "../model/Schema/CouponSchema";

export const checkCouponController = async (code: string): Promise<ICoupon | boolean> => {
    try {
        if (!code) {

            return Promise.resolve(false);
        }
        const product = await Coupon.findOne({code: code})

        return product ? product : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while check the coupon');
    }
};

