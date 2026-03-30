import Image from "next/image";

const serviceAreas = [
  "Denver",
  "Castle Rock",
  "Littleton",
  "Parker",
  "Aurora",
  "Lone Tree",
  "Colorado Springs",
  "Southwest Denver Metro",
];

export default function About() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              About <span className="text-brand-orange">Confidents</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Confidents Paintless Dent Removal is a team of certified PDR
              specialists serving the Denver Metro area and Colorado Springs.
              With over 15 years of experience and thousands of successful
              repairs, we&apos;ve built our reputation on precision, integrity,
              and outstanding customer service.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              We believe every vehicle deserves to look its best — and every
              customer deserves an honest, hassle-free experience. That&apos;s
              why we come to you, work directly with your insurance, and back
              every repair with a lifetime warranty.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="bg-white/5 border border-white/10 text-white/70 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Logo + Stats */}
          <div className="flex flex-col items-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 w-full max-w-md">
              <div className="flex justify-center mb-8">
                <Image
                  src="/logo.png"
                  alt="Confidents PDR"
                  width={300}
                  height={120}
                  className="w-64 h-auto"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-orange">
                    15+
                  </div>
                  <div className="text-white/50 text-sm">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-orange">
                    5,000+
                  </div>
                  <div className="text-white/50 text-sm">Dents Fixed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-orange">
                    100%
                  </div>
                  <div className="text-white/50 text-sm">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-brand-orange">
                    5.0
                  </div>
                  <div className="text-white/50 text-sm">Google Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
