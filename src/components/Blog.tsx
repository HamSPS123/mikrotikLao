import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      title: "RouterOS 7.13 Released with New Features",
      excerpt: "The latest RouterOS update brings significant improvements to wireless capabilities, security enhancements, and performance optimizations.",
      image: "/blog/routeros-update.jpg",
      author: "MikroTik Team",
      date: "June 1, 2025",
      category: "RouterOS",
      slug: "routeros-7-13-released-with-new-features"
    },
    {
      title: "Securing Your Network with MikroTik Firewall",
      excerpt: "Learn how to implement advanced firewall rules and security best practices using MikroTik RouterOS to protect your network infrastructure.",
      image: "/blog/network-security.jpg",
      author: "Norman Ritchie",
      date: "May 25, 2025",
      category: "Security",
      slug: "securing-your-network-with-mikrotik-firewall"
    },
    {
      title: "ISP Deployment Case Study: Serving 10,000+ Customers",
      excerpt: "See how a regional ISP scaled their network to serve thousands of customers using MikroTik routers and wireless equipment.",
      image: "/blog/isp-deployment.jpg",
      author: "Technical Team",
      date: "May 18, 2025",
      category: "Case Study",
      slug: "isp-deployment-case-study-serving-thousands"
    }
  ];

  return (
    <section id="blog" className="section bg-gray-50 py-16">
      <div className="container max-w-[1400px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Latest News & Articles</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Stay updated with the latest MikroTik product announcements, technical guides, and networking best practices.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {index === 0 ? (
                    <div className="absolute inset-0 bg-slate-600 bg-opacity-10 flex items-center justify-center">
                      <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        New Release
                      </div>
                    </div>
                  ) : (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 hover:text-slate-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-100 mr-3 flex items-center justify-center text-slate-600 font-medium">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="text-slate-600 hover:text-slate-700 text-sm font-medium flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center border border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
          >
            View All Articles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
