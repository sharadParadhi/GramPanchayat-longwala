// import React from 'react';

// export default function GramPanchayatPrototype() {
//   const photos = [
//     'https://images.unsplash.com/photo-1501973801540-537f08ccae7a?auto=format&fit=crop&w=1200&q=60',
//     'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&w=1200&q=60',
//     'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=60',
//     'https://images.unsplash.com/photo-1526312426976-455d6d1d2c15?auto=format&fit=crop&w=1200&q=60',
//     'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=60',
//   ];

//   const members = [
//     {
//       name: 'Sarpanch: Ramesh Choudhary',
//       role: 'Sarpanch',
//       phone: '+91 98765 43210',
//     },
//     {
//       name: 'Up-Sarpanch: Meera Devi',
//       role: 'Up-Sarpanch',
//       phone: '+91 91234 56789',
//     },
//     { name: 'Panch: Sunil Kumar', role: 'Panch', phone: '+91 99887 66554' },
//     { name: 'Panch: Anita Kumari', role: 'Panch', phone: '+91 90123 45678' },
//   ];

//   const news = [
//     {
//       title: 'Water Harvesting Workshop — Community Hall',
//       date: 'Aug 10, 2025',
//       excerpt:
//         'A hands-on workshop on rainwater harvesting was held at the community hall. 45 villagers attended; demo tanks and low-cost techniques were showcased.',
//     },
//     {
//       title: 'Village Health Camp — Free Checkups',
//       date: 'Jul 28, 2025',
//       excerpt:
//         'A health camp in collaboration with the district hospital provided free checkups, medicines, and maternal health counselling to residents.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       <header className="bg-white shadow">
//         <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">
//               LP
//             </div>
//             <div>
//               <h1 className="text-2xl font-semibold">
//                 Longwala Gram Panchayat — Demo
//               </h1>
//               <p className="text-sm text-gray-600">
//                 Pilibanga, Hanumangarh (Demo site)
//               </p>
//             </div>
//           </div>
//           <nav className="flex items-center gap-4">
//             <a href="#about" className="text-sm hover:underline">
//               About
//             </a>
//             <a href="#gallery" className="text-sm hover:underline">
//               Gallery
//             </a>
//             <a href="#news" className="text-sm hover:underline">
//               News
//             </a>
//             <a href="#members" className="text-sm hover:underline">
//               Members
//             </a>
//             <a href="#contact" className="text-sm hover:underline">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </header>

//       <main className="max-w-6xl mx-auto px-6 py-10">
//         {/* Hero / About */}
//         <section
//           id="about"
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12"
//         >
//           <div className="md:col-span-2">
//             <h2 className="text-3xl font-bold mb-3">
//               About Longwala Gram Panchayat
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               Longwala Gram Panchayat is a community-focused local government
//               body serving the village of Longwala. We work on improving basic
//               infrastructure, supporting agriculture initiatives, sanitation,
//               and community welfare programs. This demo site mirrors the layout
//               of a modern panchayat landing page and shows how content may be
//               structured for residents and visitors.
//             </p>

//             <div className="mt-6 grid sm:grid-cols-2 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="text-lg font-semibold">Population</h3>
//                 <p className="text-sm text-gray-600">~ 3,450 (approx.)</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="text-lg font-semibold">Established</h3>
//                 <p className="text-sm text-gray-600">1958</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <img
//               src={photos[0]}
//               alt="village"
//               className="w-full h-56 object-cover"
//             />
//           </div>
//         </section>

//         {/* Gallery */}
//         <section id="gallery" className="mb-12">
//           <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {photos.slice(0, 5).map((src, i) => (
//               <figure
//                 key={i}
//                 className="bg-white rounded-lg shadow overflow-hidden"
//               >
//                 <img
//                   src={src}
//                   alt={`photo-${i}`}
//                   className="w-full h-48 object-cover"
//                 />
//                 <figcaption className="p-3 text-sm text-gray-600">
//                   Community event, 2025
//                 </figcaption>
//               </figure>
//             ))}
//           </div>
//         </section>

//         {/* News */}
//         <section id="news" className="mb-12">
//           <h3 className="text-2xl font-semibold mb-4">News & Updates</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {news.map((n, idx) => (
//               <article key={idx} className="bg-white rounded-lg shadow p-5">
//                 <h4 className="font-semibold text-lg">{n.title}</h4>
//                 <p className="text-xs text-gray-500 mt-1">{n.date}</p>
//                 <p className="mt-3 text-gray-700">{n.excerpt}</p>
//                 <div className="mt-4">
//                   <a href="#" className="text-sm font-medium underline">
//                     Read more
//                   </a>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* Members & Contact */}
//         <section id="members" className="grid md:grid-cols-3 gap-6 mb-12">
//           <div className="md:col-span-2">
//             <h3 className="text-2xl font-semibold mb-4">Panchayat Members</h3>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {members.map((m, i) => (
//                 <div
//                   key={i}
//                   className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
//                 >
//                   <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
//                     {m.name
//                       .split(' ')
//                       .slice(0, 2)
//                       .map((n) => n[0])
//                       .join('')}
//                   </div>
//                   <div>
//                     <div className="font-medium">{m.name}</div>
//                     <div className="text-sm text-gray-500">{m.role}</div>
//                     <div className="text-sm text-gray-500">{m.phone}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <aside className="bg-white p-5 rounded-lg shadow">
//             <h4 className="text-lg font-semibold mb-3">Contact Details</h4>
//             <p className="text-sm text-gray-600">
//               Office: Longwala Panchayat Bhawan
//             </p>
//             <p className="text-sm text-gray-600">
//               Address: Village Longwala, Pilibanga, Hanumangarh, Rajasthan
//             </p>
//             <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
//             <p className="text-sm text-gray-600">
//               Email: info.longwalapanchayat@example.com
//             </p>

