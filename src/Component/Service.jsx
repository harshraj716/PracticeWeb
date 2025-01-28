import React, { useEffect, useRef } from "react"

export default function ServicesSection() {
  const services = [
    {
      icon: "/icons/service5.svg",
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      hasBorder: true,
    },
    {
      icon: "/icons/service.svg",
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      hasBorder: false,
    },
    {
      icon: "/icons/service2.svg",
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      hasBorder: true,
    },
    {
      icon: "/icons/service3.svg",
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      hasBorder: true,
    },
    {
      icon: "/icons/service4.png",
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      hasBorder: false,
    },
    {
      icon: "/icons/service.svg",
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      hasBorder: true,
    },
  ]

  // Refs for the cards that will have animated borders
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("border-animate")
          } else {
            entry.target.classList.remove("border-animate")
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#FF8A1E] uppercase text-sm font-semibold tracking-wider">
            WELCOME TO REGISTERKARO.IN
          </span>
          <h2 className="text-4xl font-bold text-[#1B365D] mt-2">Explore Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => service.hasBorder && (cardRefs.current[index] = el)}
              className={`p-8 rounded-lg transition-all duration-300  relative group
                ${service.hasBorder ? "border-animate-container" : ""}`}
            >
              {/* Animated Border */}
              {service.hasBorder && (
                <div className="absolute right-0 top-0 w-1 h-0 bg-red-500 transition-all duration-1000 transform group-hover:h-full"></div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1B365D] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-[#1B365D] font-medium hover:text-[#FF8A1E] transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* See All Services Button */}
        <div className="text-center mt-12">
          <button className="bg-[#1B365D] text-white px-8 py-3 rounded-lg hover:bg-[#264773] transition-colors">
            See All Services
          </button>
        </div>
      </div>
    </section>
  )
}

