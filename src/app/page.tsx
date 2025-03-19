'use client';

import Link from 'next/link';
import Reservation from './components/Reservation';


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-opacity-40 z-10"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full flex justify-center space-x-10 p-6 text-white z-20 uppercase tracking-widest text-sm">
          <Link href="#" className="hover:underline">Home</Link>
          <Link href="#" className="hover:underline">About</Link>
          <Link href="#" className="hover:underline">Contact</Link>
          <Link href="#" className="hover:underline">Chefs</Link>
        </nav>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 text-white">
          <h1 className="text-7xl font-bold italic mb-4">Sam's</h1>
          <p className="text-xl mb-8">Food. First & Foremost.</p>
          <Link
            href="#"
            className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Reservation Section */}
      <Reservation />
     
      
    </div>
    
  );
  
}
