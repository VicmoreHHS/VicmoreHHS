const plans = [
  {
    name: "Texas Star+Plus",
    price: "0",
    description: "Covered by the state of Texas",
    features: [
      "All services available",
      "No out of pocket cost",
      "Personally tailored care plan",
      "*Minimum of 4 hours per call",
      "*Must already be qualified through the state of Texas",
    ],
    mostPopular: true,
  },
  {
    name: "Private Pay",
    price: "20 per hour",
    description: "Covered by recipient",
    features: [
      "All services available",
      "Personally tailored care plan",
      "*Minimum of 4 hours per call",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {" "}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#235A94] font-martel">
            <span className="">Our Pricing Plans</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 max-w-4xl mx-auto lg:max-w-none">
          {" "}
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-6 transition-all duration-300 overflow-visible group flex flex-col h-full ${
                plan.mostPopular
                  ? "border-[#235A94] shadow-lg lg:scale-105"
                  : "border-gray-300"
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg bg-[#235A94] text-white font-roboto">
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#212529]">
                  {plan.name}
                </h3>
                <p className="text-[#495057] text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1C4470] to-[#9DC0EB] bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-5 sm:mb-8">
                {plan.features.map((feature, featureKey) => (
                  <li
                    key={featureKey}
                    className="flex items-start space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-sm text-[#495057] leading-loose tracking-wide"
                  >
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" mt-8 sm:mt-12 text-center">
          <p className="text-[#495057] text-sm sm:text-base lg:text-lg tracking-wide font-roboto">
            Get your custom care plan.{" "}
            <a
              href="tel:214-247-7288"
              className="text-[#235A94] hover:text-[#2B70BA] font-roboto"
            >
              {" "}
              Start a Free Consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
