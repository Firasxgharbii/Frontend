'use client';

import Image from 'next/image';

export default function PopularDishes() {
  const dishes = [
    { id: 1, name: "Doner mixte", img: "/images/Capture d’écran, le 2025-03-18 à 22.36.17.png", time: "10 Mins", rating: 5 },
    { id: 2, name: "4 Cotelettes d'agneau ", img: "/images/Capture d’écran, le 2025-03-18 à 22.37.04.png", time: "10 Mins", rating: 5. },
    { id: 3, name: "PIDE", img: "/images/Capture d’écran, le 2025-03-18 à 22.35.31.png", time: "10 Mins", rating: 4 },
    { id: 4, name: "wrap", img: "/images/Capture d’écran, le 2025-03-18 à 22.32.59.png", time: "10 Mins", rating: 4 },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-10">Popular Dishes</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {dishes.map(dish => (
          <div key={dish.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src={dish.img}
                alt={dish.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <div className="flex justify-between text-gray-500 text-sm mb-2">
                <span>⏱ {dish.time}</span>
                <span>{'⭐'.repeat(dish.rating)}</span>
              </div>
              <button className="text-[#720e43] font-bold hover:underline">ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
