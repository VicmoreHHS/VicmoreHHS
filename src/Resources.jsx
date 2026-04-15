import Navbar from "./components/Navbar";
import Resource from "./components/Resource";
import Footer from "./components/Footer";

function Resources() {
  // Fixed: ) changed to ()
  return (
    <div className="min-h-screen bg-[#235A94] text-[#212529] overflow-hidden">
      <Navbar />
      <Resource />
      <Footer />
    </div>
  );
}

export default Resources;
