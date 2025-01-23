// Define the interface for the product
interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    discountedPercent: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    price: number;
    image: string;
}

// Import the client
import { client } from "./client";

// Define the function with the correct return type
export const getAllData = async (): Promise<Product[]> => {
    try {
        const getAllDataQuery = `*[_type == "product"]{
             id,
             name,
             category,
             description,
             discountedPercent,
             isFeaturedProduct,
             stockLevel,
             price,
             image
        }`;
        const data = await client.fetch(getAllDataQuery);
        return data;
    } catch (error) {
        console.log("Error Fetching products:", error);
        return [];
    }
}
