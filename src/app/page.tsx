import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueProps from "@/components/ValueProps";
import ScrollReveal from "@/components/ScrollReveal";

const servicePreview = [
  {
    title: "Door Ding Repair",
    desc: "Shopping carts, car doors, and minor impacts leave unsightly dings. We remove them without a trace.",
    image: "/pdr-light-assessment.webp",
    href: "/services",
  },
  {
    title: "Hail Damage Repair",
    desc: "Colorado hail storms can leave hundreds of dents. We restore your vehicle to pre-storm condition.",
    image: "/pdr-tap-down.webp",
    href: "/services",
  },
  {
    title: "Large Dent Repair",
    desc: "Even larger dents from collisions can often be repaired with PDR — saving you thousands.",
    image: "/pdr-slide-hammer.webp",
    href: "/services",
  },
];

const quickProcess = [
  { num: "01", title: "Contact Us", desc: "Call, text, or fill out our form for a quick quote." },
  { num: "02", title: "Free Inspection", desc: "We come to you with a detailed, no-obligation estimate." },
  { num: "03", title: "Expert Repair", desc: "Certified technicians restore your vehicle to factory condition." },
  { num: "04", title: "Drive Away Happy", desc: "Lifetime warranty. Factory paint intact. Zero hassle." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProps />

      {/* Image Gallery Strip */}
      <section className="relative bg-brand-dark py-4">
        <div className="flex gap-4 overflow-hidden">
          {["/pdr-hood-repair.webp", "/pdr-detail-work.webp", "/pdr-light-board.webp", "/pdr-finishing.webp", "/pdr-mobile-service.webp", "/pdr-inspection.webp"].map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden">
              <Image
                src={src}
                alt="Vehicle repair showcase"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Our Services
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From minor door dings to severe hail damage, our certified
                technicians handle it all — preserving your factory finish every time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePreview.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 150}>
                <Link href={s.href} className="block group h-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-brand-orange/30 transition-all duration-500 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange">
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
              >
                View All Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Process Overview */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Simple &amp; Fast
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                  How It Works
                </h2>
                <p className="text-gray-400 leading-relaxed mb-10">
                  Our streamlined process is designed to get your vehicle back to
                  perfect condition as quickly and painlessly as possible. Most
                  repairs are completed the same day — and we come to you.
                </p>

                <div className="space-y-6">
                  {quickProcess.map((step, i) => (
                    <div key={step.num} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center ring-1 ring-brand-orange/20 group-hover:bg-brand-orange/20 transition-all">
                        <span className="text-brand-orange font-black text-sm">{step.num}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{step.title}</h3>
                        <p className="text-gray-500 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href="/process"
                    className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors"
                  >
                    See detailed process
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src="/pdr-light-board.webp"
                    alt="PDR technician using light board for expert dent assessment"
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-lg rounded-xl px-5 py-4 border border-white/10">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Same-Day Repair</p>
                        <p className="text-gray-400 text-xs">Most repairs completed in 1-3 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison Teaser */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                The Smart Choice
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                PDR vs. Body Shop
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid sm:grid-cols-2 gap-8">
              {/* PDR Card */}
              <div className="rounded-2xl border-2 border-brand-orange/50 bg-brand-orange/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" />
                <div className="inline-flex items-center gap-2 bg-brand-orange/20 rounded-full px-4 py-1.5 mb-6">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-orange text-sm font-bold">Recommended</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Confidents PDR</h3>
                <ul className="space-y-3">
                  {[
                    "Same-day repair (1-3 hours)",
                    "Factory paint 100% preserved",
                    "50-70% less cost",
                    "Not reported on CARFAX",
                    "Vehicle value maintained",
                    "Lifetime warranty",
                    "Mobile — we come to you",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Body Shop Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div className="h-1 mb-6" />
                <div className="h-8 mb-6" />
                <h3 className="text-2xl font-black text-gray-500 mb-4">Traditional Body Shop</h3>
                <ul className="space-y-3">
                  {[
                    "5-14 days turnaround",
                    "Repainted (color mismatch risk)",
                    "Full price",
                    "Reported as body work",
                    "Decreased vehicle value",
                    "Limited warranty",
                    "Drop off for days/weeks",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-red-500/60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <Link
                href="/comparison"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors"
              >
                See the full comparison
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Car Image + About */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <Image
                    src="/pdr-finishing.webp"
                    alt="PDR technician performing final quality inspection on vehicle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Floating accent image */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-brand-dark shadow-2xl hidden md:block">
                  <Image
                    src="/pdr-detail-work.webp"
                    alt="Close-up PDR detail work"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  About Us
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                  Douglas County&apos;s Most Trusted PDR Team
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Confidents Paintless Dent Removal is a team of certified PDR
                  specialists serving the Douglas County area.
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

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { val: "15+", label: "Years Experience" },
                    { val: "5,000+", label: "Dents Fixed" },
                    { val: "100%", label: "Satisfaction" },
                    { val: "5.0", label: "Google Rating" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-3xl font-black text-brand-orange">{s.val}</div>
                      <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors"
                >
                  Read customer reviews
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Real Reviews
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Hear From Our Customers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                location: "Castle Rock, CO",
                text: "After a nasty hail storm, I thought my Q5 was done for. Confidents came to my house, handled everything with my insurance, and my car looked brand new.",
              },
              {
                name: "Marcus J.",
                location: "Littleton, CO",
                text: "Got a huge dent from a runaway shopping cart. I was quoted $1,800 at a body shop. Confidents fixed it in under 2 hours for a fraction of the cost.",
              },
              {
                name: "Emily & David R.",
                location: "Parker, CO",
                text: "We were so nervous about getting our Tesla fixed. Confidents was incredibly professional, knew exactly how to work with aluminum panels, and the result was flawless.",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150}>
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 h-full hover:border-white/20 transition-all duration-300">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-brand-orange">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-gray-600">{t.location}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 text-center">
              <Link
                href="/reviews"
                className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
              >
                Read All Reviews
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas Preview */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Local Service
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Areas We Serve
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We provide mobile paintless dent removal across the Douglas County
                area. We come to you — home, office, or
                anywhere your vehicle is parked.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { name: "Castle Rock", slug: "castle-rock" },
                { name: "Parker", slug: "parker" },
                { name: "Highlands Ranch", slug: "highlands-ranch" },
                { name: "Lone Tree", slug: "lone-tree" },
                { name: "Castle Pines", slug: "castle-pines" },
              ].map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas-we-serve/${area.slug}`}
                  className="bg-white/[0.04] border border-white/10 text-gray-400 px-6 py-3 rounded-full text-sm font-medium hover:border-brand-orange/30 hover:text-brand-orange hover:bg-brand-orange/5 transition-all"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="text-center">
              <Link
                href="/areas-we-serve"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors"
              >
                View all service areas
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Get Your Vehicle
              <span className="block bg-gradient-to-r from-brand-orange to-brand-amber bg-clip-text text-transparent mt-2">
                Looking Like New?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t live with dents. Get a free, no-obligation estimate today.
              We come to you, work with your insurance, and back every repair
              with a lifetime warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-shine bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+13033046022"
                className="border border-white/20 hover:border-brand-orange/50 hover:bg-white/5 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (303) 304-6022
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
