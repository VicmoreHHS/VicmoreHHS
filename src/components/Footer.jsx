const Footer = () => {
  return (
    <footer className="bg-[#142E4B] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-roboto">
              Contact Us
            </h3>
            <p>Phone: (214) 247-7288</p>
            <p>Email: Vicmorehhs@yahoo.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-roboto">Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
          </div>
          <div>
            <div className="flex space-x-4 scale-60">
              <img
                src="/VicmoreHHS/texas-health-and-human-services.png"
                alt="Texas Health and Human Services Logo"
              />
            </div>
          </div>
        </div>
        <div className="text-center pt-8 mt-8 border-t border-white/20">
          <p>
            &copy; {new Date().getFullYear()} Vicmore Home Health Care. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
