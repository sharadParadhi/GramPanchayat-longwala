import longwalabanner from '../assets/longwala-banner.jpg';

function Hero() {
  return (
    <section className="mt-16">
      <img
        src={longwalabanner}
        alt="Hero Banner"
        className="w-full object-cover max-h-[400px]"
      />
    </section>
  );
}

export default Hero;
