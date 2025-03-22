'use client';

import Image from 'next/image';
import { FaStar, FaRegClock } from 'react-icons/fa';

const dishes = [
  {
    name: 'soupe aux lentilles',
    price: '$8',
    time: '10 mins',
    stars: 4,
    img: '/images/soupe lentille.jpg',
    Description: ' soupe traditionnelle turque, servie avec du pain traditionnel et du citron, traditional turkish lentil soup served with bread and slice of lemon.'
  },
  {
    name: 'tavaPoulet',
    price: '$19.99',
    time: '10 mins',
    stars: 4,
    img: '/images/tava poulet.webp',
  },
  {
    name: 'iskender',
    price: '$22.99',
    time: '10 mins',
    stars: 5,
    img: '/images/iskender.jpg',
  },
  {
    name: 'Menemen',
    price: '$11.99',
    time: '10 mins',
    stars: 4,
    img: '/images/menemen.jpg',
  },
  {
    name: 'Doner mixte',
    price: '$19.99',
    time: '12 mins',
    stars: 5,
    img: '/images/Capture d’écran, le 2025-03-18 à 22.36.17.png',
  },
  {
    name: 'Meatballs',
    price: '$10',
    time: '10 mins',
    stars: 4,
    img: '/images/meatballs.jpg',
  },
  {
    name: 'Vegan Bowl',
    price: '$11',
    time: '10 mins',
    stars: 4,
    img: '/images/vegan-bowl.jpg',
  },
  {
    name: 'Cheeseburger',
    price: '$13',
    time: '10 mins',
    stars: 4,
    img: '/images/burger.jpg',
  },
];

export default function Menu() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {dishes.map((dish, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-56 w-full">
              <Image src={dish.img} alt={dish.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="font-semibold text-lg mb-2">{dish.name}</h3>
              <div className="flex items-center text-gray-500 mb-2">
                <FaRegClock className="mr-2" />
                <span>{dish.time}</span>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {Array(dish.stars).fill(0).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{dish.price}</span>
                <button className="bg-[#720e43] text-white px-4 py-2 rounded-md hover:opacity-90">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
