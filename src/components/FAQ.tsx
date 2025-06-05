"use client";
import { useState } from "react";
import Link from "next/link";

const FAQ = () => {
  const faqs = [
    {
      question: "What is RouterOS?",
      answer:
        "RouterOS is the operating system of RouterBOARD hardware. It has all the necessary features for an ISP - routing, firewall, bandwidth management, wireless access point, backhaul link, hotspot gateway, VPN server and more. RouterOS is a stand-alone operating system based on the Linux kernel, and our goal here at MikroTik is to provide all these features with a quick and simple installation and an easy to use interface.",
    },
    {
      question: "Where can I purchase MikroTik products?",
      answer:
        "MikroTik products are available through our worldwide distributor network. Visit our Distributors page to find an authorized distributor in your region. We have distributors in over 190 countries around the world.",
    },
    {
      question: "Do you offer training for MikroTik products?",
      answer:
        "Yes, MikroTik offers official training courses through our training partners worldwide. We have several levels of certification including MTCNA (MikroTik Certified Network Associate), MTCRE (MikroTik Certified Routing Engineer), and several other specialized certifications. Visit our Training page for more information.",
    },
    {
      question: "What warranty do MikroTik products have?",
      answer:
        "Most MikroTik products come with a standard limited warranty of 12 months from the date of purchase. Some enterprise products offer extended warranty options. Please check the specific product documentation or contact your distributor for detailed warranty information.",
    },
    {
      question: "Is RouterOS included with MikroTik hardware?",
      answer:
        "Yes, all MikroTik RouterBOARD hardware comes with RouterOS already installed. Each device includes a license appropriate for its hardware class. You can also purchase RouterOS separately to install on a PC or other compatible hardware.",
    },
    {
      question: "How often are RouterOS updates released?",
      answer:
        "MikroTik regularly releases updates for RouterOS that include new features, improvements, and security fixes. We have both stable and testing release channels. We recommend using the stable releases for production environments, while testing releases provide early access to new features.",
    },
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container max-w-[1400px] mx-auto">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about MikroTik products, RouterOS, and support options.
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="p-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Our support team is ready to assist you.
          </p>
          <Link href="/support" className="btn-primary bg-slate-600 hover:bg-slate-700">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
