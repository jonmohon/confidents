import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/pdr-inspection.webp"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/30" />

      {/* Grain texture */}
      <div className="grain absolute inset-0" />

      {/* Subtle orange glow accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-brand-orange text-sm font-semibold">
                Serving the Douglas County Area
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Flawless Finish.
              <span className="block bg-gradient-to-r from-brand-orange to-brand-amber bg-clip-text text-transparent mt-2">
                No Paint. No Filler.
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Expert paintless dent removal that preserves your factory finish.
              Same-day service backed by a lifetime warranty — saving you time
              and thousands over traditional body shops.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="btn-shine bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 text-center active:scale-[0.98]"
              >
                Get Your Free Estimate
              </a>
              <a
                href="tel:+13033046022"
                className="border border-white/20 hover:border-brand-orange/50 hover:bg-white/5 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (303) 304-6022
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "15+", label: "Years Experience" },
                { val: "5,000+", label: "Dents Repaired" },
                { val: "5.0★", label: "Google Rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-brand-orange">{s.val}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Estimate Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/10 blur-3xl rounded-3xl" />
            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Schedule a Free Inspection
              </h2>
              <p className="text-gray-400 mb-6 text-sm">
                We&apos;ll come to you. Home, office, or wherever your vehicle is.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all"
                />
                <select className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all">
                  <option value="">Type of Damage</option>
                  <option value="door-ding">Door Ding</option>
                  <option value="hail">Hail Damage</option>
                  <option value="crease">Body Crease</option>
                  <option value="large-dent">Large Dent</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Tell us about the damage (optional)"
                  rows={3}
                  className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 focus:bg-white/[0.08] transition-all resize-none"
                />
                <button
                  type="submit"
                  className="btn-shine w-full bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
                >
                  Get My Free Estimate
                </button>
                <p className="text-gray-600 text-xs text-center">
                  We typically respond within 1 hour during business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
