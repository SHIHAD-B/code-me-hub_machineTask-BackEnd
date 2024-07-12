import { ICoupon, } from "../interfaces";
import Coupon from "../model/Schema/CouponSchema";


export const addCouponController = async (data: Partial<ICoupon>): Promise<ICoupon | boolean> => {
    try {
        if (!data) {

            return Promise.resolve(false);
        }
        const coupon = await Coupon.create(data)

        return coupon ? coupon : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the coupon');
    }
};

