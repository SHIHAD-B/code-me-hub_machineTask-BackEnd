import { ICart } from "../interfaces";
import Cart from "../model/Schema/cartSchema";
import Product from "../model/Schema/proudctSchema";


export const likeController = async (id: string): Promise<any | boolean> => {
    try {
        if (!id) {

            return Promise.resolve(false);
        }
        const product = await Product.findOne({ _id: id })
        if (!product) {
            return Promise.resolve(false)
        }
        const like = await Product.updateOne({ _id: id }, { $set: { liked: !product?.liked } })

        return like ? true : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while liking the product ');
    }
};

