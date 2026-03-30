import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                Free Estimate
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Ready to get your vehicle looking like new? Contact us today for
                a free, no-obligation estimate. We come to you anywhere in the
                Denver Metro area or Colorado Springs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 flex-shrink-0 group-hover:bg-brand-orange/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">Call or Text</h3>
                    <a href="tel:+17205551234" className="text-brand-orange font-semibold text-lg hover:text-brand-amber transition-colors">
                      (720) 555-1234
                    </a>
                    <p className="text-xs text-gray-600 mt-1">
                      Mon-Sat: 7am - 7pm | Sun: By appointment
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 flex-shrink-0 group-hover:bg-brand-orange/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">Email</h3>
                    <a href="mailto:info@confidentspdr.com" className="text-brand-orange font-semibold hover:text-brand-amber transition-colors">
                      info@confidentspdr.com
                    </a>
                    <p className="text-xs text-gray-600 mt-1">
                      We respond within 1 hour during business hours
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 flex-shrink-0 group-hover:bg-brand-orange/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-sm">Service Area</h3>
                    <p className="text-gray-400 text-sm">
                      Denver, Castle Rock, Littleton, Parker, Aurora, Lone Tree,
                      Colorado Springs &amp; the SW Denver Metro area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
              <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
                  />
                  <select className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm">
                    <option value="">Type of Damage</option>
                    <option value="door-ding">Door Ding</option>
                    <option value="hail">Hail Damage</option>
                    <option value="crease">Body Crease</option>
                    <option value="large-dent">Large Dent</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Vehicle Year, Make & Model"
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
                  />
                  <textarea
                    placeholder="Describe the damage..."
                    rows={4}
                    className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all resize-none text-sm"
                  />
                  <button
                    type="submit"
                    className="btn-shine w-full bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
                  >
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
