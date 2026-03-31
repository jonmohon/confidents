import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Comparison from "@/components/Comparison";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "PDR vs Body Shop | Confidents Paintless Dent Removal",
  description:
    "Compare paintless dent removal vs traditional body shop repair. PDR is faster, cheaper, preserves your factory paint, and maintains your vehicle value.",
};

const costScenarios = [
  {
    scenario: "Small door ding (quarter-sized)",
    pdrCost: "$75 - $125",
    bodyCost: "$350 - $500",
    savings: "Up to 75%",
  },
  {
    scenario: "Multiple hail dents (25-50 dents)",
    pdrCost: "$1,500 - $2,500",
    bodyCost: "$4,000 - $8,000",
    savings: "Up to 70%",
  },
  {
    scenario: "Large crease dent on fender",
    pdrCost: "$200 - $400",
    bodyCost: "$800 - $1,500",
    savings: "Up to 65%",
  },
  {
    scenario: "Parking lot damage (3-5 dents)",
    pdrCost: "$250 - $500",
    bodyCost: "$1,200 - $2,500",
    savings: "Up to 70%",
  },
];

const idealDamageTypes = [
  {
    title: "Hail Damage",
    description:
      "Hail storms are one of the most common reasons vehicle owners seek PDR. Because hail dents are typically shallow and spread across large panels without breaking the paint, PDR is the ideal solution. Technicians can work through dozens of dents per panel, restoring the surface to factory condition without any repainting.",
  },
  {
    title: "Door Dings",
    description:
      "Those frustrating dents left by careless drivers in parking lots are a perfect candidate for PDR. Most door dings are small, shallow, and located on flat or gently curved panels. A skilled technician can remove them in under an hour, often while you wait.",
  },
  {
    title: "Minor Creases",
    description:
      "Shallow creases caused by shopping carts, minor bumps, or debris can often be addressed with PDR, provided the paint surface remains intact. Longer creases may take more time but can still be resolved without body filler or repainting.",
  },
  {
    title: "Bodyline Dents",
    description:
      "Dents that fall along a vehicle's bodyline or character line require special expertise, but a trained PDR technician can reshape these areas with precision. Restoring the sharp edges of a bodyline is one of the hallmarks of a truly skilled practitioner.",
  },
];

const limitations = [
  {
    title: "Paint Damage or Chipping",
    description:
      "If the impact has cracked, chipped, or broken through the paint surface, PDR alone cannot address the cosmetic issue. The dent itself may be removable, but the paint will still need professional attention from a body shop.",
  },
  {
    title: "Extremely Sharp or Deep Dents",
    description:
      "When metal has been stretched significantly beyond its original shape -- for example, from a high-speed impact -- the panel may not return to its original form through manipulation alone. In these cases, conventional repair with filler and paint is the more appropriate route.",
  },
  {
    title: "Panel Edge Damage",
    description:
      "Dents located on the extreme edges of panels, where metal is folded over, can be very difficult to access with PDR tools. Depending on the location and severity, traditional methods may produce a better result.",
  },
  {
    title: "Previous Body Work",
    description:
      "If a panel has already been filled with body filler or repainted, PDR may not be effective. The filler can crack during the repair process, and the underlying structure may not respond predictably to the controlled pressure PDR requires.",
  },
];

