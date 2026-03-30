import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Call, text, or fill out our form. Send us photos of the damage for a quick quote.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Free Inspection",
    desc: "We come to you and assess the damage in person with a detailed, no-obligation estimate.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Insurance Coordination",
    desc: "We handle everything with your insurance — filing claims, getting approvals, zero hassle.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Expert Repair",
    desc: "Certified technicians use specialized tools to massage dents from the inside — no paint, no filler.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Quality Check",
    desc: "Every repair goes through rigorous inspection to ensure a flawless, factory-like finish.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "You're Done!",
    desc: "Drive away dent-free with a lifetime warranty and your factory paint untouched.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From first contact to flawless finish, our streamlined process
              makes dent repair effortless.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <div className="relative group overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 transition-all duration-500 hover:border-brand-orange/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/10 h-full">
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-orange/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Step number watermark - visible by default */}
                <span className="absolute top-4 right-4 text-6xl font-black text-white/[0.08] group-hover:text-brand-orange/20 transition-colors duration-500">
                  {step.num}
                </span>

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/40 via-brand-orange to-brand-orange/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-brand-orange/30 to-transparent hidden lg:block" />
                )}

                <div className="relative">
                  <div className="w-14 h-14 bg-brand-orange/15 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/30 mb-5 transition-all duration-300 group-hover:bg-brand-orange/30 group-hover:ring-brand-orange/50 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-orange/20">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.desc}
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
