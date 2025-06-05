import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Networking Hardware & Software Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              MikroTik makes networking hardware and software, used in nearly all countries of the world. Our mission is to make existing Internet technologies faster, more powerful and affordable to wider range of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary bg-slate-600 hover:bg-slate-700">
                Explore Products
              </Link>
              <Link href="/distributors" className="btn-secondary border-slate-600 text-slate-600 hover:bg-slate-50">
                Find Distributors
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">190+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">1000+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-600">25+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-6 w-full">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-slate-600 mb-2">CRS320-8P-8B-4S+RM</h3>
                      <p className="text-sm text-gray-600">High-power PoE++ switch with 802.3af/at/bt support</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-slate-600 mb-2">wAP ax</h3>
                      <p className="text-sm text-gray-600">Fast and reliable Wi-Fi 6 for challenging environments</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-slate-600 mb-2">NetMetal ax</h3>
                      <p className="text-sm text-gray-600">Tough long-range outdoor access point with Wi-Fi 6</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-slate-600 mb-2">RouterOS</h3>
                      <p className="text-sm text-gray-600">The operating system with all necessary features for an ISP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
