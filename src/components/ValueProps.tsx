import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lifetime Warranty",
    desc: "Every repair is backed by our lifetime warranty. We stand behind our work, period.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "$0 Out of Pocket",
    desc: "We work directly with your insurance. Most customers pay nothing for hail damage repairs.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Mobile Service",
    desc: "We come to your home, office, or wherever your vehicle is. No need to drop off at a shop.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Most repairs are completed in just a few hours — not days or weeks like a body shop.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Factory Paint Preserved",
    desc: "No repainting, no filler, no sanding. Your original factory finish stays 100% intact.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "No CARFAX Report",
    desc: "PDR doesn't show up on CARFAX. Protect your vehicle's resale value with invisible repairs.",
  },
];

export default function ValueProps() {
  return (
    <section className="relative py-24 bg-brand-dark">
      <div className="grain absolute inset-0" />
      {/* Subtle glow behind heading */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-orange/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              The Confidents Difference
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We deliver the highest quality paintless dent removal in the
              Douglas County area with unmatched service and value.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-brand-orange/5 h-full">
                {/* Gradient glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 mb-5 transition-all duration-300 group-hover:bg-brand-orange/20 group-hover:shadow-lg group-hover:shadow-brand-orange/10">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-brand-orange">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {v.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
