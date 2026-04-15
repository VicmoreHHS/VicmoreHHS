import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#212529] overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
