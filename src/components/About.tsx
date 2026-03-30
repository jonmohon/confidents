import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const serviceAreas = [
  "Denver",
  "Castle Rock",
  "Littleton",
  "Parker",
  "Aurora",
  "Lone Tree",
  "Colorado Springs",
  "SW Denver Metro",
];

export default function About() {
  return (
    <section className="relative py-24 bg-brand-dark">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                About Confidents
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Confidents Paintless Dent Removal is a team of certified PDR
                specialists serving the Denver Metro area and Colorado Springs.
                With over 15 years of experience and thousands of successful
                repairs, we&apos;ve built our reputation on precision, integrity,
                and outstanding customer service.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We believe every vehicle deserves to look its best — and every
                customer deserves an honest, hassle-free experience. That&apos;s
                why we come to you, work directly with your insurance, and back
                every repair with a lifetime warranty.
              </p>

              <h3 className="text-lg font-bold text-white mb-4">
                Service Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="bg-white/[0.04] border border-white/10 text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:border-brand-orange/30 hover:text-brand-orange transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Logo + Stats */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
              <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-10 backdrop-blur-sm">
                <div className="flex justify-center mb-10">
                  <Image
                    src="/logo.png"
                    alt="Confidents PDR"
                    width={300}
                    height={120}
                    className="w-72 h-auto"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { val: "15+", label: "Years Experience" },
                    { val: "5,000+", label: "Dents Fixed" },
                    { val: "100%", label: "Satisfaction" },
                    { val: "5.0★", label: "Google Rating" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-black text-brand-orange">
                        {s.val}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
