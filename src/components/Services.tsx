import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Door Ding Repair",
    desc: "Shopping carts, car doors, and minor impacts leave unsightly dings. We remove them without a trace, preserving your factory finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
  {
    title: "Hail Damage Repair",
    desc: "Colorado hail storms can leave hundreds of dents. We restore your vehicle to pre-storm condition and handle all insurance paperwork.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Large Dent Repair",
    desc: "Even larger dents from collisions or impacts can often be repaired with PDR — saving you thousands over traditional body work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: "Body Crease Repair",
    desc: "Sharp creases from impacts require advanced technique. Our specialists have the skill and tools to make them disappear.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-brand-dark">
      <div className="grain absolute inset-0" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-orange/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From minor door dings to severe hail damage, we have the expertise
              and tools to handle it all.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/[0.06] h-full">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 transition-all duration-300 group-hover:bg-brand-orange/20 group-hover:shadow-lg group-hover:shadow-brand-orange/10">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-brand-orange">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-orange opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
            >
              Get a Free Estimate
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
