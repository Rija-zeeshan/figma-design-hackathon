import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* First Section: Hero Section */}
      <section className="bg-amber-100 flex items-center justify-center h-[100vh]">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center w-1/2 pl-10">
          <h1 className="text-4xl font-bold text-black mb-4">
            Rocket Single <br />
            Seater
          </h1>

          <a
            href="#"
            className="text-black underline text-sm hover:text-gray-700 transition"
          >
            Shop Now
          </a>
        </div>

        {/* Right Section */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <Image
            src="/images/sofa.png"
            alt="Rocket Single Seater"
            width={500} 
            height={500} 
            className="object-contain"
          />
        </div>
      </section>

      {/* Second Section: Top Pick */}
      <section className="bg-gray-100 text-black py-10">
        <div className="container mx-auto px-4">
          
          <div className="flex justify-between">
            <div className="w-1/2 pr-4">
            <Image
                src="/images/table1.png"
                alt="Side Table"
                width={400}
                height={400}
                className="object-contain"
              />
              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a href="#" className="underline text-sm mb-4">
                View More
              </a>
              
            </div>
            <div className="w-1/2 pl-4">
            <Image
                src="/images/sofa2.png"
                alt="Another Side Table"
                width={400}
                height={400}
                className="object-contain"
              />

              <h3 className="text-3xl font-semibold mb-2">Side Table</h3>
              <a href="#" className="underline text-sm mb-4">
                View More
              </a>
             
            </div>
          </div>
        </div>
      </section>

      {/* Third Section: Product Grid */}
      <section className="bg-white text-black py-10">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 ">Top Picks For You</h2>
        <p className="text-gray-500 text-lg mb-8">find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
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
                alt="Product 2"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Granite dinning table with dining chair</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/5.png"
                alt="Product 3"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2">Outdoor bar table and stool </h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/6.png"
                alt="Product 4"
                width={150}
                height={150}
                className="object-contain mx-auto"
              />
              <h3 className="text-sm font-semibold mt-2 ">Plain console with teak mirror</h3>
              <p className="text-lg font-bold">Rs. 25,000.00</p>
            </div>
            <div ><a href="#" className=" text-center underline text-sm mb-4">
              View More
            </a></div>
          </div>
        </div>
      </section>

      {/* Fourth Section: Image and New Arrivals */}
      <section className="bg-amber-100 py-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-1/2 pr-4">
            <Image
              src="/images/7.png" 
              alt="Asgaard Sofa"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
          <div className="w-1/2 pl-4 text-center">
          <h3 className="text-xl font-semibold mb-6 ">New Arrivals</h3>
            <h2 className="text-5xl font-bold text-black mb-6">Asgaard Sofa</h2>
           
            <div className="container mx-auto flex justify-end py-10 text-center">
  <a 
    href="/shop/asgaardsofa"
    className=" text-center border-2 border-black text-black py-2 px-6 text-lg font-semibold rounded-md hover:bg-black hover:text-white transition"
    style={{ width: "200px", textAlign: "center" }}
  >
    Order Now
  </a>
</div>

          </div>
        </div>
      </section>
      {/* Fifth Section: Blog Posts */}
<section className="bg-white text-black py-10">
  <div>
    <h2 className="text-5xl mb-6 text-center">Our Blog</h2>
    <p className="text-center text-lg mb-8">Find a bright idea to suit your taste with our great selection.</p>
  </div>

  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <Image
          src="/images/8.png"
          alt="Blog Post 1"
          width={300}
          height={300}
          className="object-contain mx-auto"
        />
        <p className="text-lg">Going all-in with millennial design</p>
        <a href="#" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex justify-center gap-4">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="text-center">
        <Image
          src="/images/9.png"
          alt="Blog Post 2"
          width={300}
          height={300}
          className="object-contain mx-auto"
        />
        <p className="text-lg">Going all-in with millennial design</p>
        <a href="#" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex justify-center gap-4">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="text-center">
        <Image
          src="/images/10.png"
          alt="Blog Post 3"
          width={300}
          height={300}
          className="object-contain mx-auto"
        />
        <p className="text-lg">Going all-in with millennial design</p>
        <a href="#" className="underline font-bold text-xl mb-4">
          Read More
        </a>
        <div className="flex justify-center gap-4">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>

    {/* View All Posts Button */}
    <div className="text-center mt-8">
      <a href="/blog" className="underline text-sm">
        View All Posts
      </a>
    </div>
  </div>
</section>


          

    </>
  );
};

export default Hero;