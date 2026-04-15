export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-8xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-1 items-center relative text-center lg:text-left">
          <div>
            <div>
              <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold mb-4 sm:mg-6 animate-in slide-in-from-bottom duration-700 leading-tight sm:mt-4 font-martel">
                <span className="block mb-1 sm:mb-2 text-[#212529] tracking-wider">
                  Welcome To
                </span>
                <span className="block mb-1 sm:mb-2 text-[#212529] tracking-wider">
                  Vicmore Home Health
                </span>
                <span className="block mb-1 sm:mb-2 text-[#212529] tracking-wider">
                  Care Solutions
                </span>
              </h1>

              <p className=" text-md sm:text-base lg:text-lg text-[#495057] max-w-2xl mx-auto lg-mx-o mb 6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-loose tracking-wide font-roboto">
                At Vicmore, we provide professional, personalized care that
                helps maintain independence, safety, and dignity right at home
                to clients across Dallas, Tarrant, Ellis, and Navarro Counties.
                Our dedicated team is here to listen, guide, and create a care
                plan that truly fits your life. Ready to take the next step?
              </p>
              <div className=" flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300 mt-8">
                <button
                  onClick={() => (window.location.href = "tel:214-247-7288")}
                  className="w-full sm-w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2B70BA] text-[#F8F9FA] rounded-4xl text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2 font-roboto"
                >
                  <span>Speak with a Care Expert Today </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end">
            <div className="">
              <div className="">
                {/* Desktop Hero Image */}
                <img
                  className="hidden lg:block w-96 h-96 sm:w-[48rem] sm:h-[48rem]"
                  src="/hero-image.png"
                  alt="Aid helping patient"
                />

                {/* Mobile Hero Image */}
                <img
                  className="block lg:hidden w-96 h-96 "
                  src="/hero-image-mobile.png"
                  alt="Aid helping patient"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
