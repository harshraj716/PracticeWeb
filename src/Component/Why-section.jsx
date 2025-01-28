import React from "react"

export default function WhySection() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF4D1C]",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink-50",
      iconColor: "text-red-500",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-green-50",
      iconColor: "text-[#FF4D1C]",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left side content */}
          <div className="max-w-xl">
            <span className="text-[#FF8A1E] uppercase text-sm font-semibold tracking-wider">WHY REGISTERKARO.IN</span>
            <h2 className="text-3xl font-bold text-[#1B365D] mt-2 mb-4">Why Choose Register Karo</h2>
            <p className="text-gray-600">
              It is with consistent services and results that build trust with the people and that in turn help us to
              serve the business better.
            </p>
          </div>

          {/* Right side top cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className={`${feature.bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-[#1B365D] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row cards - Now aligned from right to left */}
        <div className="flex justify-end mt-6">
          <div className="grid md:grid-cols-4 gap-6">
            {features
              .slice(2, 5)
              .reverse()
              .map((feature, index) => (
                <div key={index} className={`${feature.bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 ${feature.iconColor}`}>{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-[#1B365D] mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

