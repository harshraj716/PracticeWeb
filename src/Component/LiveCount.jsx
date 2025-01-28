export default function StatisticsSection() {
  const stats = [
    {
      number: "1M",
      label: "CUSTOMERS",
    },
    {
      number: "12",
      label: "YEARS OF EXCELLENCE",
      specialGradient: true,
    },
    {
      number: "41",
      label: "R&D ENGINEERS",
    },
    {
      number: "78",
      label: "COUNTRIES",
    },
    {
      number: "3287",
      label: "PARTNERS",
    },
    {
      number: "41",
      label: "AWARDS RECEIVED",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[background: #EB8D15;] uppercase text-sm font-semibold tracking-wider">WHY REGISTER KARO</span>
          <h2 className="text-3xl font-bold text-[#2D1D0C] mt-2">Some Numbers are important</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block mb-3">
                <span
                  className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text`}
                  style={{
                    backgroundImage: stat.specialGradient
                      ? "linear-gradient(152.74deg, #F53843 10%, #2F5795 68%)"
                      : "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                  }}
                >
                  {stat.number}
                </span>
                <span
                  className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text`}
                  style={{
                    backgroundImage: stat.specialGradient
                      ? "linear-gradient(152.74deg, #F53843 10%, #2F5795 68%)"
                      : "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                  }}
                >
                  +
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

