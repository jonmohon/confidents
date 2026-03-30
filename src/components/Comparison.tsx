const rows = [
  { feature: "Repair Time", pdr: "Same day (1-3 hours)", body: "5-14 days" },
  { feature: "Factory Paint", pdr: "100% preserved", body: "Repainted (color mismatch risk)" },
  { feature: "Cost", pdr: "50-70% less", body: "Full price" },
  { feature: "CARFAX Report", pdr: "Not reported", body: "Reported as body work" },
  { feature: "Vehicle Value", pdr: "Maintained", body: "Decreased" },
  { feature: "Filler & Sanding", pdr: "Never used", body: "Required" },
  { feature: "Warranty", pdr: "Lifetime warranty", body: "Varies (often limited)" },
  { feature: "Convenience", pdr: "Mobile — we come to you", body: "Drop off for days/weeks" },
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-brand-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-4">
            PDR vs. <span className="text-brand-orange">Body Shop</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See why paintless dent removal is the smarter, faster, and more
            affordable choice.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Table header */}
          <div className="grid grid-cols-3 bg-brand-dark text-white font-bold text-sm sm:text-base">
            <div className="p-4 sm:p-6">Feature</div>
            <div className="p-4 sm:p-6 text-center bg-brand-orange">
              Confidents PDR
            </div>
            <div className="p-4 sm:p-6 text-center">Traditional Body Shop</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 text-sm sm:text-base ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-t border-gray-100`}
            >
              <div className="p-4 sm:p-6 font-semibold text-brand-dark">
                {row.feature}
              </div>
              <div className="p-4 sm:p-6 text-center text-green-600 font-medium flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 hidden sm:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {row.pdr}
              </div>
              <div className="p-4 sm:p-6 text-center text-gray-400 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 flex-shrink-0 hidden sm:block text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {row.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
