import Cart from "../model/Schema/cartSchema";

export const deleteFromCartController = async (id: string): Promise<boolean> => {
    try {
        if (!id) {
            return false;
        }
        console.log(id)

        const result = await Cart.deleteOne({ productId: id });

        return result.deletedCount > 0; 
    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while deleting from the cart');
    }
};
