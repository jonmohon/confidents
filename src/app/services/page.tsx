import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | Confidents Paintless Dent Removal",
  description:
    "Professional paintless dent removal services including door ding repair, hail damage repair, large dent repair, and body crease repair in the Denver Metro area.",
};

const serviceDetails = [
  {
    id: "door-dings",
    title: "Door Ding Repair",
    subtitle: "Restore Your Panels to Factory Perfection",
    image: "/car-closeup.jpg",
    imageAlt: "Close-up view of a vehicle panel being repaired with paintless dent removal",
    reverse: false,
    paragraphs: [
      "Door dings are one of the most common types of vehicle damage, and they happen to everyone. Whether it occurred in a crowded parking lot, from a stray shopping cart, or from a careless driver swinging their door into yours, these small but noticeable dents can significantly diminish the appearance and resale value of your vehicle. At Confidents PDR, we specialize in removing door dings quickly and affordably, without the need for fillers, sanding, or repainting.",
      "Our technicians use specialized metal rods and proprietary tools to carefully massage the dent from behind the panel, restoring the metal to its original shape. Because no paint or body filler is involved, the repair is virtually undetectable, and your factory finish remains completely intact. Most door ding repairs can be completed in under an hour, meaning you can drop off your vehicle during lunch and pick it up the same day.",
      "We handle dings on every body panel, including doors, fenders, quarter panels, hoods, and trunk lids. Whether you drive a daily commuter, a luxury sedan, or a classic car, our process is gentle enough for any finish, including modern multi-stage paint and ceramic coatings.",
    ],
    bullets: [
      "Same-day repair for most door dings",
      "No fillers, sanding, or repainting required",
      "Factory paint finish preserved 100%",
      "Works on all body panels and paint types",
      "Maintains full vehicle resale value",
      "Lifetime warranty on all door ding repairs",
    ],
  },
  {
    id: "hail-damage",
    title: "Hail Damage Repair",
    subtitle: "Colorado's Trusted Hail Damage Specialists",
    image: "/hail-storm.jpg",
    imageAlt: "Hail storm damage on a vehicle requiring professional PDR repair",
    reverse: true,
    paragraphs: [
      "Colorado is one of the most hail-prone regions in the entire country. Each spring and summer, severe storms roll through the Denver Metro area, leaving thousands of vehicles with hundreds or even thousands of dents across their hoods, roofs, and trunk lids. Traditional body shop repairs for hail damage can cost thousands of dollars and take weeks to complete, often requiring extensive sanding, filling, and repainting that permanently alters your vehicle's factory finish.",
      "Paintless dent removal is the insurance-preferred method for hail damage repair, and for good reason. PDR is faster, more affordable, and produces a superior result compared to conventional body work. Our team has repaired hail damage on thousands of vehicles throughout the Front Range, and we work directly with all major insurance carriers to make the claims process as seamless as possible. We handle the estimate, the supplement, and all communications with your adjuster so you can focus on getting your vehicle back to normal.",
      "From light hail with scattered dents to catastrophic storms that leave your vehicle looking like a golf ball, we have the tools and experience to handle it all. Our shop is fully equipped with specialized lighting systems that allow us to see and access every dent, ensuring a thorough and complete repair every time.",
    ],
    bullets: [
      "Direct insurance billing with all major carriers",
      "Free hail damage inspections and estimates",
      "Complete claims assistance and supplement handling",
      "Repairs typically completed in 1 to 3 days",
      "No paint damage, no color-matching issues",
      "Rental car coordination available",
    ],
  },
  {
    id: "large-dents",
    title: "Large Dent Repair",
    subtitle: "Save Thousands Over Traditional Body Work",
    image: "/car-red.jpg",
    imageAlt: "Red vehicle with large dent repair completed using PDR techniques",
    reverse: false,
    paragraphs: [
      "Many vehicle owners assume that larger dents from collisions, fallen objects, or other significant impacts require a trip to a traditional body shop. In reality, a surprising number of large dents can be repaired with paintless dent removal, saving you a substantial amount of money while delivering a result that is often indistinguishable from the original factory condition. If the paint surface has not been cracked or chipped, PDR is almost always the best option.",
      "Our technicians are trained in advanced large-dent techniques that go beyond what most PDR shops can handle. Using a combination of specialized glue-pull methods, precision metal rods, and controlled leverage, we can reshape even severely deformed panels back to their original contour. This includes dents from minor fender benders, impacts from sports equipment, fallen tree branches, and other common scenarios that would traditionally require panel replacement.",
      "Choosing PDR for large dent repair not only saves you money on the repair itself, but it also preserves your vehicle's value by maintaining the original factory paint and avoiding the documented history of body work that can appear on vehicle history reports like Carfax. This distinction matters significantly when it comes time to sell or trade in your vehicle.",
    ],
    bullets: [
      "Saves 50% to 70% compared to body shop repairs",
      "No body filler, sanding, or repainting",
      "Preserves original factory paint and finish",
      "Avoids body work on vehicle history reports",
      "Advanced glue-pull and leverage techniques",
      "Free assessment to determine PDR eligibility",
    ],
  },
  {
    id: "body-creases",
    title: "Body Crease Repair",
    subtitle: "Advanced Techniques for the Toughest Dents",
    image: "/car-dark.jpg",
    imageAlt: "Dark vehicle showcasing body crease repair with paintless dent removal",
    reverse: true,
    paragraphs: [
      "Body creases are among the most challenging types of damage to repair without conventional body work. A crease occurs when an impact creates a sharp, linear indentation in the metal, often stretching across a significant portion of a panel. Unlike round dents that have a natural tendency to flex back into shape, creases involve metal that has been stretched and displaced along a line, requiring exceptional skill and patience to repair properly.",
      "At Confidents PDR, our technicians have invested years of training specifically in body crease repair techniques. Using ultra-fine-tipped tools and a methodical cross-checking process under specialized LED lighting, we work the metal back into alignment one small section at a time. This painstaking approach ensures that the final result is smooth, consistent, and free from the high spots or waviness that less experienced technicians might leave behind.",
      "We regularly repair creases caused by shopping carts, side-swipe incidents, garage door contact, and other common impacts. While not every crease is a candidate for PDR, we provide honest assessments upfront and will always let you know whether paintless dent removal will deliver the result you expect. When PDR is viable, the savings over traditional repair are significant, and the quality of the result speaks for itself.",
    ],
    bullets: [
      "Specialized fine-tipped precision tools",
      "LED cross-checking for flawless results",
      "Honest upfront assessment of repairability",
      "No filler, no paint, no compromise",
      "Experienced technicians with years of crease-specific training",
      "Results that are undetectable to the eye",
    ],
  },
];

