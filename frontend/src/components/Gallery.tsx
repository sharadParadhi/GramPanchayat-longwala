import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';

function Gallery() {
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

  return (
    <section id="gallery" className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Photo Gallery</h2>

        {/* Scrolling Container */}
        <div className="overflow-hidden relative w-full">
          <div className="flex gap-4 animate-scroll">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[30%] lg:w-[22%] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
