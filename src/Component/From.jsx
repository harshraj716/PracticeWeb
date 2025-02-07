export default function HeroSection() {
  const features = ["Instant results", "User-friendly interface", "Personalized customization"];

  return (
    <section
      className="h-[434px] mx-auto"
      style={{
        background: "linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)",
      }}
    >
      <div className="max-w-[752px] mx-auto pt-16 text-center px-4">
        <p className="text-white/90 text-sm font-medium tracking-wide mb-4">1% OF THE INDUSTRY</p>

        <h1 className="text-xl md:text-4xl font-bold text-white mb-8">
          Welcome to your new digital reality. Now.
        </h1>

        <div className="flex flex-col sm:flex-row mb-5 w-full">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-3 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none mb-2 sm:mb-0"
          />
          <button className="bg-[#FFA229] text-white px-8 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-[#FF8A1E] transition-colors">
            Submit
          </button>
        </div>

        <div className="flex flex-col sm:flex-row  justify-center gap-6 items-center h-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 w-full sm:w-auto text-center"
            >
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#1C4670]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
