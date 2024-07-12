import { IProducts } from "../interfaces";
import Product from "../model/Schema/proudctSchema";

export const displayProductController = async (): Promise<IProducts[] | boolean> => {
    try {
       
        const product = await Product.find()

        return product ? product : false


    } catch (error) {
        console.error('Error:', error);
        throw new Error('An error occurred while displaying the products');
    }
};

