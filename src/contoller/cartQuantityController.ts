
import Cart from "../model/Schema/cartSchema";



export const cartQuantityController = async (value: number, id: string): Promise<boolean> => {
    try {

        if (!value) {
            return false
        }

        const quantity = await Cart.updateOne({ productId: id }, { $set: { quantity: Number(value) } })
        if (quantity.modifiedCount > 0) {
            return true
        }
        return false

    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the cart');
    }
};

