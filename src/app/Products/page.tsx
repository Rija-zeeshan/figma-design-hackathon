'use client';
import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'; // Add this import

interface Product {
    category: string;
    id: string;
    price: number;
    description: string;
    stockLevel: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    name: string;
    image: string;
    tags?: string[];
}

// Setup the image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

const sanity = sanityClient({
    projectId: "4kp6op1m",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
});

async function fetchProducts(): Promise<Product[]> {
    const query = `*[_type == "product"]{
      category,
      "id": _id,
      price,
      description,
      stockLevel,
      imagePath,
      discountPercentage,
      isFeaturedProduct,
      name,
      "image": image.asset->url  // Fetching the image URL directly
    }`;
    const products = await client.fetch(query);
    console.log(products);
    return products;
}

const Shop = () => {
    const [cart, setCart] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        fetchData();
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart: Product[]) => [...prevCart, product]);
        alert(`${product.name} has been added to your cart!`);
    };

    const truncateDescription = (description: string) => {
        return description.length > 100 ? description.substring(0, 100) + "..." : description;
    };

    return (
        <div className="p-4">
            <h2>Products from Api's Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow-300">
                        <Image
                            src={urlFor(product.image).width(300).url()} // Using image URL generator
                            alt={product.name}
                            width={300}
                            height={300}
                            className="w-full h-48 object-cover rounded-md"
                        />

                        <div className="mt-4">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p className="text-slate-800">{truncateDescription(product.description)}</p>
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <p className="text-slate-600">Price: ${product.price}</p>
                                    {product.discountPercentage > 0 && (
                                        <p className="text-red-600">Discount: {product.discountPercentage}% OFF</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-2 flex flex-wrap gap-2">
                                {(product.tags || []).map((tag: string, index: number) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                onClick={() => addToCart(product)}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
                {cart.length > 0 ? (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                                <div>
                                    <p className="text-slate-900 font-medium">{item.name}</p>
                                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                                </div>
                                <Image
                                    src={urlFor(item.image).width(50).url()} // Use image URL generator
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-black text-center">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Shop;
