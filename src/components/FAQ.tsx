"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Paintless Dent Removal (PDR)?",
    a: "PDR is a specialized technique that removes dents from vehicle panels without affecting the factory paint. Our technicians use precision tools to gently massage the metal back to its original shape from behind the panel. No fillers, no sanding, no repainting — just a flawless finish.",
  },
  {
    q: "How much does PDR cost?",
    a: "The cost depends on the size, location, and number of dents. Small door dings can start as low as $75-$150. Hail damage repairs vary based on severity. We offer free estimates and work directly with insurance companies, so many customers pay $0 out of pocket for hail repairs.",
  },
  {
    q: "Will my insurance cover the repair?",
    a: "Yes! PDR is covered by all major insurance providers. We handle the entire claims process for you — from filing the claim to getting approval. For hail damage, most customers pay nothing out of pocket. We work with State Farm, GEICO, Allstate, Progressive, USAA, and all other carriers.",
  },
  {
    q: "How long does a repair take?",
    a: "Most minor dents and door dings are repaired in 1-3 hours. Hail damage with multiple dents typically takes 1-3 days depending on severity. Compare that to 1-3 weeks at a traditional body shop!",
  },
  {
    q: "Do you come to me?",
    a: "Absolutely! We offer mobile PDR service throughout the Denver Metro area and Colorado Springs. We'll come to your home, office, or wherever your vehicle is parked. No need to drop off your car at a shop and arrange alternative transportation.",
  },
  {
    q: "Will the repair show up on CARFAX?",
    a: "No. Since PDR doesn't involve repainting or body work, it is not reported to CARFAX. This is a major advantage for protecting your vehicle's resale value compared to traditional body shop repairs.",
  },
  {
    q: "What if my paint is damaged?",
    a: "PDR works best when the paint is intact. If the impact has chipped or cracked the paint, we'll let you know during the free inspection and recommend the best course of action. We're always honest about what PDR can and can't do.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — every repair comes with a lifetime warranty. If you're ever unsatisfied with the repair, we'll make it right. We stand behind our work with the strongest guarantee in the industry.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-4">
            Frequently Asked{" "}
            <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about paintless dent removal.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-brand-dark pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-brand-orange transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
