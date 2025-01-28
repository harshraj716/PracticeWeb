import React from 'react';
import { FaCog, FaChartBar, FaBuilding, FaCube, FaShoppingCart, FaFileAlt, FaArrowCircleDown } from 'react-icons/fa';

// ServiceCard Component
const ServiceCard = ({ icon, title, description }) => {
  const iconMap = {
    companyFormation: <FaCog className="text-blue-500" />,
    secretarialServices: <FaChartBar className="text-green-500" />,
    virtualOffice: <FaBuilding className="text-yellow-500" />,
    complianceServices: <FaCube className="text-red-500" />,
    payrollServices: <FaShoppingCart className="text-purple-500" />,
    bookkeepingServices: <FaFileAlt className="text-indigo-500" />,
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
      <div className="text-4xl">{iconMap[icon]}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href="#" className="mt-4 text-blue-500 hover:underline">Learn more</a>
    </div>
  );
};

// Arrow Component with Animation
const AnimatedArrow = () => {
  return (
    <div className="flex justify-center mt-8">
      <FaArrowCircleDown className="text-4xl text-orange-500 animate-bounce" />
    </div>
  );
};

// ServicesSection Component
const servicesData = [
  {
    icon: 'companyFormation',
    title: 'Company Formation',
    description: 'Build web-based solutions that enhance customer experience.',
  },
  {
    icon: 'secretarialServices',
    title: 'Company Secretarial Services',
    description: 'Make data-driven decisions and utilize technology to reach business goals.',
  },
  {
    icon: 'virtualOffice',
    title: 'Virtual Office Address',
    description: 'Foster customer relationships by effectively serving your market.',
  },
  {
    icon: 'complianceServices',
    title: 'Annual Compliance Services',
    description: 'Turn your ideas into modern products with our design experts.',
  },
  {
    icon: 'payrollServices',
    title: 'Payroll Services',
    description: 'Expand your business across the globe with minimal effort.',
  },
  {
    icon: 'bookkeepingServices',
    title: 'Bookkeeping Services',
    description: 'Steering user behaviours with creative design, data insights & technology.',
  },
];

const ServicesSection = () => {
  return (
    <section className="mt-10 p-6" style={{ backgroundColor: 'rgba(250, 250, 250, 1)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h5 className="text-2xl font-bold mb-6 text-center" style={{ color: 'rgba(235, 141, 21, 1)' }}>WELCOME TO REGISTERKARO.IN</h5>
      <AnimatedArrow />
      <h2 className="text-2xl font-bold mt-6 text-center">Explore Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition ease-in-out duration-300">See All Services</button>
      </div>
    </section>
  );
};

// Header Component
const Header = () => {
  return (
    <div
      className=" relative overflow-hidden"
  style={{
    background: "linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%)",
  }}
    >
      {/* Navigation Menu */}
      <nav className="absolute right-8 top-8 space-y-4">
        <button className="bg-white px-6 py-3 rounded-full shadow-lg block w-full hover:shadow-xl transition-shadow">
          Annual Compliance
        </button>
        <button className="bg-white px-6 py-3 rounded-full shadow-lg block w-full hover:shadow-xl transition-shadow">
          Payroll Services
        </button>
        <button className="bg-white px-6 py-3 rounded-full shadow-lg block w-full hover:shadow-xl transition-shadow">
          Company Formation
        </button>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32  grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8 pb-10">
          <h1 className="text-[2.75rem] leading-tight font-bold text-gray-900">
            Your Trusted Partner
            <br />
            For <span className="text-orange-400">Compliance</span> needs
          </h1>

          <p className="text-lg text-gray-700">
            An online business compliance platform that helps entrepreneurs and other individuals with various,
            <span className="font-medium">registrations</span>,<span className="font-medium">tax filings</span>, and
            other
            <span className="font-medium">legal matters</span>.
          </p>

          {/* Stats */}
          <div className="flex gap-12 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.5+</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">20,000+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-sm text-gray-600">Financial Stability</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors">
              Get Started For Free
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <span className="bg-orange-100 p-1 rounded-full">
                <div className="w-6 h-6 flex items-center justify-center bg-orange-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </span>
              See how it works
            </button>
          </div>
        </div>

        {/* Right Column / Illustration */}
        <div className="relative">
          <div>
          <img
            src='/banner.png'
            alt="Business compliance illustration"
            className="w-full"
          />
          </div>
          <div className="absolute bottom-0 -right-16">
            <img
            src='/arrow.png'
            alt="Business compliance illustration"
            className="w-full"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
