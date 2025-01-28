import React from "react"

export default function TrustedPartners() {
  const companies = [
    {
      name: "Oracle",
      logo: "/oracle.png",
      className: "h-8",
    },
    {
      name: "Morpheus",
      logo: "/morpheus.png",
      className: "h-8",
    },
    {
      name: "Morpheus",
      logo: "/morpheus.png",
      className: "h-8",
    },
    {
      name: "Samsung",
      logo: "/samsung.png",
      className: "h-8",
    },
    {
      name: "Monday.com",
      logo: "/monday.png",
      className: "h-6",
    },
    {
      name: "Segment",
      logo: "/segment.png",
      className: "h-8",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-medium text-gray-400 mb-12">
          Trusted By Over 100+ Startups and freelance business
        </h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 items-center justify-items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className={`${company.className} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

