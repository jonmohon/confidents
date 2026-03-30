import AnimatedCounter from "./AnimatedCounter";

const insurers = [
  "State Farm",
  "GEICO",
  "Allstate",
  "Progressive",
  "USAA",
  "Nationwide",
  "Liberty Mutual",
  "Farmers",
];

export default function TrustBar() {
  return (
    <section className="relative bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/5">
          {[
            { target: 15000, suffix: "+", label: "Dents Removed" },
            { target: 98, suffix: "%", label: "Customer Satisfaction" },
            { target: 15, suffix: "+", label: "Years Experience" },
            { target: 500, suffix: "+", label: "5-Star Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-brand-orange">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Insurance logos */}
        <div className="py-8">
          <p className="text-center text-xs text-gray-600 font-medium mb-6 uppercase tracking-widest">
            Accepted by all major insurance providers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {insurers.map((name) => (
              <span
                key={name}
                className="text-gray-600 font-bold text-lg md:text-xl tracking-tight hover:text-gray-400 transition-colors cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
