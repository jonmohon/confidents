import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | Confidents Paintless Dent Removal",
  description:
    "Get a free estimate for paintless dent removal. Contact us by phone, email, or form. We serve Castle Rock, Parker, Highlands Ranch, Lone Tree, and Castle Pines.",
};

const serviceAreas = [
  { name: "Castle Rock", href: "/areas-we-serve/castle-rock" },
  { name: "Parker", href: "/areas-we-serve/parker" },
  { name: "Highlands Ranch", href: "/areas-we-serve/highlands-ranch" },
  { name: "Lone Tree", href: "/areas-we-serve/lone-tree" },
  { name: "Castle Pines", href: "/areas-we-serve/castle-pines" },
];

const trustItems = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Fully Insured",
    description: "Complete liability coverage for your peace of mind on every repair.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Certified Technicians",
    description: "Factory-trained PDR specialists with 15+ years of hands-on experience.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.853m0 0a6.023 6.023 0 01-2.77-.853" />
      </svg>
    ),
    title: "Lifetime Warranty",
    description: "Every repair backed by our lifetime warranty. We stand behind our work.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Free Estimates",
    description: "No-obligation quotes with transparent, upfront pricing. No hidden fees.",
  },
];

const timelineSteps = [
  {
    step: "1",
    title: "Same-Day Response",
    description: "We review your submission and respond within hours -- typically the same business day.",
  },
  {
    step: "2",
    title: "Schedule an Inspection",
    description: "We arrange a convenient time to inspect your vehicle in person and provide an exact quote.",
  },
  {
    step: "3",
    title: "Get Your Quote",
    description: "Receive a detailed, no-obligation estimate. We explain every aspect of the repair process.",
  },
  {
    step: "4",
    title: "Repair Day",
    description: "Most PDR repairs are completed in a single visit. We come to you or you bring it to us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Free Estimate"
        description="Ready to get your vehicle looking like new? Contact us today for a free, no-obligation estimate."
      />

      {/* Contact Form + Business Hours */}
      <section className="relative bg-brand-dark py-20">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form -- spans 2 columns */}
            <div className="lg:col-span-2">
              <Contact />
            </div>

            {/* Business Hours + Quick Contact Card */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="rounded-2xl border border-white/10 bg-brand-surface p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
                  <div className="space-y-3">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                        <span className="text-gray-400 text-sm">{item.day}</span>
                        <span className="text-white font-semibold text-sm">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Emergency and after-hours service available for hail damage and fleet clients. Call us directly for urgent requests.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="rounded-2xl border border-white/10 bg-brand-surface p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+13033046022" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                        <p className="text-white font-semibold group-hover:text-brand-orange transition-colors">(303) 304-6022</p>
                      </div>
                    </a>
                    <a href="mailto:info@confidentspdr.com" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                        <p className="text-white font-semibold group-hover:text-brand-orange transition-colors">info@confidentspdr.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Timeline */}
      <section className="relative bg-brand-surface py-20">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Our Process
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                What Happens Next
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                From the moment you reach out, we make getting your dents repaired simple and stress-free.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="relative rounded-2xl border border-white/10 bg-brand-dark p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mb-5">
                    <span className="text-brand-orange font-black text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  {i < timelineSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-14 -right-4 text-white/20">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators + Car Image */}
      <section className="relative bg-brand-dark py-20 overflow-hidden">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Why Choose Us
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 tracking-tight">
                  Trusted by Thousands of Colorado Drivers
                </h2>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {trustItems.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 75}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal delay={150}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/pdr-mobile-service.webp"
                  alt="PDR technician performing mobile dent repair service on-site"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Factory-Quality Results</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Our PDR techniques preserve your original paint and factory finish.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Emergency / Urgent Repair Section */}
      <section className="relative bg-brand-surface py-16">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 to-transparent p-8 sm:p-12">
              <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      Hail Damage or Urgent Repair?
                    </h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed max-w-2xl mb-3">
                    Colorado hail season does not wait -- and neither do we. If your vehicle has been
                    caught in a storm or suffered sudden dent damage, contact us immediately. We offer
                    priority scheduling for hail damage claims and can work directly with your insurance
                    company to streamline the process.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Priority scheduling for storm damage
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Direct insurance billing and claims assistance
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      After-hours emergency availability
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Fleet and dealer rapid-response service
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+13033046022"
                    className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Now
                  </a>
                  <span className="text-center text-xs text-gray-500">Available 7 days for emergencies</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative bg-brand-dark py-20">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Where We Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Service Areas
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We provide mobile paintless dent removal across the Douglas County area. If you do not see your area listed, contact us -- we likely cover it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-brand-surface px-5 py-4 hover:border-brand-orange/30 hover:bg-brand-orange/5 transition-all"
                >
                  <svg className="w-4 h-4 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-white font-semibold text-sm group-hover:text-brand-orange transition-colors">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm">
                Do not see your city?{" "}
                <a href="tel:+13033046022" className="text-brand-orange hover:text-brand-amber font-semibold transition-colors">
                  Give us a call
                </a>{" "}
                -- we serve the entire Front Range corridor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA with hail image */}
      <section className="relative bg-brand-surface py-20">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/pdr-hailstorm-scene.webp"
                  alt="Colorado hailstorm scene showing urgency of prompt dent repair"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Do Not Wait
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                  The Sooner You Act, the Better Your Results
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Dent damage left untreated can lead to paint cracking, rust, and decreased resale value. Paintless dent removal works best on fresh damage where the paint surface is still intact. Contact us today for an assessment before minor damage becomes a major problem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    onClick={undefined}
                    className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-colors"
                  >
                    Get Your Free Estimate
                  </a>
                  <a
                    href="tel:+13033046022"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-4 rounded-xl hover:border-brand-orange/50 hover:text-brand-orange transition-colors"
                  >
                    Call (303) 304-6022
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
