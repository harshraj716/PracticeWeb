export default function CompanyLogos() {
    const companies = [
      {
        name: "Oracle",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        width: "120",
      },
      {
        name: "Morpheus",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2910/2910756.png",
        width: "50",
      },
      {
        name: "Samsung",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        width: "120",
      },
      {
        name: "Monday.com",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Monday.com_logo.svg",
        width: "120",
      },
      {
        name: "Segment",
        imageUrl: "https://segment.com/newsroom/content/images/2021/08/Segment-Logo-Primary.svg",
        width: "120",
      },
    ]
  
    return (
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 py-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={company.imageUrl || "/placeholder.svg"}
              alt={`${company.name} logo`}
              className="object-contain"
              style={{ width: `${company.width}px` }}
            />
          </div>
        ))}
      </div>
    )
  }
  
  