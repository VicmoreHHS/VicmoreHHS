const services = [
  {
    title: " What Services Do We Offer?",
    description:
      "We know that every home care journey is unique. To help you understand exactly how we can support you or your loved one, here’s a clear look at the day-to-day help we provide.",
  },
  {
    items: [
      {
        name: "Bathing & Showering",
        description: "Help with washing and safely in the tub or shower",
      },
      {
        name: "Getting Dressed",
        description: "Assistance picking out clothes and getting dressed",
      },
      {
        name: "Grooming",
        description: "Help with brushing hair, shaving, and oral care",
      },
      {
        name: "Using the Restroom",
        description: "Support with toilet use and staying clean",
      },
      {
        name: "Walking & Moving",
        description:
          "Help with moving safely from bed to chair or around the house",
      },
      {
        name: "Transportation",
        description: "Company and assistance for appointments or errands",
      },
      {
        name: "Meal Help",
        description: "Assistance with eating when needed",
      },
      {
        name: "Cooking & Meal Prep",
        description: "Help with planning and preparing healthy meals",
      },
      {
        name: "Laundry",
        description: "Help washing, drying, and folding clothes",
      },
      {
        name: "Shopping",
        description: "Assistance with grocery shopping and other errands",
      },
      {
        name: "Light Cleaning",
        description: "Help with keeping living spaces tidy",
      },
      {
        name: "Medicine Reminders",
        description: "Friendly reminders to take prescribed medications",
      },
      {
        name: "Medication Help",
        description: "Assistance organizing and taking medicines correctly",
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[#F8F9FA] w-full">
      {/* First Section - Left Side Content */}
      <div className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-[#235A94] font-martel">
              What Do We Offer?
            </h2>
            <p className="text-[#495057] leading-loose tracking-wide mb-6 font-roboto">
              We know that every home care journey is unique. To help you
              understand exactly how we can support you or your loved one,
              here's a clear look at the day to day help we provide.
            </p>

            <ul className="space-y-2 text-[#495057] leading-loose tracking-wide list-disc pl-5 text-left font-roboto">
              <li>
                <span className="font-bold">Bathing & Showering</span>
                <span>
                  {" "}
                  : Help with washing and safely in the tub or shower
                </span>
              </li>
              <li>
                <span className="font-bold">Getting Dressed</span>
                <span>
                  {" "}
                  : Assistance picking out clothes and getting dressed
                </span>
              </li>
              <li>
                <span className="font-bold">Grooming</span>
                <span> : Help with brushing hair, shaving, and oral care</span>
              </li>
              <li>
                <span className="font-bold">Using the Restroom</span>
                <span> : Support with toilet use and staying clean</span>
              </li>
              <li>
                <span className="font-bold">Walking & Moving</span>
                <span>
                  {" "}
                  : Help with moving safely from bed to chair or around the
                  house
                </span>
              </li>
              <li>
                <span className="font-bold">Transportation</span>
                <span>
                  {" "}
                  : Company and assistance for appointments or errands
                </span>
              </li>
              <li>
                <span className="font-bold">Meal Help</span>
                <span> : Assistance with eating when needed</span>
              </li>
              <li>
                <span className="font-bold">Cooking & Meal Prep</span>
                <span> : Help with planning and preparing healthy meals</span>
              </li>
              <li>
                <span className="font-bold">Laundry</span>
                <span> : Help washing, drying, and folding clothes</span>
              </li>
              <li>
                <span className="font-bold">Shopping</span>
                <span>
                  {" "}
                  : Assistance with grocery shopping and other errands
                </span>
              </li>
              <li>
                <span className="font-bold">Light Cleaning</span>
                <span> : Help with keeping living spaces tidy</span>
              </li>
              <li>
                <span className="font-bold">Medicine Reminders</span>
                <span>
                  {" "}
                  : Friendly reminders to take prescribed medications
                </span>
              </li>
              <li>
                <span className="font-bold">Medication Help</span>
                <span>
                  {" "}
                  : Assistance organizing and taking medicines correctly
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Optional Image/Visual */}
          <div className="flex-1">
            <div className="bg-[#235A94]/10 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏠</div>
              <p className="text-[#235A94] font-semibold font-roboto">
                Personalized In-Home Care
              </p>
              <p className="text-[#495057] text-sm mt-2 font-roboto">
                Compassionate care tailored to your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Right Side Content */}
      <div className="bg-[#235A94] py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Right Side - Text Content (appears on right due to flex-row-reverse) */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-white font-martel">
              Planning for Care: Cost & Coverage
            </h2>
            <p className="text-white/90 text-lg leading-loose tracking-wide font-roboto">
              At Vicmore, we offer two paths to care. For private pay clients,
              our rate is $20 per hour, with a minimum of 4 hours per visit. We
              are also a proud provider for the STAR+PLUS program. To qualify
              for STAR+PLUS, you must register through Texas Health and Human
              Services. Once approved for services, simply request to be placed
              with Vicmore Home Health Care Solutions there are no premiums or
              copays through this program. No matter which option you choose,
              all of our services are available to you. We will work closely
              with you and your family to create a personalized care plan
              tailored to your unique needs, goals, and daily life.
            </p>
          </div>

          {/* Left Side - Optional Image/Visual */}
          <div className="flex-1">
            <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-6xl mb-4">💰</div>
              <p className="text-white font-semibold font-roboto">
                Flexible Payment Options
              </p>
              <p className="text-white/80 text-sm mt-2 font-roboto">
                Private pay & STAR+PLUS accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
