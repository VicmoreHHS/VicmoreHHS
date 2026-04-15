export default function About() {
  return (
    <div className="bg-[#F8F9FA] w-full ">
      {/* First Section - Left Side Content */}
      <div className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left mt-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-[#235A94] font-martel">
              Our Mission & Vision
            </h2>
            <p className="text-[#495057] leading-loose tracking-wide mb-6 font-roboto">
              Our mission is to participate as an active part of the community
              by providing and continuously improving the home health care needs
              of our patients through value-driven, high-quality, compassionate
              care. Vicmore Home Health strives to be the premier provider of
              exceptional and high-quality home health and community care
              services.
            </p>
          </div>

          {/* Right Side - Optional Image/Visual */}
          <div className="flex-1"></div>
        </div>
      </div>

      {/* Second Section - Right Side Content */}
      <div className="bg-[#235A94] py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Right Side - Text Content (appears on right due to flex-row-reverse) */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-white font-martel">
              Our Credentials
            </h2>
            <p className="text-white/90 text-lg leading-loose tracking-wide font-roboto">
              Vicmore Home Health Care Solutions is a trusted, credentialed
              provider proudly contracted with the Texas Health and Human
              Services Commission and TMHP. We prioritize safety and trust by
              running comprehensive background checks through the Texas
              Department of Public Safety for every member of our team. Our
              dedicated staff includes 12 Certified Nursing Assistants ready to
              serve families across the region. Since 2016, we have had the
              privilege of providing compassionate, professional care to
              over 200 patients and counting building a legacy of reliability,
              quality, and community trust with every client we serve.
            </p>
          </div>

          {/* Left Side - Optional Image/Visual */}
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
}
