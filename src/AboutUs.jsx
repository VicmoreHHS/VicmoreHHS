import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#235A94] text-[#212529] overflow-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default AboutUs;