//             <div className="mt-4">
//               <h5 className="text-sm font-semibold mb-2">Follow us</h5>
//               <div className="flex gap-3">
//                 <a
//                   href="#"
//                   aria-label="facebook"
//                   className="inline-flex items-center gap-2 text-sm"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   aria-label="twitter"
//                   className="inline-flex items-center gap-2 text-sm"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.79a4.28 4.28 0 0 0 1.33 5.71 4.22 4.22 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98A8.59 8.59 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.19l-.01-.56A8.72 8.72 0 0 0 22.46 6z" />
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   aria-label="instagram"
//                   className="inline-flex items-center gap-2 text-sm"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </aside>
//         </section>

//         {/* Footer */}
//         <footer
//           id="contact"
//           className="bg-white rounded-lg shadow p-6 text-sm text-gray-600"
//         >
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//             <div>
//               <div className="font-semibold">Longwala Gram Panchayat</div>
//               <div>Village Longwala, Pilibanga, Hanumangarh, Rajasthan</div>
//               <div className="mt-2">
//                 Phone: +91 98765 43210 | Email:
//                 info.longwalapanchayat@example.com
//               </div>
//             </div>
//             <div className="text-right">
//               <div>Designed as a demo prototype • 2025</div>
//               <div className="mt-2">
//                 Socials: Facebook / Twitter / Instagram (demo)
//               </div>
//             </div>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }

import React from 'react';

export default function GramPanchayatPrototype() {
  const photos = [
    '/assets/panchayat-bhawan.jpg', // Replace with actual image URLs from PDF
    '/assets/community-event.jpg',
    '/assets/farmers-meeting.jpg',
    '/assets/solar-project.jpg',
    '/assets/water-conservation.jpg',
  ];

  const members = [
    {
      name: 'Shri Sunil Kumar',
      role: 'Sarpanch (Best Sarpanch Rajasthan)',
      phone: '+91 98765 43210',
    },
    { name: 'Meera Devi', role: 'Up-Sarpanch', phone: '+91 91234 56789' },
    { name: 'Anita Kumari', role: 'Panch', phone: '+91 90123 45678' },
    { name: 'Sunil Kumar', role: 'Panch', phone: '+91 99887 66554' },
  ];

  const news = [
    {
      title: 'Water Conservation Project',
      date: 'Jan 12, 2025',
      excerpt:
        'The Panchayat launched a water conservation project focusing on rainwater harvesting and check dam construction for sustainable farming.',
    },
    {
      title: 'Solar Street Light Installation',
      date: 'Feb 20, 2025',
      excerpt:
        '50+ solar-powered street lights were installed to make the village eco-friendly and reduce electricity consumption.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-green-700 shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-green-700 font-bold text-xl">
              GP
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">
                Gram Panchayat Longwala
              </h1>
              <p className="text-sm text-green-200">
                Pilibanga, Hanumangarh, Rajasthan
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-white">
            <a href="#about" className="text-sm hover:underline">
              About
            </a>
            <a href="#gallery" className="text-sm hover:underline">
              Gallery
            </a>
            <a href="#news" className="text-sm hover:underline">
              News
            </a>
            <a href="#members" className="text-sm hover:underline">
              Members
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* About */}
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-3">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Gram Panchayat Longwala, situated in Pilibanga, Hanumangarh, is a
              model Panchayat known for innovative governance and community
              development. Under the leadership of Shri Sunil Kumar (awarded
              Best Sarpanch in Rajasthan), the Panchayat focuses on water
              conservation, renewable energy, education, and women's
              empowerment.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Population</h3>
                <p className="text-sm text-gray-600">~ 3,500 (approx.)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Awards</h3>
                <p className="text-sm text-gray-600">
                  Best Sarpanch Award - Rajasthan Government
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={photos[0]}
              alt="Gram Panchayat Bhawan"
              className="w-full h-56 object-cover"
            />
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <figure
                key={i}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full h-48 object-cover"
                />
                <figcaption className="p-3 text-sm text-gray-600">
                  Event {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* News */}
        <section id="news" className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">News & Updates</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((n, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow p-5">
                <h4 className="font-semibold text-lg">{n.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{n.date}</p>
                <p className="mt-3 text-gray-700">{n.excerpt}</p>
                <div className="mt-4">
                  <a href="#" className="text-sm font-medium underline">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Members & Contact */}
        <section
          id="members"
          className="grid md:grid-cols-3 gap-6 mb-12 items-start"
        >
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Panchayat Members</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {members.map((m, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                    {m.name.split(' ')[0][0]}
                    {m.name.split(' ')[1]?.[0]}
                  </div>
                  <div>
                    <div className="font-medium">{m.name}</div>
                    <div className="text-sm text-gray-500">{m.role}</div>
                    <div className="text-sm text-gray-500">{m.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-white p-5 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-3">Contact Details</h4>
            <p className="text-sm text-gray-600">
              Office: Gram Panchayat Bhawan
            </p>
            <p className="text-sm text-gray-600">
              Address: Village Longwala, Pilibanga, Hanumangarh, Rajasthan
            </p>
            <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
            <p className="text-sm text-gray-600">
              Email: longwalapanchayat@example.com
            </p>
          </aside>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="bg-green-700 rounded-lg shadow p-6 text-sm text-white"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="font-semibold">Gram Panchayat Longwala</div>
              <div>Village Longwala, Pilibanga, Hanumangarh, Rajasthan</div>
              <div className="mt-2">
                Phone: +91 98765 43210 | Email: longwalapanchayat@example.com
              </div>
            </div>
            <div className="text-right">
              <div>Designed as a demo prototype • 2025</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
