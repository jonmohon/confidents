import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Reviews | Confidents Paintless Dent Removal",
  description:
    "Read what our customers say about Confidents PDR. 5.0 Google rating with 100+ reviews across Denver, Castle Rock, Littleton, Parker, Aurora, and Colorado Springs.",
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-brand-amber"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const serviceReviews = [
  {
    category: "Hail Damage Repair",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    reviews: [
      {
        name: "Chris W.",
        vehicle: "2023 Toyota Camry",
        location: "Denver, CO",
        text: "The June hailstorm left over 60 dents on my hood and roof. Confidents handled the entire insurance claim and repaired every single dent. My adjuster was shocked at how perfect the car looked after. Zero out of pocket.",
      },
      {
        name: "Angela P.",
        vehicle: "2024 Hyundai Tucson",
        location: "Castle Rock, CO",
        text: "I was devastated after the storm hit Castle Rock. Multiple body shops quoted me weeks of wait time and rental cars. Confidents got my Tucson done in three days and dealt with State Farm directly. Flawless results.",
      },
      {
        name: "Dan & Lisa M.",
        vehicle: "2022 Subaru Outback",
        location: "Littleton, CO",
        text: "Both our vehicles got hammered by hail. Confidents repaired them both in the same week and coordinated everything with USAA. We saved thousands compared to traditional body shop estimates. Cannot recommend enough.",
      },
    ],
  },
  {
    category: "Door Dings and Parking Lot Dents",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.121l-3.87-3.87a3 3 0 00-2.122-.879H5.25A2.25 2.25 0 003 8.25v7.875c0 .621.504 1.125 1.125 1.125h2.25" />
      </svg>
    ),
    reviews: [
      {
        name: "Megan T.",
        vehicle: "2023 Mercedes GLC",
        location: "Lone Tree, CO",
        text: "Someone doored my Mercedes in the Cherry Creek mall parking garage. The dent was right on the body line. Confidents massaged it out perfectly — you genuinely cannot tell anything ever happened. Worth every dollar.",
      },
      {
        name: "Jason R.",
        vehicle: "2021 Honda Accord",
        location: "Aurora, CO",
        text: "Three dings on the driver side from my apartment parking lot. Confidents came to my office, fixed all three during my work day, and the car was ready by lunch. Incredibly convenient and the work was impeccable.",
      },
    ],
  },
  {
    category: "Luxury and Specialty Vehicles",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    reviews: [
      {
        name: "Richard A.",
        vehicle: "2024 Porsche 911",
        location: "Cherry Hills Village, CO",
        text: "I do not let just anyone touch my 911. After researching PDR specialists in Colorado, Confidents stood out. They understood the aluminum body, used the right techniques, and the result was absolutely factory-perfect. These are true craftsmen.",
      },
      {
        name: "Priya S.",
        vehicle: "2023 Tesla Model 3",
        location: "Parker, CO",
        text: "Finding someone who truly understands Tesla aluminum panels is difficult. Confidents knew exactly what they were doing. The dent on my front quarter panel vanished completely. They also explained the whole process, which I appreciated.",
      },
    ],
  },
  {
    category: "Minor Collision and Crease Repair",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H22.5" />
      </svg>
    ),
    reviews: [
      {
        name: "Kevin D.",
        vehicle: "2022 Ford Explorer",
        location: "Highlands Ranch, CO",
        text: "Backed into a pole at the grocery store and creased the rear quarter. I assumed it would need body work and paint, but Confidents repaired the crease with PDR alone. Saved me over a thousand dollars and there is no record on CARFAX.",
      },
      {
        name: "Stephanie N.",
        vehicle: "2023 Kia Telluride",
        location: "Colorado Springs, CO",
        text: "My husband bumped a concrete pillar in our parking garage. The dent looked terrible. Confidents came out the next day, and within two hours it was completely gone. No paint needed. The finish is untouched. Truly amazing work.",
      },
    ],
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="Testimonials"
        title="What Our Customers Say"
        description="Don't just take our word for it — hear from real customers across the Denver Metro area and Colorado Springs."
      />

      {/* Review Highlights Stats Bar */}
      <section className="relative bg-brand-dark border-b border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">5.0</span>
                  <Stars count={5} />
                </div>
                <p className="text-sm text-gray-500 font-medium">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">100+</p>
                <p className="text-sm text-gray-500 font-medium">Verified Reviews</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-3xl sm:text-4xl font-black text-white">5.0</span>
                </div>
                <p className="text-sm text-gray-500 font-medium">Google Verified</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">0</p>
                <p className="text-sm text-gray-500 font-medium">Negative Reviews</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Review */}
      <section className="relative py-20 bg-brand-surface border-b border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3 text-center">
              Featured Review
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-12 tracking-tight text-center">
              A Customer Story Worth Sharing
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/pdr-hail-led-inspect.webp"
                  alt="PDR technician inspecting hail damage with LED reflection board"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-brand-orange/90 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Hail Damage -- Before and After
                  </span>
                </div>
              </div>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 lg:p-10">
                <svg
                  className="w-10 h-10 text-brand-orange/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <Stars count={5} />
                <p className="text-gray-300 text-lg leading-relaxed mt-5 mb-2">
                  &ldquo;After the massive hail storm that hit the south Denver metro area last June, our entire neighborhood was scrambling to find repair shops. Most places had six to eight week wait times. Confidents got us in within five days.&rdquo;
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-2">
                  &ldquo;Our 2023 Tahoe had well over 150 dents across the hood, roof, and both quarter panels. The insurance adjuster initially wanted to total the vehicle. Confidents worked directly with our adjuster, provided detailed documentation, and got the full repair approved.&rdquo;
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  &ldquo;Three days later, the truck looked better than the day we bought it. Not a single dent remaining. Zero out of pocket. They even detailed the interior before handing it back. This team genuinely cares about their craft and their customers. We have already referred three neighbors.&rdquo;
                </p>
                <div className="border-t border-white/10 pt-5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-base font-bold text-brand-orange">M</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Michael & Karen T.</div>
                    <div className="text-sm text-brand-orange font-medium">
                      2023 Chevrolet Tahoe
                    </div>
                    <div className="text-xs text-gray-500">Centennial, CO</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Existing Testimonials Grid */}
      <Testimonials />

      {/* Reviews by Service Type */}
      <section className="relative py-24 bg-brand-dark border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Reviews by Service
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Real Results, Real Stories
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                See what customers say about each type of repair we offer. Every
                review is from a verified customer in the Colorado Front Range.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {serviceReviews.map((category, catIdx) => (
              <ScrollReveal key={category.category} delay={catIdx * 80}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.reviews.map((review, i) => (
                      <div
                        key={review.name}
                        className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 hover:border-white/20 transition-all duration-300"
                      >
                        <Stars count={5} />
                        <p className="text-gray-400 leading-relaxed mt-4 mb-6 text-sm">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-brand-orange">
                              {review.name[0]}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-sm">
                              {review.name}
                            </div>
                            <div className="text-xs text-brand-orange font-medium">
                              {review.vehicle}
                            </div>
                            <div className="text-xs text-gray-600">
                              {review.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Review Us Section */}
      <section className="relative py-24 bg-brand-surface border-b border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Share Your Experience
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Had Your Vehicle Repaired by Us?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Your feedback helps other vehicle owners find quality paintless
                dent removal in Colorado. We appreciate every review.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://g.page/r/confidents-pdr/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center hover:border-brand-orange/40 transition-all duration-300"
              >
                <svg
                  className="w-10 h-10 mx-auto mb-4 text-white group-hover:text-brand-orange transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <h3 className="text-lg font-bold text-white mb-2">
                  Review Us on Google
                </h3>
                <p className="text-sm text-gray-400">
                  Leave a review on our Google Business profile. It takes less
                  than a minute and helps us reach more customers.
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-brand-orange group-hover:underline">
                  Write a Google Review
                </span>
              </a>
              <a
                href="https://www.yelp.com/biz/confidents-pdr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 text-center hover:border-brand-orange/40 transition-all duration-300"
              >
                <svg
                  className="w-10 h-10 mx-auto mb-4 text-white group-hover:text-brand-orange transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.856-4.2a1.07 1.07 0 011.808-.103 7.07 7.07 0 011.667 3.208c.14.606-.346 1.08-.16 1.292zm-1.278 3.594l-5.11-.978c-1.015-.195-1.383 1.107-.555 1.97l3.528 3.676a1.07 1.07 0 001.79-.32 7.054 7.054 0 00.528-3.41c-.037-.513-.18-.938-.18-.938zm-7.846 1.144l-2.377 4.506a1.073 1.073 0 01-1.687.404A7.076 7.076 0 015.24 18.84c-.222-.555.055-1.082.055-1.082l3.22-3.98c.643-.793 2.025-.35 2.52.555zM8.195 9.27L3.397 8.26a1.072 1.072 0 01-.765-1.5A7.023 7.023 0 015.62 3.818c.482-.287 1.06-.053 1.06-.053l4.658 2.126c.93.424.735 1.86-.293 2.176L8.195 9.27zm.803-6.108L11.28.628a1.073 1.073 0 011.73-.073c1.22 1.294 1.944 2.876 2.143 4.59.06.52-.316.928-.316.928l-3.82 3.418c-.76.68-1.91-.077-1.736-1.144l.518-5.185z" />
                </svg>
                <h3 className="text-lg font-bold text-white mb-2">
                  Review Us on Yelp
                </h3>
                <p className="text-sm text-gray-400">
                  Share your experience on Yelp to help local vehicle owners
                  discover trusted paintless dent removal.
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-brand-orange group-hover:underline">
                  Write a Yelp Review
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-orange/8 blur-[120px] rounded-full" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Ready to Get Started?
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Join Our 100+ Satisfied Customers
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Whether it is hail damage, a parking lot ding, or a crease from a
              minor collision, we deliver flawless results backed by our
              perfect 5-star track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200"
              >
                Get a Free Estimate
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+17205551234"
                className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call Us Today
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
