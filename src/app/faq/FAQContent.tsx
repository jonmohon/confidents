"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ───── Quick Answers Data ───── */
const quickAnswers = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "How Much Does It Cost?",
    answer:
      "Small door dings start at $75 to $150. Hail damage pricing varies by severity. Many hail repairs are covered by insurance with $0 out of pocket.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "How Long Does It Take?",
    answer:
      "Most door dings are fixed in 1 to 3 hours. Hail damage typically takes 1 to 3 days -- compared to weeks at a traditional body shop.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Is There a Warranty?",
    answer:
      "Every repair comes with a lifetime warranty. If you are ever unsatisfied with the result, we will make it right -- guaranteed.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Do You Come to Me?",
    answer:
      "Yes. We offer mobile PDR service throughout the Denver Metro area and Colorado Springs. We come to your home, office, or dealership.",
  },
];

/* ───── Hail Damage FAQ Data ───── */
const hailFaqs = [
  {
    q: "How do I know if my vehicle has hail damage?",
    a: "Hail damage often appears as small, shallow dents across horizontal panels like the hood, roof, and trunk. In some cases the dents are hard to see with the naked eye. We offer free hail inspections using professional LED lighting that reveals every dent, so you get a complete picture before any work begins.",
  },
  {
    q: "Can PDR fix all types of hail damage?",
    a: "PDR is effective for the vast majority of hail damage -- roughly 90 percent of hail-damaged vehicles can be fully repaired with paintless dent removal. In rare cases where hail has cracked or chipped the paint, or where panels are severely creased, traditional body work may be needed for those specific areas. We will always give you an honest assessment during the free inspection.",
  },
  {
    q: "How soon after a hail storm should I get my car repaired?",
    a: "We recommend scheduling a free inspection as soon as possible after a hail event. Insurance claims have filing deadlines, and repair shops fill up fast after major storms. Getting ahead of the rush means faster scheduling and ensures your claim is filed within the required window.",
  },
  {
    q: "Will hail damage affect my car's resale value?",
    a: "Unrepaired hail damage can significantly reduce your vehicle's trade-in or resale value. The good news: PDR restores the panels to factory condition without repainting, so the repair will not show up on a CARFAX report. Your vehicle retains its full value as if the damage never happened.",
  },
  {
    q: "What size hail causes damage to vehicles?",
    a: "Hail as small as one inch in diameter (about the size of a quarter) can cause dents on most vehicles. Larger hail -- golf ball size and above -- can cause significant damage including cracked windshields. Colorado is one of the most hail-prone states in the country, so it is a matter of when, not if.",
  },
  {
    q: "Do you handle hail damage for fleets and dealerships?",
    a: "Absolutely. We work with dealerships, rental car companies, and corporate fleets across the Front Range. Our team can process high-volume hail repairs efficiently while maintaining the same quality and warranty we offer every individual customer.",
  },
];

/* ───── Insurance FAQ Data ───── */
const insuranceFaqs = [
  {
    q: "Will filing a hail claim raise my insurance rates?",
    a: "In Colorado, hail damage is classified as a comprehensive claim -- not a collision claim. Most insurance companies do not raise your rates for comprehensive claims because the event is considered an act of nature beyond your control. That said, policies vary, so we recommend reviewing your specific policy or asking your agent.",
  },
  {
    q: "Do I need to get multiple estimates for my insurance company?",
    a: "Most insurance providers do not require multiple estimates. Typically, your insurer will send an adjuster or use a preferred shop estimate. We work directly with all major insurance companies and can handle the entire process, including supplementing the claim if the adjuster's initial estimate misses damage.",
  },
  {
    q: "What if my insurance estimate seems too low?",
    a: "Insurance adjusters sometimes miss dents or underestimate the scope of repair. This is common. We routinely file supplements -- additional documentation with photos and measurements -- to ensure the full extent of damage is covered. You should never have to pay out of pocket for damage your policy covers.",
  },
  {
    q: "Do I have to use the shop my insurance recommends?",
    a: "No. In Colorado, you have the legal right to choose any repair shop you want. Your insurance company cannot require you to use a specific shop. We welcome customers from all insurance providers and work seamlessly with their claims process.",
  },
  {
    q: "Will I have to pay my deductible?",
    a: "Your comprehensive deductible will apply to hail damage claims. The amount depends on your policy -- common deductibles are $250, $500, or $1,000. Everything above the deductible is covered by your insurance. In many cases, the repair cost far exceeds the deductible, making it well worth filing the claim.",
  },
];

/* ───── Accordion Component ───── */
function AccordionSection({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
          >
            <span className="font-bold text-white pr-4 text-sm sm:text-base">
              {item.q}
            </span>
            <svg
              className={`w-5 h-5 flex-shrink-0 text-brand-orange transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm border-t border-white/5 pt-4">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───── Exported Sections ───── */
export function QuickAnswers() {
  return (
    <section className="relative py-20 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Quick Answers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAnswers.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-brand-orange/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 ring-1 ring-brand-orange/20 flex items-center justify-center text-brand-orange mb-5 group-hover:bg-brand-orange/20 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HailDamageFAQ() {
  return (
    <section className="relative py-24 bg-brand-surface border-t border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-suv-multi-led.webp"
                alt="SUV surrounded by LED reflection boards for hail damage assessment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <div>
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Hail Damage
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Hail Repair FAQ
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Colorado sees more hail storms than almost any other state.
                Here are the questions we hear most after a storm rolls through.
              </p>
            </ScrollReveal>
            <AccordionSection items={hailFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsuranceFAQ() {
  return (
    <section className="relative py-24 bg-brand-dark">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Accordion */}
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Insurance
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Insurance Coverage FAQ
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Navigating insurance claims can feel overwhelming. We handle the
                process from start to finish so you do not have to.
              </p>
            </ScrollReveal>
            <AccordionSection items={insuranceFaqs} />
          </div>

          {/* Image */}
          <ScrollReveal className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-luxury-sedan.webp"
                alt="Pristine luxury sedan after professional PDR repair"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function StillHaveQuestions() {
  return (
    <section className="relative py-24 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                We Are Here to Help
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                We understand that every vehicle and every situation is different.
                If you did not find the answer you were looking for, reach out
                directly. Our team is happy to walk you through the process, give
                you a free estimate, or answer anything else on your mind.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 flex-shrink-0 group-hover:bg-brand-orange/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Call or text</p>
                    <a
                      href="tel:+17205551234"
                      className="text-brand-orange font-semibold text-lg hover:text-brand-amber transition-colors"
                    >
                      (720) 555-1234
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 flex-shrink-0 group-hover:bg-brand-orange/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-0.5">Email us</p>
                    <a
                      href="mailto:info@confidentspdr.com"
                      className="text-brand-orange font-semibold hover:text-brand-amber transition-colors"
                    >
                      info@confidentspdr.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-bmw-led-assess.webp"
                alt="PDR technician assessing vehicle with LED reflection board"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="relative py-24 bg-brand-dark overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-orange/8 blur-[120px] rounded-full" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
            Ready to Get Started?
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Get a Free Estimate Today
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it is a single door ding or an entire vehicle covered in hail
            damage, we have you covered. Contact us for a free inspection and
            estimate -- no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.3)]"
            >
              Get Your Free Estimate
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+17205551234"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (720) 555-1234
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
