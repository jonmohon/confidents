export default function TrustBar() {
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

  return (
    <section className="bg-brand-light py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">
          Trusted by all major insurance providers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {insurers.map((name) => (
            <span
              key={name}
              className="text-gray-400 font-bold text-lg md:text-xl tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
