import './App.css';
import About from './components/About';
import ContactDetails from './components/ContactDetails';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import GramPanchayatPrototype from './components/GramPanchayatPrototype ';
import Hero from './components/Hero';
import Members from './components/Members';
import Navbar from './components/Navbar';
import News from './components/News';
import QuickEnquiryForm from './components/QuickEnquiryForm';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <SocialSidebar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4">
        <About />

        {/* Two-column region: left main content + right contact box (like reference) */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-8">
            <Gallery />
            <News />
            <Members />
            <QuickEnquiryForm />
          </div>

          <div className="md:col-span-1 sticky top-24">
            <ContactDetails />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
