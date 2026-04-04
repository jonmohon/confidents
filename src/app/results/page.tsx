import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Results | Confidents Paintless Dent Removal",
  description:
    "See real before and after results from our paintless dent removal repairs. Door dings, hail damage, large dents — all restored to factory condition.",
};

const featuredRepairs = [
  {
    image: "/pdr-suv-multi-led.webp",
    repairType: "Hail Damage Restoration",
    vehicle: "2024 Chevrolet Corvette Stingray",
    time: "4 hours",
    saved: "$3,800",
    description:
      "Over 60 hail impacts across the hood, roof, and rear quarters. Every dent removed without touching the factory paint.",
  },
  {
    image: "/pdr-luxury-sedan.webp",
    repairType: "Door Ding Removal",
    vehicle: "2023 Mercedes-Benz S-Class",
    time: "1.5 hours",
    saved: "$950",
    description:
      "Deep parking lot door ding on the passenger side. Restored to a flawless finish in under two hours.",
  },
  {
    image: "/pdr-red-crease-work.webp",
    repairType: "Body Crease Repair",
    vehicle: "2024 Porsche 911 Carrera",
    time: "2.5 hours",
    saved: "$1,400",
    description:
      "A sharp crease along the driver-side fender from a shopping cart impact. Massaged out with zero paint damage.",
  },
  {
    image: "/pdr-black-porsche.webp",
    repairType: "Large Dent Repair",
    vehicle: "2023 Audi RS7",
    time: "3 hours",
    saved: "$2,200",
    description:
      "Significant dent on the rear quarter panel from a minor collision. Full restoration with no body filler or repainting.",
  },
  {
    image: "/pdr-hail-dents-hood.webp",
    repairType: "Multi-Panel Hail Repair",
    vehicle: "2022 Ford Bronco",
    time: "5 hours",
    saved: "$4,100",
    description:
      "Severe hail storm damage across hood, roof, and trunk. Over 100 dents removed in a single session.",
  },
  {
    image: "/pdr-tesla-ding-fix.webp",
    repairType: "Precision Ding Removal",
    vehicle: "2024 Tesla Model Y",
    time: "45 minutes",
    saved: "$550",
    description:
      "Small but visible ding on a body line crease. Required precise technique to maintain the factory edge.",
  },
];

const stats = [
  { value: "5,000+", label: "Vehicles Repaired" },
  { value: "99.4%", label: "Customer Satisfaction" },
  { value: "$1,850", label: "Average Customer Savings" },
  { value: "2.5 hrs", label: "Average Repair Time" },
  { value: "15+", label: "Years of Experience" },
  { value: "100%", label: "Paint Preserved" },
];

const damageTypes = [
  {
    image: "/pdr-hailstorm-scene.webp",
    title: "Hail Damage",
    description:
      "From minor peppering to severe storms, we restore hail-damaged panels to factory condition without repainting.",
  },
  {
    image: "/pdr-door-ding-detail.webp",
    title: "Door Dings",
    description:
      "Parking lot dings and minor impacts removed cleanly, preserving your original finish and vehicle value.",
  },
  {
    image: "/pdr-large-dent-amber.webp",
    title: "Large Dents",
    description:
      "Shopping cart hits, minor collisions, and other impacts repaired without body filler or new paint.",
  },
  {
    image: "/pdr-body-crease-red.webp",
    title: "Body Line Creases",
    description:
      "Sharp creases along body lines require expert technique. We restore the factory edge with precision.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        label="Real Results"
        title="See the Difference"
        description="Every repair shown here is real work from our team. See the transformations for yourself."
      />

      {/* ── Gallery (existing component) ── */}
      <Gallery />

      {/* ── Featured Repairs ── */}
      <section className="relative py-24 bg-brand-surface">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Featured Repairs
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Precision That Speaks for Itself
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Browse a selection of recent repairs spanning hail restoration,
                door ding removal, and large dent work on high-end vehicles.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepairs.map((repair, i) => (
              <ScrollReveal key={repair.vehicle} delay={i * 80}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-brand-orange/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={repair.image}
                      alt={`${repair.repairType} on ${repair.vehicle}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-brand-orange/90 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {repair.repairType}
                      </span>
                      <p className="text-white font-bold text-lg leading-tight">
                        {repair.vehicle}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-400 text-sm mb-5 flex-1">
                      {repair.description}
                    </p>
                    <div className="flex gap-4">
                      <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/5 px-3 py-2 text-center">
                        <p className="text-[10px] text-gray-600 uppercase tracking-wider">
                          Time
                        </p>
                        <p className="font-semibold text-white text-sm">
                          {repair.time}
                        </p>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/5 px-3 py-2 text-center">
                        <p className="text-[10px] text-gray-600 uppercase tracking-wider">
                          Saved
                        </p>
                        <p className="font-semibold text-brand-orange text-sm">
                          {repair.saved}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Work in Numbers ── */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-64 bg-brand-orange/6 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                By the Numbers
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Our Work in Numbers
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                The results are more than visual. Here is what our track record
                looks like across thousands of repairs in the Denver metro area.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 60}>
                <div className="text-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-orange/30 transition-all duration-500">
                  <p className="text-3xl sm:text-4xl font-black text-brand-orange mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Types of Damage We Repair ── */}
      <section className="relative py-24 bg-brand-surface">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                What We Fix
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Types of Damage We Repair
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Paintless dent removal works on a wide range of damage types. If
                the paint is intact, there is a good chance we can fix it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {damageTypes.map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 100}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-brand-orange/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg group-hover:text-brand-orange transition-colors">
                      {type.title}
                    </h3>
                  </div>
                  <div className="p-5 flex-1">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Testimonial Callout ── */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 bg-brand-orange/8 blur-[100px] rounded-full" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <Image
                    src="/pdr-finishing.webp"
                    alt="PDR technician performing final quality inspection on vehicle"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <svg
                    className="w-10 h-10 text-brand-orange/40 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-white text-xl sm:text-2xl font-bold leading-relaxed mb-6">
                    I was quoted $3,200 at the body shop for hail damage. Confidents
                    did the same repair for $1,100 and it looks absolutely perfect.
                    You cannot tell there was ever any damage.
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold">Marcus T.</p>
                    <p className="text-gray-500 text-sm">
                      2023 Mercedes-Benz S-Class -- Denver, CO
                    </p>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-brand-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Additional mini-testimonials */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                quote:
                  "Fast, affordable, and the results are incredible. My truck looks brand new after the hail storm.",
                name: "Sarah K.",
                vehicle: "2022 Ford F-150",
              },
              {
                quote:
                  "The door dings from my apartment parking garage are completely gone. Should have done this years ago.",
                name: "David L.",
                vehicle: "2024 Tesla Model 3",
              },
              {
                quote:
                  "Insurance covered most of it, but even the out-of-pocket was a fraction of body shop prices. Flawless work.",
                name: "Rachel M.",
                vehicle: "2023 Toyota RAV4",
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-orange/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-brand-orange"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-xs">
                      {testimonial.vehicle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-24 bg-brand-surface">
        <div className="grain absolute inset-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-orange/10 blur-[100px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Your Car Deserves Better Than a Body Shop
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Get a free estimate today. Most repairs are completed same-day and
              cost a fraction of traditional body work -- all while preserving
              your factory paint and vehicle value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
              >
                Get a Free Estimate
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-brand-orange/40 text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/[0.04] active:scale-[0.98]"
              >
                View Our Services
              </Link>
            </div>
          </ScrollReveal>

          {/* Trust badges row */}
          <ScrollReveal delay={200}>
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
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
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Free Estimates</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
