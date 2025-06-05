import images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';

const Features = () => {
  const features = [
    {
      title: "RouterOS",
      description: "The operating system of RouterBOARD hardware with routing, firewall, bandwidth management, wireless access point, backhaul link, hotspot gateway, VPN server and more."
    },
    {
      title: "Enterprise Switches",
      description: "High-performance switches with PoE options, SFP+ ports, and enterprise-grade features for reliable network infrastructure."
    },
    {
      title: "Wi-Fi 6 Access Points",
      description: "Fast and reliable wireless connectivity with the latest Wi-Fi 6 technology for better performance in dense environments."
    },
    {
      title: "LTE & 5G Solutions",
      description: "Mobile connectivity options including LTE and 5G routers for primary or backup internet connections."
    },
    {
      title: "Outdoor Solutions",
      description: "Weather-resistant networking equipment designed for harsh environments with extended temperature ranges."
    },
    {
      title: "ISP & Enterprise Solutions",
      description: "Complete networking solutions for Internet Service Providers and enterprise networks of all sizes."
    }
  ];

  return (
    <section id="products" className="section bg-white">
      <div className="container max-w-[1400px] mx-auto">
        <h2 className="section-title">MikroTik Networking Solutions</h2>
        <p className="section-subtitle">
          Reliable hardware and software solutions for networks of any size, 
          from home offices to service provider networks.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* RouterOS Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">RouterOS - The Power Behind MikroTik</h3>
            <p className="text-gray-600 mb-6">
              RouterOS is the operating system of RouterBOARD hardware. It has all the necessary features for an ISP - routing, firewall, bandwidth management, wireless access point, backhaul link, hotspot gateway, VPN server and more.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-slate-600 mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced routing and switching capabilities</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-slate-600 mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Powerful firewall and security features</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-slate-600 mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Quick and simple installation with easy-to-use interface</span>
              </li>
            </ul>
            <Link href="/software" className="btn-primary bg-slate-600 hover:bg-slate-700 inline-block mt-6">
              Learn More About RouterOS
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg relative">
            <div className=" aspect-[4/3] bg-white rounded-lg flex items-center justify-center">
              <div className="z-2 text-gray-600 p-4 text-center">
                <h4 className="font-bold mb-2">RouterOS Dashboard</h4>
                <p className="text-sm">Powerful network management interface with comprehensive monitoring and configuration tools</p>
              </div>
                <img src={images.ros.src} alt="RouterOS Dashboard" className='w-full h-full object-contain absolute top-0 left-0 z-1' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
