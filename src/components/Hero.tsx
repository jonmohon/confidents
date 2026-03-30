import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #E8860C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating logo watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <Image
          src="/logo.png"
          alt=""
          width={900}
          height={400}
          className="w-[900px] h-auto"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-sm font-semibold">
                Serving the Denver Metro Area
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Denver&apos;s{" "}
              <span className="text-brand-orange">#1 Choice</span> for Paintless
              Dent Removal
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Expert dent repair that preserves your factory finish. No
              repainting. No filler. No CARFAX report. Just flawless results
              backed by a lifetime warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-brand-orange/30 text-center"
              >
                Get Your Free Estimate
              </a>
              <a
                href="tel:+17205551234"
                className="border-2 border-white/20 hover:border-brand-orange text-white font-bold text-lg px-8 py-4 rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (720) 555-1234
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-black text-brand-orange">
                  15+
                </div>
                <div className="text-sm text-white/50">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-orange">
                  5,000+
                </div>
                <div className="text-sm text-white/50">Dents Repaired</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-orange">
                  5.0
                </div>
                <div className="text-sm text-white/50">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Right: Estimate Form */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 orange-glow">
            <h2 className="text-2xl font-bold text-white mb-2">
              Schedule a Free Inspection
            </h2>
            <p className="text-white/60 mb-6 text-sm">
              We&apos;ll come to you. Home, office, or wherever your vehicle is.
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                />
              </div>
              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white/40 focus:outline-none focus:border-brand-orange transition-colors">
                  <option value="">Type of Damage</option>
                  <option value="door-ding">Door Ding</option>
                  <option value="hail">Hail Damage</option>
                  <option value="crease">Body Crease</option>
                  <option value="large-dent">Large Dent</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about the damage (optional)"
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-brand-orange/30"
              >
                Get My Free Estimate
              </button>
              <p className="text-white/30 text-xs text-center">
                We typically respond within 1 hour during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
