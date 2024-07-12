import { IProducts } from "../interfaces";
import Product from "../model/Schema/proudctSchema";

export const addProductController = async (data: Partial<IProducts>): Promise<IProducts | boolean> => {
    try {
        if (!data) {

            return Promise.resolve(false);
        }
        const product = await Product.create(data)

        return product ? product : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while adding the product');
    }
};

