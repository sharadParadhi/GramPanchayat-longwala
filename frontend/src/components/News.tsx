import React, { useState } from 'react';

const newsList = [
  {
    id: 1,
    title: 'Water Conservation Project Launched',
    date: '12 Jan 2025',
    excerpt:
      'Gram Panchayat Longwala started a village-wide rainwater harvesting and check-dam initiative to improve irrigation resilience for farmers.',
    fullText:
      'This initiative is aimed at tackling water scarcity issues. Over 10 check dams are being built, and villagers are being trained on sustainable water practices. The goal is to ensure irrigation support for over 200 acres of farmland, benefiting more than 100 farming families. The project is funded by government schemes and local contributions.',
  },
  {
    id: 2,
    title: 'Solar Street Lights Installed',
    date: '20 Feb 2025',
    excerpt:
      '50+ solar-powered street lights installed across the village to increase safety and reduce electricity costs for households.',
    fullText:
      'The Panchayat successfully installed over 50 solar street lights in Longwala village. This project not only reduces electricity costs but also provides better lighting for roads, improving safety for children and women. The solar panels are maintained by local youth who were trained under this program, creating employment opportunities.',
  },
];

export default function News() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="news" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          News & Updates
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2">
          {newsList.map((item) => (
            <article
              key={item.id}
              className="border rounded-lg p-4 sm:p-5 hover:shadow-lg transition-shadow bg-white"
            >
              {/* Title and Date */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.date}
                </span>
              </div>

              {/* Text Content */}
              <p className="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
                {expandedId === item.id ? item.fullText : item.excerpt}
              </p>

              {/* Read More Button */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="text-blue-600 text-sm sm:text-base mt-4 inline-block hover:underline focus:outline-none"
              >
                {expandedId === item.id ? 'Read less ←' : 'Read more →'}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
