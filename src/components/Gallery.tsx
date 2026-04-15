import ScrollReveal from "./ScrollReveal";

const galleryItems = [
  {
    title: "Door Ding Removal",
    vehicle: "2023 BMW X5",
    desc: "Deep door ding on the driver-side door — removed in under 2 hours.",
    time: "1.5 hrs",
    saved: "$350",
  },
  {
    title: "Hail Damage Restoration",
    vehicle: "2022 Toyota Camry",
    desc: "Over 50 hail dents across hood and roof — fully restored to factory condition.",
    time: "3 hrs",
    saved: "$2,400",
  },
  {
    title: "Body Crease Repair",
    vehicle: "2024 Ford F-150",
    desc: "Sharp crease on rear quarter panel — massaged out with zero paint damage.",
    time: "2 hrs",
    saved: "$800",
  },
  {
    title: "Large Dent Repair",
    vehicle: "2023 Tesla Model 3",
    desc: "Shopping cart impact on rear fender — perfect repair, no repainting needed.",
    time: "45 min",
    saved: "$600",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-brand-dark">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Real Results
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              See the Difference
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Drag the slider to reveal the transformation. Every repair is real
              work from our team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-brand-orange/30 transition-all duration-500">
                {/* Placeholder for before/after - ready for BeforeAfterSlider */}
                <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="text-center relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/20">
                        BEFORE
                      </span>
                      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                        AFTER
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Interactive slider — photos coming soon
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-brand-orange text-sm font-semibold">
                      {item.vehicle}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{item.desc}</p>

                  {/* Stats */}
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/5 px-3 py-2 text-center">
                      <p className="text-[10px] text-gray-600 uppercase tracking-wider">Time</p>
                      <p className="font-semibold text-white text-sm">{item.time}</p>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/5 px-3 py-2 text-center">
                      <p className="text-[10px] text-gray-600 uppercase tracking-wider">Saved</p>
                      <p className="font-semibold text-brand-orange text-sm">{item.saved}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://photos.app.goo.gl/XRtrKGeYuPYLXQRUA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
            >
              View Photo Gallery
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-orange/50 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-xl transition-all active:scale-[0.98]"
            >
              See What We Can Do for You
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