const benefits = [
  {
    title: "Preserves Factory Paint",
    description:
      "Your vehicle's original factory paint is its best protection against rust and corrosion. PDR keeps it completely intact, unlike traditional methods that require sanding and repainting.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Faster Turnaround",
    description:
      "Most PDR repairs are completed in a single day. Traditional body work can keep your vehicle in the shop for a week or more, leaving you without reliable transportation.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Significantly Lower Cost",
    description:
      "Without the need for materials like body filler, primer, paint, and clear coat, PDR typically costs 50% to 70% less than conventional dent repair at a traditional body shop.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Process",
    description:
      "PDR produces zero chemical waste. No paint, no solvents, no volatile organic compounds. It is the most environmentally responsible way to repair dent damage on any vehicle.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Maintains Resale Value",
    description:
      "Vehicles with original factory paint consistently command higher resale prices. PDR ensures no body work appears on your vehicle's history report, protecting your investment.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Insurance Preferred",
    description:
      "Most major insurance companies prefer PDR because it is faster, less expensive, and produces a superior result. We work directly with your insurer to streamline the entire process.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Our Services"
        description="From minor door dings to severe hail damage, we have the expertise and tools to handle it all — without touching your factory paint."
      />

      {/* Existing Services Grid */}
      <Services />

      {/* Detailed Service Breakdowns */}
      <section className="relative py-24 bg-brand-surface">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                In-Depth
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Explore Each Service
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Every type of dent demands a different approach. Learn more about each of our
                specialized repair services and what to expect from the process.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {serviceDetails.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ScrollReveal delay={100}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                      service.reverse ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${service.reverse ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/10 rounded-full blur-2xl" />
                    </div>

                    {/* Content */}
                    <div
                      className={`${service.reverse ? "lg:order-1" : "lg:order-2"}`}
                    >
                      <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-2">
                        {service.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                        {service.title}
                      </h3>
                      <div className="space-y-4 mb-8">
                        {service.paragraphs.map((p, i) => (
                          <p key={i} className="text-gray-400 leading-relaxed">
                            {p}
                          </p>
                        ))}
                      </div>
                      <ul className="space-y-3">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5"
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
                            <span className="text-gray-300 text-sm">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PDR */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                The PDR Advantage
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Why Choose Paintless Dent Removal
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Paintless dent removal has revolutionized the auto body industry. Here is why
                more vehicle owners, dealerships, and insurance companies choose PDR over
                traditional body shop repairs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/[0.06] h-full">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 mb-5 transition-all duration-300 group-hover:bg-brand-orange/20 group-hover:shadow-lg group-hover:shadow-brand-orange/10">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 transition-colors duration-300 group-hover:text-brand-orange">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Services */}
      <section className="relative py-24 bg-brand-surface">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-2">
                  Commercial Solutions
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                  Fleet Services
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-gray-400 leading-relaxed">
                    Managing a fleet of vehicles means dealing with dents, dings, and hail damage on
                    a regular basis. Whether you operate a rental car company, a dealership lot, a
                    corporate fleet, or a delivery service, keeping your vehicles looking their best
                    is essential for maintaining your professional image and protecting your assets.
                    Confidents PDR offers dedicated fleet services designed to minimize downtime and
                    maximize the appearance and value of every vehicle in your fleet.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We offer flexible scheduling options including on-site service at your facility,
                    priority turnaround times, and volume-based pricing that can save your
                    organization thousands of dollars per year compared to traditional body shop
                    repairs. Our team can process multiple vehicles simultaneously, which means your
                    fleet stays on the road and generating revenue instead of sitting in a body shop
                    waiting for paint to dry.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    We currently serve auto dealerships, rental agencies, corporate fleets, and
                    municipal vehicle pools throughout the Denver Metro area and along the entire
                    Front Range. Contact us to set up a fleet account and start saving on your
                    vehicle maintenance costs today.
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Auto dealership lot maintenance",
                    "Rental car fleet repair",
                    "Corporate vehicle programs",
                    "On-site service available",
                    "Volume pricing discounts",
                    "Priority scheduling",
                    "Dedicated account management",
                    "Monthly maintenance contracts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors duration-300"
                >
                  Set Up a Fleet Account
                  <svg
                    className="w-5 h-5 transition-transform duration-300 hover:translate-x-1"
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
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/car-luxury.jpg"
                  alt="Luxury fleet vehicle maintained with professional paintless dent removal services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full-Width Image Banner */}
      <section className="relative h-[400px] sm:h-[500px]">
        <Image
          src="/car-road.jpg"
          alt="Vehicle driving on an open road after professional dent repair"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollReveal>
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Our Promise
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                  Your Vehicle Deserves the Best
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Every repair we perform comes with a lifetime warranty and our commitment to
                  perfection. We do not consider a job complete until you are completely satisfied
                  with the result.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-orange/8 blur-[100px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Ready to Get Started
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Get Your Free Estimate Today
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Whether you have a single door ding or a vehicle covered in hail damage, we are
              here to help. Contact us for a free, no-obligation estimate and see why thousands
              of Colorado vehicle owners trust Confidents PDR with their repairs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
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
                href="/gallery"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-orange/40 text-white font-bold px-8 py-4 rounded-xl transition-all hover:bg-white/[0.05]"
              >
                View Our Work
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
