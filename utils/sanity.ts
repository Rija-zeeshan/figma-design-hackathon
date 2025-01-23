import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanity = sanityClient({
  projectId: '4kp6op1m', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}

export default sanity;
