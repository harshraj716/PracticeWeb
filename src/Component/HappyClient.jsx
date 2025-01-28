import React from "react"

export default function HappyClients() {

  const getSizeClass = (size) => {
    switch (size) {
      case "sm":
        return "w-16 h-16 p-3"
      case "lg":
        return "w-24 h-24 p-5"
      default:
        return "w-20 h-20 p-4"
    }
  }

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1B365D] mb-4">Our Happy Clients</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
          customer service for state of the art customer service.
        </p>
      </div>

      {/* Logo Cloud Container */}
      <div className="mx-auto">
        <img
         src="/clients.png"
         className="w-full"
        />
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <button className="inline-flex items-center text-[#1B365D] font-medium hover:text-blue-700 transition-colors group">
          Show more
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

