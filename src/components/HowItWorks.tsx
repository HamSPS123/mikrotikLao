import images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Your MikroTik Device",
      description: "Select from our wide range of routers, switches, wireless systems, and LTE products to meet your networking needs.",
      icon: "device",
      number: "01"
    },
    {
      title: "Configure with RouterOS",
      description: "Use our powerful RouterOS software to set up and manage your network with advanced features and security options.",
      icon: "config",
      number: "02"
    },
    {
      title: "Scale Your Network",
      description: "Easily expand your network as your needs grow with our reliable and cost-effective networking solutions.",
      icon: "scale",
      number: "03"
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50 py-16">
      <div className="container max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How MikroTik Works For You</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          MikroTik provides reliable networking solutions for businesses of all sizes. Here's how to get started with our products.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 font-bold text-lg px-4 py-1 rounded-bl-lg">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                {step.icon === 'device' && (
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                )}
                {step.icon === 'config' && (
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )}
                {step.icon === 'scale' && (
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video relative bg-gray-100 rounded-md overflow-hidden mb-4">
                {/* Placeholder for RouterOS screenshot or video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <img src={images.sh.src} alt="RouterOS Dashboard" className='w-full h-full object-contain absolute top-0 left-0 z-1' />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">RouterOS 7 Quick Start Guide</h3>
              <p className="text-gray-600 mb-4">Learn how to set up your MikroTik device with our comprehensive RouterOS 7 guide.</p>
              <Link href="/documentation/routeros" className="text-slate-600 hover:text-slate-700 font-medium flex items-center">
                Watch Tutorial
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block p-2 bg-slate-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6">Network Management Made Simple</h2>
            <p className="text-gray-600 mb-6">
              MikroTik RouterOS provides all the tools you need for complete control over your network. From bandwidth management to firewall configuration, our intuitive interface makes network administration accessible.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Firewall</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">VPN</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Routing</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Bandwidth Management</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Wireless</span>
            </div>
            <Link href="/products/routeros" className="bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
              Explore RouterOS
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
