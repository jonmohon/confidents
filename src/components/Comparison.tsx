import ScrollReveal from "./ScrollReveal";

const rows = [
  { feature: "Repair Time", pdr: "Same day (excluding hail)", body: "5-20 days" },
  { feature: "Factory Paint", pdr: "Preserves factory paint", body: "Repainted panels can show color or texture discrepancies" },
  { feature: "Cost", pdr: "50-70% less", body: "Full price" },
  { feature: "CARFAX Report", pdr: "Not reported", body: "Reported as body work" },
  { feature: "Vehicle Value", pdr: "Maintained", body: "Decreased" },
  { feature: "Filler & Sanding", pdr: "Never used", body: "Required" },
  { feature: "Warranty", pdr: "Lifetime warranty", body: "Varies (often limited)" },
  { feature: "Convenience", pdr: "Mobile — we come to you", body: "Drop off for days/weeks" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-24 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              The Smart Choice
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              PDR vs. Body Shop
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              See why paintless dent removal is the smarter, faster, and more
              affordable choice.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Table header */}
            <div className="grid grid-cols-3 text-sm sm:text-base font-bold">
              <div className="p-4 sm:p-6 bg-brand-dark text-gray-400">Feature</div>
              <div className="p-4 sm:p-6 text-center bg-brand-orange text-white">
                Confidents PDR
              </div>
              <div className="p-4 sm:p-6 text-center bg-brand-dark text-gray-400">
                Body Shop
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm ${
                  i % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"
                } border-t border-white/5`}
              >
                <div className="p-4 sm:p-5 font-semibold text-gray-300">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-5 text-center text-emerald-400 font-medium flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {row.pdr}
                </div>
                <div className="p-4 sm:p-5 text-center text-gray-600 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0 hidden sm:block text-red-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {row.body}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
