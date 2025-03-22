'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 py-16 px-8 md:px-24">
      
      {/* Image Section */}
      <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <Image 
            src="/images/Capture d’écran 2025-03-20 114842.png" // Remplace par le chemin de ton image
            alt="Delicious Dish"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
        Chez Maison Istanbul, nous vous invitons à découvrir l'âme de la culture culinaire turque.
        Dans notre établissement, chaque plat raconte une histoire, avec une sélection soigneusement élaborée de mets authentiques,
        de desserts délicats et de boissons traditionnelles. Notre mission est de vous offrir une véritable symphonie de saveurs
        qui éveillera vos sens et vous transportera au coeur de la Turquie. Maison Istanbul, c'est plus qu'un restaurant :
        c'est une expérience culinaire unique qui célèbre la richesse et la générosité de notre héritage gourmand.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Découvrez notre selection pour vous de notre menue riche et varié.
        </p>
        <Link href="#">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">OUR MENU</button>
        </Link>
      </div>

    </div>
  );
}
