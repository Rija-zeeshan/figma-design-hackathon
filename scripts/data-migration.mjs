import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}. Error: ${error.message}`);
    return null;
  }
}

async function importData() {
  try {
    console.log('Starting data migration...');

    // Fetch products from the API
    const response = await axios.get('https://template-0-beta.vercel.app/api/product');
    const products = response.data;

    console.log(`Fetched ${products.length} products from API.`);

    for (const product of products) {
      console.log(`Processing product: ${product.id}`);

      let imageRef = null;

      // Upload image if available
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath);
        if (imageRef) {
          console.log(`Image uploaded for product ${product.id}: ${imageRef}`);
        } else {
          console.warn(`Image upload failed for product ${product.id}`);
        }
      } else {
        console.warn(`No imagePath provided for product ${product.id}`);
      }

      // Create Sanity product
      const sanityProduct = {
        _type: 'product',
        id: product.id,
        name: product.name,
        category: product.category,
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        price: parseFloat(product.price),
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
      };

      await client.create(sanityProduct);
      console.log(`Product created in Sanity: ${product.id}`);
    }

    console.log('Data migration completed successfully!');
  } catch (error) {
    console.error('Error during data migration:', error.message);
  }
}

importData();
