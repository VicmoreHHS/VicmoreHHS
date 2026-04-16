import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#F8F9FA]/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-4 sm:pt-6">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo - Use Link for internal navigation */}
          <Link
            to="/"
            className="flex items-center space-x-1 group cursor-pointer"
          >
            <img
              src="/VicmoreHHS/vicmore-logo.svg"
              alt="Vicmore Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              to="/"
              className="text-[#212529] hover:text-[#9DC0EB] text-sm lg:text-base font-roboto"
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="text-[#212529] hover:text-[#9DC0EB] text-sm lg:text-base font-roboto"
            >
              About Us
            </Link>
            <Link
              to="/resources"
              className="text-[#212529] hover:text-[#9DC0EB] text-sm lg:text-base font-roboto"
            >
              Resources
            </Link>
            <a
              href="tel:214-247-7288"
              className="text-[#235A94] hover:text-[#9DC0EB] text-sm lg:text-base font-roboto"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#212529] hover:text-[#9DC0EB] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#9DC0EB]"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuIsOpen && (
          <div className="md:hidden py-4 space-y-3 backdrop-blur-lg border-t animate-in slide-in-from-top duration-300 border-[#212529] w-full">
            <Link
              to="/"
              className="block text-[#212529] hover:text-[#9DC0EB] text-sm py-2 font-roboto"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className="block text-[#212529] hover:text-[#9DC0EB] text-sm py-2 font-roboto"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/Resources"
              className="block text-[#212529] hover:text-[#9DC0EB] text-sm py-2 font-roboto"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Resources
            </Link>
            <a
              href="tel:214-247-7288"
              className="block text-[#2B70BA] hover:text-[#9DC0EB] text-sm py-2 font-roboto"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
