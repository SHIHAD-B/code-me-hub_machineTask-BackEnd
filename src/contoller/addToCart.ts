import { ICart } from "../interfaces";
import Cart from "../model/Schema/cartSchema";


export const addToCartController = async (data: Partial<ICart>): Promise<any | boolean> => {
    try {
        if (!data) {

            return Promise.resolve(false);
        }
        const product = await Cart.create(data)

        return product ? product : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the product to cart');
    }
};

