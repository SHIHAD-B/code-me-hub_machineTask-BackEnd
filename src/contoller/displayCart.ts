
import Cart from "../model/Schema/cartSchema";



export const displayCartController = async (): Promise<any[] | boolean> => {
    try {

        const order = await Cart.find().populate("productId")

        return order ? order : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the cart');
    }
};

