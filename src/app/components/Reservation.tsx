'use client';

import Image from 'next/image';

export default function Reservation() {
  const months = [
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
    { name: "January", days: 31, year: 2026 }
  ];

  const dates: string[] = [];

  months.forEach((month) => {
    const year = month.year || 2025;
    for (let day = 1; day <= month.days; day++) {
      dates.push(`${month.name} ${day}, ${year}`);
    }
  });

  const times = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
  ];

  const pax = [
    "1 Person", "2 Persons", "3 Persons", "4 Persons", "5 Persons", "6+ Persons"
  ];

  return (
    <div className="relative flex justify-center items-center py-20 bg-gray-100">

      {/* Reservation Box */}
      <div className="relative bg-white shadow-lg border border-gray-300 max-w-4xl w-full p-12 text-center z-10">

        {/* Decorative Borders */}
        <div className="absolute inset-0 border border-gray-300 pointer-events-none"></div>

        {/* Decorative Tea - Left */}
        <div className="absolute -left-16 -top-16 z-20">
          <Image src="/images/tea.png" alt="Tea" width={150} height={150} />
        </div>

        {/* Decorative Baklava - Right */}
        <div className="absolute -right-16 -bottom-16 z-20">
          <Image src="/images/baklava.png" alt="Baklava" width={150} height={150} />
        </div>

        <h2 className="text-3xl tracking-widest mb-8">RESERVATION</h2>

        {/* Form */}
        <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
          {/* Date */}
          <select className="border-b border-gray-500 px-4 py-2 focus:outline-none">
            <option>DATE</option>
            {dates.map((date, index) => (
              <option key={index}>{date}</option>
            ))}
          </select>

          {/* Time */}
          <select className="border-b border-gray-500 px-4 py-2 focus:outline-none">
            <option>TIME</option>
            {times.map((time, index) => (
              <option key={index}>{time}</option>
            ))}
          </select>

          {/* Pax */}
          <select className="border-b border-gray-500 px-4 py-2 focus:outline-none">
            <option>PAX</option>
            {pax.map((p, index) => (
              <option key={index}>{p}</option>
            ))}
          </select>
        </form>

        {/* Button */}
        <button className="bg-black text-white px-8 py-3 uppercase tracking-wide hover:bg-gray-800 transition">
          Check Availability
        </button>
      </div>
    </div>
  );
}
