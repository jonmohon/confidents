import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Areas We Serve | Confidents Paintless Dent Removal",
  description:
    "Confidents PDR serves the Denver Metro area and Colorado Springs. Mobile paintless dent removal in Denver, Castle Rock, Littleton, Parker, Aurora, Lone Tree, and Colorado Springs.",
};

const areas = [
  {
    slug: "denver",
    name: "Denver",
    description: "Serving the Denver metro area with premium mobile PDR services. From downtown Denver to the surrounding neighborhoods.",
    icon: "🏙️",
  },
  {
    slug: "castle-rock",
    name: "Castle Rock",
    description: "Expert paintless dent removal in Castle Rock and the I-25 corridor between Denver and Colorado Springs.",
    icon: "🏔️",
  },
  {
    slug: "littleton",
    name: "Littleton",
    description: "Professional PDR services throughout Littleton, Ken Caryl, Columbine, and the Southwest Metro area.",
    icon: "🌄",
  },
  {
    slug: "parker",
    name: "Parker",
    description: "Mobile dent repair in Parker, Stonegate, and the surrounding Douglas County communities.",
    icon: "🏡",
  },
  {
    slug: "aurora",
    name: "Aurora",
    description: "Comprehensive paintless dent removal across Aurora — from Southlands to the Anschutz Medical Campus area.",
    icon: "🌅",
  },
  {
    slug: "lone-tree",
    name: "Lone Tree",
    description: "Serving Lone Tree, Park Meadows, and the south Denver tech corridor with expert PDR services.",
    icon: "🌲",
  },
  {
    slug: "colorado-springs",
    name: "Colorado Springs",
    description: "Full-service paintless dent removal in Colorado Springs and the Pikes Peak region.",
    icon: "⛰️",
  },
];

export default function AreasWeServePage() {
  return (
    <>
      <PageHero
        label="Service Areas"
        title="Areas We Serve"
        description="We bring premium paintless dent removal directly to you across the Denver Metro area and Colorado Springs. Mobile service — we come to your home or office."
      />

      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={i * 100}>
                <Link href={`/areas-we-serve/${area.slug}`} className="block h-full">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/10 h-full">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/40 via-brand-orange to-brand-orange/40 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-brand-orange">
                        {area.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm mb-4">
                        {area.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium text-brand-orange">
                        Learn more
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-6 backdrop-blur-sm">
                <svg className="w-6 h-6 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Don&apos;t see your area?</p>
                  <p className="text-gray-500 text-sm">
                    We may still be able to serve you.{" "}
                    <Link href="/contact" className="text-brand-orange hover:text-brand-amber transition-colors font-medium">
                      Contact us
                    </Link>{" "}
                    to find out.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
