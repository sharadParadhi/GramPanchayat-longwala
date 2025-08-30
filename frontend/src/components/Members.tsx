import React from 'react';
import manavtar from '../assets/manavtar.png';

const members = [
  {
    id: 1,
    name: 'Shri Sunil Kumar',
    designation: 'Sarpanch',
    phone: '9833680001',
    thumb: manavtar,
  },
  {
    id: 2,
    name: 'Meera Devi',
    designation: 'Up-Sarpanch',
    phone: '+91 91234 56789',
    thumb: manavtar,
  },
  {
    id: 3,
    name: 'Anita Kumari',
    designation: 'Panch',
    phone: '+91 90123 45678',
    thumb: manavtar,
  },
];

export default function Members() {
  return (
    <section id="members" className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Panchayat Members</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.id}
              className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
            >
              <img
                src={m.thumb}
                alt={m.name}
                className="w-16 h-16 rounded-full object-cover border"
              />
              <div>
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-gray-500">{m.designation}</div>
                <div className="text-sm text-blue-600 mt-1">
                  <a href={`tel:${m.phone}`}>{m.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
