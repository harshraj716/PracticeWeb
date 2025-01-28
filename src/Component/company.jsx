export default function Company() {
  const partners = [
    {
      name: "Coinbase",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo%20(1)-fLia9qC3G2aowzID3V3I3Zaqu8JTwi.svg",
      width: 135,
      height: 48,
    },
    {
      name: "Spotify",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo%20(2)-yuTA0C765u7S2LBf6yzqxYF24qMxWI.svg",
      width: 122,
      height: 48,
    },
    {
      name: "Slack",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo%20(3)-sORKmpyR55xLqtWbz32Ju1rwg2Ucqr.svg",
      width: 164,
      height: 48,
    },
    {
      name: "Dropbox",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo%20(4)-d6Y6Occd6BvXSEYtk6AIQuCBV7inQZ.svg",
      width: 117,
      height: 48,
    },
    {
      name: "Webflow",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo%20(5)-VpUK24qC8W9z0qW2FVHw98JCWm5hox.svg",
      width: 98,
      height: 48,
    },
    {
      name: "Zoom",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Company%20logo-F0fg2caW7p78aIHxZowYQ2d3W6DjeW.svg",
      width: 135,
      height: 48,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
          {partners.map((partner) => (
            <div key={partner.name} className="relative group transition-opacity hover:opacity-80">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
