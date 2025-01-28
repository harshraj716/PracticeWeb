export default function VideoSection() {
    return (
      <section className="bg-[#1B365D] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">Our Video Introductions</h2>
                <p className="text-gray-400">
                  Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam
                  tincidunt apis dui.
                </p>
              </div>
  
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF8A1E] rounded-full p-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8.5 14.5A4 4 0 0 0 12 16a4 4 0 0 0 3.5-1.5" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Explore ideas together</h3>
                    <p className="text-gray-400">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>
  
                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF8A1E] rounded-full p-4 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Bring those ideas to life</h3>
                    <p className="text-gray-400">
                      Engage audience segments and finally create actionable insights. Amplify vertical integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Video */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201000005965-jl2OrZMSsNnFjxZKCEdrUTvXoYNdGx.png"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-4"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  