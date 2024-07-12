
import Order from "../model/Schema/orderSchema";


export const displayOrderController = async (id:string): Promise<any | boolean> => {
    try {

        const order = await Order.findOne({_id:id}).populate("items.productId")

        return order ? order : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the orders');
    }
};

