import images from '@/constants/images';
import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
  
  const productShowcase = [
    {
      name: "CCR2004-1G-12S+2XS",
      description: "High-performance 12x SFP+ and 2x SFP28 router",
      image: images.product1.src  
    },
    {
      name: "CRS326-24S+2Q+",
      description: "24 SFP+ port switch with 2 QSFP+ ports",
      image: images.product2.src
    },
    {
      name: "hAP ac³",
      description: "Dual-band home access point with Wi-Fi 5",
      image: images.product3.src
    },
    {
      name: "LHG LTE kit",
      description: "Long-range LTE CPE with 17dBi antenna",
      image: images.product4.src
    }
  ];

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container max-w-[1400px] mx-auto">
        {/* Product Showcase Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="relative">
            {/* Product Showcase */}
            <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
              {productShowcase.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-64 md:w-80">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                    <div className="p-4">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <Image src={product.image} alt={product.name} width={200} height={200} />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <Link 
                        href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-slate-600 font-medium text-sm hover:underline"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Distributor CTA */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Ready to upgrade your network?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              MikroTik products are available through our worldwide distributor network in over 190 countries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/distributors" className="btn-primary bg-slate-600 hover:bg-slate-700 flex items-center justify-center gap-2">
                Find a Distributor
              </Link>
              <Link href="/training" className="btn-secondary border-slate-600 text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
                MikroTik Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
