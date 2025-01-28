import React from 'react';
export default function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-[#FF8A1E] uppercase text-sm font-semibold tracking-wider">
              WELCOME TO REGISTERKARO.IN
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D]">
              About <span className="text-[#FF8A1E]">Register Karo</span>
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We have been using Intelegencia as our DevOps vendor for our field service applications over the last
                couple of years and I'm extremely pleased with their performance, ability to execute, and willingness to
                adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about customer
                satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding
                everyone's expectations.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I would strongly recommend their services to any organization that is looking for solid, reliable, and
                predictable outcomes.
              </p>
            </div>

            <button className="bg-[#1B365D] text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-[#1B365D]/90 transition-colors">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Right Image Container */}
          <div className="relative">
            {/* Background Decorative Elements */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-01-1.png-ds8rQcv5nLm0Rvy470Xzm26UBIh6Rv.png"
              alt=""
              className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20 z-0"
              aria-hidden="true"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector-WKpRxXojnnYD6QoGkJLeOjrd8wfvkC.png"
              alt=""
              className="absolute top-0 right-0 h-full w-32 object-cover opacity-10 z-0"
              aria-hidden="true"
            />

            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201261153018-y6YGnPTDrwgWnyZkFflpMAtrsUv1GF.png"
                  alt="Register Karo Team"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {/* Orange Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#FF8A1E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


