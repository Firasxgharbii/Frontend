'use client';

import Image from 'next/image';

export default function OurChefs() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 py-16 px-4">

      {/* Left Box - Text */}
      <div className="bg-white p-10 m-4 shadow-md max-w-md text-center">
        <h2 className="text-3xl uppercase tracking-widest mb-4">Our Chefs</h2>
        <div className="border-t border-gray-400 w-24 mx-auto mb-4"></div>
        <p className="text-gray-700 leading-relaxed">
          Fish sole dredged in flour, pan fried in butter and served with the resulting mushroom sauce, parsley and lemon.
        </p>
      </div>

      {/* Right Box - Image */}
      <div className="m-4 max-w-md">
        <Image 
          src="/images/chef-de-cuisine.jpg" 
          alt="Chef preparing sushi" 
          width={500} 
          height={350} 
          className="object-cover shadow-md rounded"
        />
      </div>

    </div>
  );
}
