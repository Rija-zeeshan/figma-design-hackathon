import Link from 'next/link';
import Image from 'next/image';


const Shop = () => {
  return (
    <div>

<section
  className="relative h-[60vh] bg-cover bg-center bg-shop-bg">
  <div className="absolute inset-0 bg-black opacity-50"> <Image src={'/images/shop.png'} alt={'shop'} layout='fill' objectFit='cover'/></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
  
    <div className="mb-4">
      <Image
        src="/images/shopicon.png" 
        alt="Shop Icon"
        width={100}   
        height={100}  
        className="object-cover rounded-full"
      />
    </div>
    <h1 className="text-5xl font-bold">Shop</h1>
    <p className="text-xl mt-4">
      <Link href="/">Home</Link> &gt; Shop
    </p>
  </div>
</section>


 
<section className="bg-white text-black py-10">
  <div className="container mx-auto px-4 text-center">

   
    <div className="grid grid-cols-4 gap-4">
      
     
      <div className="text-center">
        <Image
          src="/images/sofa3.png"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Trenton modular sofa_3</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/4.png"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Granite dining table with dining chair</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/5.png"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/6.png"
          alt="Product 1"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Plain console with teak mirror</h3>
        <p className="text-lg font-bold">Rs. 25,000.00</p>
      </div>

      {/* Column 2 */}
      <div className="text-center">
        <Image
          src="/images/table.png"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Grain Coffee Table</h3>
        <p className="text-lg font-bold">Rs. 15,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table2.png"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Kant Coffee table</h3>
        <p className="text-lg font-bold">Rs. 225,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table4.png"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Round coffee table_color 2</h3>
        <p className="text-lg font-bold">Rs. 251,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table5.png"
          alt="Product 2"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Reclaimed teak coffee table</h3>
        <p className="text-lg font-bold">Rs. 25,200.00</p>
      </div>

      {/* Column 3 */}
      <div className="text-center">
        <Image
          src="/images/table6.png"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Plain console</h3>
        <p className="text-lg font-bold">Rs. 258,200.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table7.png"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Reclaimed teak side board</h3>
        <p className="text-lg font-bold">Rs. 20,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table8.png"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">SJP_0825</h3>
        <p className="text-lg font-bold">Rs. 200,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table9.png"
          alt="Product 3"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Bella Chair and table</h3>
        <p className="text-lg font-bold">Rs. 100,000.00</p>
      </div>

      {/* Column 4 */}
      <div className="text-center">
        <Image
          src="/images/table1.png"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Granite square side table</h3>
        <p className="text-lg font-bold">Rs. 58,800.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/7.png"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Asgaard Sofa</h3>
        <p className="text-lg font-bold">Rs. 250,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table10.png"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Maya sofa three seater</h3>
        <p className="text-lg font-bold">Rs. 115,000.00</p>
      </div>
      <div className="text-center">
        <Image
          src="/images/table11.png"
          alt="Product 4"
          width={150}
          height={150}
          className="object-contain mx-auto"
        />
        <h3 className="text-sm font-semibold mt-2">Outdoor sofa set</h3>
        <p className="text-lg font-bold">Rs. 244,000.00</p>
      </div>

    
    </div>
  </div>
</section>



      {/* Pagination Section */}
      <section className="py-10 text-center">
        <div className="flex justify-center gap-4">
          <Link href="/shop?page=1">
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              1
            </div>
          </Link>
          <Link href="/shop?page=2">
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              2
            </div>
          </Link>
          <Link href="/shop?page=3">
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              3
            </div>
          </Link>
          <Link href="/shop?page=next">
            <div className="w-10 h-10 flex items-center justify-center border-2 rounded-md hover:bg-black hover:text-white">
              Next
            </div>
          </Link>
        </div>
      </section>

 {/* 3RD Section: CONCEPT Posts */}
<section className="bg-gray-100 text-black py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* First Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">Free Delivery</h2>
        <p className="text-lg text-gray-700">For all orders over $50, consectetur adipim scing elit.</p>
      </div>

      {/* Second Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">90 Days Return</h2>
        <p className="text-lg text-gray-700">If the product has an issue, consectetur adipim scing elit.</p>
      </div>

      {/* Third Column */}
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">Secure Payments</h2>
        <p className="text-lg text-gray-700">100% secure payments, consectetur adipim scing elit.</p>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default Shop;