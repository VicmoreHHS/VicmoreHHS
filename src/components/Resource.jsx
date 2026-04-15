export default function Resource() {
  return (
    <div className="bg-[#F8F9FA] w-full ">
      {/* First Section - Left Side Content */}
      <div className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left mt-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-[#235A94] font-martel">
              Why Home Health Care Matters
            </h2>
            <p className="text-[#495057] leading-loose tracking-wide mb-6 font-roboto">
              There's no place like home. For individuals facing health
              challenges or the natural changes that come with aging, home is
              where comfort, familiarity, and independence live. Home health
              care is about more than medical support it's about preserving
              dignity, maintaining connection to community, and empowering
              people to live life on their own terms, in the place they love
              most. Whether it's assistance with daily tasks, medication
              reminders, or simply having a caring companion nearby, the right
              support at home can transform quality of life for both patients
              and their families.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section - Right Side Content */}
      <div className="bg-[#235A94] py-16 sm:py-20 px-10 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Right Side - Text Content (appears on right due to flex-row-reverse) */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-white font-martel">
              Learn More from Trusted Sources
            </h2>
            <div className="space-y-6">
              {/* Resource Card 1 */}
              <div className=" p-6">
                <a
                  href="https://www.hhs.texas.gov/handbooks/community-care-services-eligibility-handbook/4600-primary-home-care-community-attendant-services"
                  className="text-[#F0F6FF] font-bold font-roboto text-xl hover:scale-101 transition-transform duration-300 inline-flex items-center gap-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Primary Home Care (PHC) and Community Attendant Services (CAS)
                  - Texas Health and Human Services : Read full article
                  <span className="text-lg">→</span>
                </a>
                <p className="text-[#F0F6FF] text-base leading-loose tracking-wide font-roboto">
                  An official Texas HHSC guide explaining what personal
                  attendant services are available, including detailed lists of
                  allowable tasks like bathing, meal prep, and medication
                  reminders. Essential reading for understanding what
                  state-funded programs cover.
                </p>
              </div>

              {/* Resource Card 2 */}
              <div className="p-6">
                <a
                  href="https://paid4care.aarpfoundation.org/article/caregivers-journey/"
                  className="text-[#F0F6FF] font-bold font-roboto text-xl hover:scale-101 transition-transform duration-300 inline-flex items-center gap-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A Caregiver's Journey: Getting Paid to Care for Family : Read
                  full article
                  <span className="text-lg">→</span>
                </a>
                <p className="text-[#F0F6FF] text-base leading-loose tracking-wide font-roboto">
                  An inspiring, practical story from the AARP Foundation about
                  how one family navigated Medicaid waivers and self-directed
                  services to become paid family caregivers.
                </p>
              </div>

              {/* Resource Card 3 */}
              <div className="p-6">
                <a
                  href="https://tahch.org/tahchorg/membership/membership-consumer"
                  className="text-[#F0F6FF] font-bold font-roboto text-xl hover:scale-101 transition-transform duration-300 inline-flex items-center gap-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Your Home, Your Health, Your Choice - Texas Association for
                  Home Care & Hospice : Read full article
                  <span className="text-lg">→</span>
                </a>
                <p className="text-[#F0F6FF] text-base leading-loose tracking-wide font-roboto">
                  A consumer-focused guide explaining the types of home care
                  agencies in Texas, questions to ask when choosing a provider,
                  and who can benefit from home care services.
                </p>
              </div>

              {/* Resource Card 4 */}
              <div className="p-6">
                <a
                  href="https://www.healthline.com/health/medicare/how-to-qualify-for-home-health-care-under-medicare"
                  className="text-[#F0F6FF] font-bold font-roboto text-xl hover:scale-101 transition-transform duration-300 inline-flex items-center gap-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qualifying for Home Health Care Under Medicare : Read full
                  article
                  <span className="text-lg">→</span>
                </a>
                <p className="text-[#F0F6FF] text-base leading-loose tracking-wide font-roboto">
                  A detailed guide from Healthline on the steps to qualify for
                  Medicare home health benefits, including hours of care
                  covered, costs, and what to expect from Medicare-certified
                  agencies.
                </p>
              </div>

              {/* Resource Card 5 */}
              <div className="p-6">
                <a
                  href="https://www.medicaid.gov/medicaid/long-term-services-supports/index.html"
                  className="text-[#F0F6FF] font-bold font-roboto text-xl hover:scale-101 transition-transform duration-300 inline-flex items-center gap-1 mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Long-Term Services and Supports : Read full article
                  <span className="text-lg">→</span>
                </a>
                <p className="text-[#F0F6FF] text-base leading-loose tracking-wide font-roboto">
                  A comprehensive overview of Medicaid's home and
                  community-based services (HCBS), including waivers that allow
                  individuals to receive care at home rather than in
                  institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
