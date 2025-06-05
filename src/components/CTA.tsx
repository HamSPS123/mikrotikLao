import Link from 'next/link';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className="bg-slate-600 py-16 md:py-20">
      <div className="container max-w-[1400px] mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to build your professional network?
              </h2>
              <p className="text-white text-lg mb-8 opacity-90">
                MikroTik products are used by ISPs, businesses, and networking professionals in over 190 countries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/distributors" className="bg-white hover:bg-gray-100 text-slate-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  Find a Distributor
                </Link>
                <Link href="/training" className="bg-transparent hover:bg-slate-700 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  MikroTik Training
                </Link>
              </div>
              <div className="mt-8 text-white opacity-80">
                <p className="text-sm">Join thousands of certified network engineers worldwide</p>
                <div className="flex items-center mt-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-600 bg-slate-${i*100} flex items-center justify-center text-xs font-bold`}>MT</div>
                    ))}
                  </div>
                  <span className="ml-3">10,000+ certified professionals</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">MikroTik Certified Training</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>MTCNA - MikroTik Certified Network Associate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>MTCRE - MikroTik Certified Routing Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>MTCWE - MikroTik Certified Wireless Engineer</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-slate-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>MTCSE - MikroTik Certified Security Engineer</span>
                  </li>
                </ul>
                <Link href="/training-schedule" className="block w-full bg-slate-600 hover:bg-slate-700 text-white text-center font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                  View Training Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
