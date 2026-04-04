import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import ProcessFAQ from "./ProcessFAQ";

export const metadata: Metadata = {
  title: "How It Works | Confidents Paintless Dent Removal",
  description:
    "Learn how our paintless dent removal process works. From first contact to flawless finish — free inspection, insurance coordination, and expert repair.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Simple Process"
        title="How It Works"
        description="From first contact to flawless finish, our streamlined process makes dent repair effortless. Whether you have a single door ding or extensive hail damage, we handle everything so you can get back to driving."
      />
      <Process />

      {/* What to Expect */}
      <section className="relative bg-brand-dark py-24">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              What to Expect
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Your Repair, Start to Finish
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We believe that understanding what happens at every stage of your
              repair gives you confidence in the outcome. Here is a detailed
              look at each phase of the paintless dent removal process.
            </p>
          </div>

          {/* Stage 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">
                Stage 1
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                Free Inspection and Assessment
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Every repair begins with a thorough, no-obligation inspection of
                your vehicle. Our certified technicians examine each dent
                individually, noting its size, depth, location on the panel, and
                proximity to body lines or edges. This level of detail matters
                because a shallow dent on a flat panel behaves very differently
                than a crease near a door edge.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use specialized lighting rigs and reflection boards to reveal
                dents that are invisible under normal lighting conditions. This
                is especially important after hail storms, where dozens of small
                impacts can be hidden across the roof, hood, and trunk. Our
                inspection process typically identifies 20-30% more damage than
                what is visible to the untrained eye.
              </p>
              <p className="text-gray-400 leading-relaxed">
                After the inspection, we provide you with a detailed written
                estimate that breaks down the repair by panel. If you are going
                through insurance, this estimate is formatted to meet adjuster
                requirements so there are no delays in getting your claim
                approved.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/pdr-bmw-led-assess.webp"
                alt="PDR technician assessing vehicle panel with LED reflection board"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Stage 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/pdr-detail-work.webp"
                alt="PDR technician performing detailed repair work using reflection board"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">
                Stage 2
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                Panel Access and Setup
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Paintless dent removal works by applying precise pressure from
                behind the damaged panel to push the metal back into its
                original shape. To reach the backside of the dent, our
                technicians may need to remove interior trim panels, tail light
                assemblies, or access panels. Every component is carefully
                removed and cataloged so that reassembly is exact.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use a variety of specialized metal rods, ranging from pencil-thin
                to over three feet long, each designed to reach specific areas
                behind body panels. The right tool selection is critical. A roof
                dent requires a completely different approach than a fender dent.
                Our technicians have decades of combined experience choosing the
                optimal access point and tool for each unique situation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Before any metal work begins, we also set up our LED light
                boards. These specialized light sources create a striped
                reflection pattern on the vehicle surface, allowing the
                technician to see distortions in the panel with extreme
                precision. This visual feedback is what makes PDR so accurate.
              </p>
            </div>
          </div>

          {/* Stage 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">
                Stage 3
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                Precision Repair and Quality Check
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                The actual repair is where years of training and experience come
                together. Using the metal rod positioned behind the dent, the
                technician applies hundreds of small, controlled pushes to
                gradually raise the low spot back to the panel surface. This is
                not brute force. Each push is calculated, moving fractions of a
                millimeter at a time. Rushing this process or applying too much
                pressure can stretch the metal or create high spots.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                If a high spot does develop during the repair, we use a
                technique called knockdown, tapping the surface with a
                specialized blending hammer and knockdown tool to level it. The
                interplay between pushing from behind and tapping from the front
                is what allows us to achieve a perfectly flat panel.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Once the repair is complete, we perform a multi-angle quality
                inspection under our LED boards, checking from every direction
                to confirm the panel is restored to factory condition. We then
                reassemble all trim and components, and give your vehicle a
                final walkthrough with you to make sure you are completely
                satisfied before you drive away.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/pdr-hood-repair.webp"
                alt="PDR technician performing precision hood repair with specialized tools"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Process */}
      <section className="relative bg-brand-surface py-24">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Insurance Claims
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              We Handle the Insurance Process
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Dealing with insurance after hail damage or an accident should not
              add stress to your life. We manage the entire claims process from
              start to finish, and most of our customers pay zero out of pocket.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "File Your Claim",
                description:
                  "Contact your insurance company to open a claim, or let us do it for you. We work with every major carrier including State Farm, GEICO, Progressive, Allstate, USAA, and many more. We can walk you through the call if you have never filed a claim before.",
              },
              {
                step: "02",
                title: "Schedule the Adjuster",
                description:
                  "Your insurance company will send an adjuster to assess the damage. We coordinate directly with adjusters and can have them come to our shop or meet at your location. We make sure all damage is properly documented so nothing is missed on the estimate.",
              },
              {
                step: "03",
                title: "Supplement if Needed",
                description:
                  "Initial insurance estimates often undercount the number of dents. If we find additional damage during our detailed inspection, we file a supplement with your insurance company. We handle all the paperwork, photos, and follow-up calls until the full repair cost is approved.",
              },
              {
                step: "04",
                title: "Repair and Payment",
                description:
                  "Once approved, we complete the repair and bill your insurance directly. You only pay your deductible, if applicable. Many comprehensive claims for hail damage have a $500 or $1,000 deductible, and some policies waive it entirely for PDR repairs.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="text-brand-orange text-3xl font-black">
                  {item.step}
                </span>
                <h3 className="text-white font-bold text-lg mt-3 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-white font-bold text-xl mb-4">
              Important Insurance Details
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand-orange font-semibold mb-2">
                  Comprehensive vs. Collision Coverage
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Hail damage falls under your comprehensive coverage, not
                  collision. This is important because comprehensive claims
                  typically do not raise your premium, unlike at-fault collision
                  claims. If someone opens their car door into yours in a
                  parking lot, that is also comprehensive. We help you
                  understand which coverage applies to your specific situation.
                </p>
              </div>
              <div>
                <h4 className="text-brand-orange font-semibold mb-2">
                  Rental Car Coverage
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If your policy includes rental car coverage, your insurance
                  will provide a rental vehicle while your car is being repaired.
                  We can help you coordinate the rental pickup and return so
                  there is no gap in your transportation. For smaller repairs
                  that only take a few hours, we offer a comfortable waiting
                  area so a rental may not even be necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before Your Appointment */}
      <section className="relative bg-brand-dark py-24">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Be Prepared
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                Before Your Appointment
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                A little preparation goes a long way toward making your repair
                day smooth and efficient. Here is what we recommend having ready
                before you drop off your vehicle or before our mobile team
                arrives.
              </p>

              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Insurance Documentation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Have your claim number, insurance policy number, and the
                    name of your adjuster readily available. If your adjuster
                    has already written an estimate, bring a copy. This allows
                    us to cross-reference their findings with our inspection
                    and file any necessary supplements immediately.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Clean Your Vehicle
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A clean vehicle surface helps us perform the most accurate
                    inspection possible. Dirt, pollen, and road grime can
                    obscure small dents, especially on the roof and hood. A
                    basic wash is all that is needed. You do not need to wax or
                    detail the car.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Remove Personal Belongings
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We may need to access areas behind interior panels, in
                    the trunk, or under rear seats. Please remove valuables,
                    child car seats, and any loose items from the interior
                    and trunk. This speeds up the repair process and protects
                    your belongings.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-white font-bold text-lg mb-2">
                    Plan Your Transportation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    For minor dent repairs, your vehicle may be ready within a
                    few hours. For extensive hail damage, the repair could take
                    one to three days. We will give you a time estimate during
                    your initial consultation so you can plan accordingly.
                    If you need a rental vehicle through your insurance, we
                    recommend setting that up before your appointment date.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-8 md:pt-24">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/pdr-luxury-sedan.webp"
                  alt="Pristine luxury sedan in professional PDR shop"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-white font-bold text-lg mb-2">
                  Mobile Service Appointments
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  If you have scheduled a mobile repair at your home or
                  office, please make sure your vehicle is parked in an area
                  with good lighting and enough room for our technician to
                  work around the vehicle. A flat driveway or open parking
                  space is ideal. Covered or shaded areas work best since
                  direct sunlight can interfere with our LED reflection
                  boards. We bring all of our own equipment, so no power
                  outlets or water access is needed on your end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid — Tools and Work */}
      <section className="relative bg-brand-surface py-24">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Precision Tools, Expert Hands
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Paintless dent removal requires specialized equipment and
              thousands of hours of practice. Our technicians use
              professional-grade tools designed for the unique demands of PDR
              work on modern vehicle panels.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-tools-flatlay.webp"
                alt="Professional PDR tool collection laid out"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-under-hood.webp"
                alt="Technician working under vehicle hood with PDR rod"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-glue-pull.webp"
                alt="Close-up of glue-pull PDR technique"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] md:col-span-2">
              <Image
                src="/pdr-roof-hail-aerial.webp"
                alt="Aerial view of technician repairing hail damage on vehicle roof"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/pdr-sedan-wand-check.webp"
                alt="Technician inspecting dark sedan with LED wand"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">
            Our toolkit includes over 100 specialized rods, tips, and
            accessories. Each tool is selected based on the specific panel
            geometry, dent location, and access point available.
          </p>
        </div>
      </section>

      {/* Process Questions FAQ */}
      <section className="relative bg-brand-dark py-24">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Process Questions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Answers to the most frequent questions we receive about how
              paintless dent removal works and what you can expect.
            </p>
          </div>

          <ProcessFAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-brand-surface py-24">
        <div className="grain absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-orange/10 blur-[120px] rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you have a single door ding or an entire vehicle covered in
            hail damage, our team is ready to restore your car to factory
            condition. Contact us today for a free, no-obligation inspection and
            estimate. Most repairs are completed the same day, and we handle all
            insurance paperwork at no additional cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-bold rounded-full hover:bg-brand-amber transition-colors text-lg"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