const envBenefits = [
  {
    title: "Zero Chemical Emissions",
    description:
      "Traditional body work relies on primers, paints, clear coats, and solvents that release volatile organic compounds (VOCs) into the atmosphere. PDR eliminates the need for any chemical application, producing zero harmful emissions during the repair process.",
  },
  {
    title: "No Material Waste",
    description:
      "Body shops generate waste from sanding dust, used sandpaper, paint residue, masking materials, and body filler. PDR produces virtually no waste. The only materials involved are the technician's tools, which are reused indefinitely.",
  },
  {
    title: "Reduced Energy Consumption",
    description:
      "Paint booths, heat lamps, and sanding equipment all consume significant energy. A PDR repair uses only hand tools and specialized lighting, drawing a fraction of the energy required by a traditional repair facility.",
  },
  {
    title: "Fewer Replacement Parts",
    description:
      "Traditional repair sometimes involves replacing entire panels, which means manufacturing, shipping, and disposing of parts. PDR preserves the original panel, reducing the demand for new parts and the environmental cost of their production and transportation.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <PageHero
        label="The Smart Choice"
        title="PDR vs. Body Shop"
        description="See why paintless dent removal is the smarter, faster, and more affordable choice for dent repair."
      />

      {/* Existing Comparison Table */}
      <Comparison />

      {/* Understanding PDR Section */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                The Science Behind It
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                Understanding Paintless Dent Removal
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Paintless dent removal is a highly specialized technique that
                restores a vehicle's body panels to their original shape without
                the need for sanding, body filler, or repainting. The process
                works by carefully manipulating the metal from behind the damaged
                panel using precision-engineered steel rods and specialized
                leverage tools. A trained technician applies controlled pressure
                at exact points on the back side of the dent, gradually coaxing
                the metal back to its factory contour. This requires an intimate
                understanding of how automotive sheet metal behaves under stress,
                including concepts like metal memory, elastic deformation, and
                yield points.
              </p>
              <p>
                The key principle behind PDR is that modern automotive paint --
                particularly the flexible clear coat finishes used since the
                early 1990s -- can withstand a remarkable degree of deformation
                without cracking or flaking. When a dent occurs, the paint
                stretches with the metal. Because the finish remains intact, a
                skilled technician can reverse the damage by working the metal
                back into position without ever compromising the factory coating.
                This is a critical distinction from traditional body work, where
                the repair process itself damages the original paint, requiring a
                full repaint of the affected area.
              </p>
              <p>
                PDR technicians typically train for years before handling complex
                repairs. The work demands exceptional hand-eye coordination, an
                understanding of reflection and light patterns for reading the
                panel surface, and the patience to make incremental adjustments
                measured in fractions of a millimeter. At Confidents, our
                technicians bring thousands of hours of hands-on experience to
                every repair, ensuring that the finished result is
                indistinguishable from the original factory surface.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* When PDR Works Best */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Ideal Scenarios
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                When PDR Works Best
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Paintless dent removal is remarkably versatile, but it truly
                excels in certain types of damage. Here are the scenarios where
                PDR delivers the best results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {idealDamageTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 h-full">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* When Traditional Body Work is Needed */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Honest Assessment
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                When Traditional Body Work is Needed
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                We believe in transparency. While PDR handles the vast majority
                of dent repairs, there are situations where traditional body shop
                work is the better path. We will always give you an honest
                assessment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {limitations.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Real Savings
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Cost Comparison
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                PDR consistently costs a fraction of what traditional body shop
                repairs charge. Below are typical cost ranges based on common
                repair scenarios in the Denver metro area.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Table header */}
              <div className="grid grid-cols-4 text-sm sm:text-base font-bold">
                <div className="p-4 sm:p-6 bg-brand-dark text-gray-400">
                  Damage Type
                </div>
                <div className="p-4 sm:p-6 text-center bg-brand-orange text-white">
                  PDR Cost
                </div>
                <div className="p-4 sm:p-6 text-center bg-brand-dark text-gray-400">
                  Body Shop Cost
                </div>
                <div className="p-4 sm:p-6 text-center bg-brand-dark text-gray-400">
                  Your Savings
                </div>
              </div>

              {costScenarios.map((row, i) => (
                <div
                  key={row.scenario}
                  className={`grid grid-cols-4 text-sm ${
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-white/[0.04]"
                  } border-t border-white/5`}
                >
                  <div className="p-4 sm:p-5 font-semibold text-gray-300">
                    {row.scenario}
                  </div>
                  <div className="p-4 sm:p-5 text-center text-emerald-400 font-medium">
                    {row.pdrCost}
                  </div>
                  <div className="p-4 sm:p-5 text-center text-gray-500">
                    {row.bodyCost}
                  </div>
                  <div className="p-4 sm:p-5 text-center text-brand-orange font-bold">
                    {row.savings}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-gray-500 text-sm mt-6 text-center">
              Costs are approximate and vary depending on the number, size, and
              location of dents. Contact us for a free, no-obligation estimate
              specific to your vehicle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Better for the Planet
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Environmental Benefits of PDR
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Choosing paintless dent removal is not only better for your
                wallet and your vehicle -- it is significantly better for the
                environment. Traditional auto body repair is a resource-intensive
                process with a measurable ecological footprint.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {envBenefits.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-emerald-400"
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
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Our Work
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Vehicles We Protect
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                From daily drivers to high-end luxury vehicles, we treat every
                car with the same level of precision and care.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ScrollReveal delay={0}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/car-corvette.jpg"
                  alt="Corvette with flawless finish after PDR"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/car-luxury.jpg"
                  alt="Luxury vehicle restored with paintless dent removal"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/car-dark.jpg"
                  alt="Dark vehicle showing perfect panel contours after repair"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/car-closeup.jpg"
                  alt="Close-up detail of paint surface preserved by PDR"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/car-red.jpg"
                  alt="Red vehicle with dent-free body panels"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative">
                <Image
                  src="/hail-storm.jpg"
                  alt="Hail storm damage that PDR can repair"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-48 bg-brand-orange/8 blur-[100px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Get a Free Estimate Today
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are dealing with hail damage, parking lot dings, or
              any other dents, we will give you an honest assessment and a
              transparent quote. No pressure, no hidden fees. Just expert
              paintless dent removal from technicians who take pride in their
              craft.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange text-white font-bold text-lg hover:brightness-110 transition shadow-lg shadow-brand-orange/25"
              >
                Request a Free Quote
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
                href="tel:+17205551234"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition"
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
                Call Us Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
