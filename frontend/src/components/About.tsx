import aboutBanner from '../assets/aboutbanner.jpg';

function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex flex-wrap items-center gap-2 text-center justify-center">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
          Sunil Kumar
        </h2>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-700">
          ( Sarpanch - Gram Panchayat Longwala, Pilibanga, Hanumangarh )
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <img
          src={aboutBanner}
          alt="About Banner"
          className="rounded-lg shadow"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-gray-600">
            Gram Panchayat Longwala is a prominent village council focusing on
            rural development, water conservation, renewable energy, and digital
            initiatives for empowering villagers. Under the leadership of Shri
            Sunil Kumar, the Panchayat has become a model for modern governance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
