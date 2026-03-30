const galleryItems = [
  {
    title: "Door Ding Removal",
    vehicle: "2023 BMW X5",
    desc: "Deep door ding on the driver-side door — removed in under 2 hours.",
  },
  {
    title: "Hail Damage Restoration",
    vehicle: "2022 Toyota Camry",
    desc: "Over 50 hail dents across hood and roof — fully restored to factory condition.",
  },
  {
    title: "Body Crease Repair",
    vehicle: "2024 Ford F-150",
    desc: "Sharp crease on rear quarter panel — massaged out with zero paint damage.",
  },
  {
    title: "Large Dent Repair",
    vehicle: "2023 Tesla Model 3",
    desc: "Shopping cart impact on rear fender — perfect repair, no repainting needed.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Our <span className="text-brand-orange">Results</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Real repairs. Real results. Every dent tells a story — and we give
            it a happy ending.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-orange/50 transition-all"
            >
              {/* Placeholder for before/after images */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full">
                      BEFORE
                    </span>
                    <svg
                      className="w-6 h-6 text-brand-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                      AFTER
                    </span>
                  </div>
                  <p className="text-white/30 text-sm">
                    Before &amp; after photos coming soon
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-brand-orange text-sm font-semibold">
                    {item.vehicle}
                  </span>
                </div>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-brand-orange/30"
          >
            See What We Can Do for You
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
