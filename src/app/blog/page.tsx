import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Confidents Paintless Dent Removal",
  description:
    "Expert tips on paintless dent removal, hail damage prevention, insurance claims, and vehicle care from Confidents PDR in Denver, Colorado.",
};

const featuredPost = {
  slug: "colorado-hail-season-2025-what-drivers-need-to-know",
  title: "Colorado Hail Season 2025: What Every Driver Needs to Know",
  excerpt:
    "Colorado's hail season runs from April through September, with peak activity in May, June, and July. The Front Range — from Colorado Springs through Denver and beyond — sits squarely in what meteorologists call 'Hail Alley,' a corridor that experiences more frequent and severe hail events than almost anywhere else in the country. In this guide, we break down what to expect, how to prepare your vehicle, and what to do if your car gets caught in a storm.",
  image: "/pdr-hailstorm-scene.webp",
  date: "March 15, 2025",
  readTime: "8 min read",
  category: "Hail Season",
};

const posts = [
  {
    slug: "pdr-vs-body-shop-which-is-right-for-your-dent",
    title: "PDR vs. Body Shop: Which Is Right for Your Dent?",
    excerpt:
      "Not all dents are created equal, and understanding the difference between paintless dent removal and traditional body shop repair can save you hundreds — or even thousands — of dollars. We walk through the key factors that determine which method is best for your specific situation.",
    image: "/pdr-vs-bodyshop.webp",
    date: "March 8, 2025",
    readTime: "6 min read",
    category: "PDR Education",
  },
  {
    slug: "how-to-protect-your-car-from-hail-damage",
    title: "How to Protect Your Car from Hail Damage in Colorado",
    excerpt:
      "From covered parking strategies to hail blankets and insurance tips, here are practical steps every Colorado driver can take to minimize the risk of hail damage to their vehicle during storm season.",
    image: "/pdr-colorado-highway.webp",
    date: "February 28, 2025",
    readTime: "5 min read",
    category: "Prevention Tips",
  },
  {
    slug: "understanding-your-insurance-claim-for-hail-damage",
    title: "Understanding Your Insurance Claim for Hail Damage",
    excerpt:
      "Filing a hail damage insurance claim can feel overwhelming, but it doesn't have to be. We explain the process step by step — from documenting the damage to working with adjusters — and how Confidents PDR handles it all for you.",
    image: "/pdr-insurance-papers.webp",
    date: "February 15, 2025",
    readTime: "7 min read",
    category: "Insurance",
  },
  {
    slug: "what-is-paintless-dent-removal",
    title: "What Is Paintless Dent Removal? A Complete Guide",
    excerpt:
      "Paintless dent removal is a specialized repair technique that restores vehicle panels to their original shape without affecting the factory paint. Learn how the process works, what types of damage it can fix, and why it's become the preferred method for dent repair worldwide.",
    image: "/pdr-sedan-wand-check.webp",
    date: "February 1, 2025",
    readTime: "9 min read",
    category: "PDR Education",
  },
  {
    slug: "door-dings-why-you-shouldnt-ignore-them",
    title: "Door Dings: Why You Shouldn't Ignore Them",
    excerpt:
      "That small parking lot ding might seem harmless, but leaving it unrepaired can impact your vehicle's resale value, lead to paint deterioration, and cost more to fix down the road. Here's why addressing door dings promptly is always the smart move.",
    image: "/pdr-door-ding-detail.webp",
    date: "January 20, 2025",
    readTime: "4 min read",
    category: "Vehicle Care",
  },
  {
    slug: "tesla-aluminum-body-pdr-what-you-need-to-know",
    title: "Tesla & Aluminum Body PDR: What You Need to Know",
    excerpt:
      "Aluminum-bodied vehicles like Teslas, Ford F-150s, and luxury European cars require specialized PDR techniques. We explain the differences between steel and aluminum panel repair and what to look for in a qualified PDR technician for your aluminum vehicle.",
    image: "/pdr-tesla-fender.webp",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "PDR Education",
  },
];

const categories = [
  "All Posts",
  "Hail Season",
  "PDR Education",
  "Insurance",
  "Prevention Tips",
  "Vehicle Care",
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Our Blog"
        title="Tips, News & Insights"
        description="Expert advice on paintless dent removal, hail damage prevention, insurance claims, and keeping your vehicle looking its best."
      />

      {/* Featured Post */}
      <section className="relative py-20 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full border border-brand-orange/20">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                  <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors cursor-pointer">
                  Read full article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Tags */}
      <section className="relative bg-brand-dark py-8 border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20"
                    : "bg-white/[0.04] border border-white/10 text-gray-400 hover:border-brand-orange/30 hover:text-brand-orange"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-20 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <article className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-brand-orange/30 transition-all duration-500 h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-brand-orange transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                      {post.excerpt.length > 160
                        ? post.excerpt.substring(0, 160) + "..."
                        : post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange group-hover:gap-3 transition-all">
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Updated */}
      <section className="relative py-20 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Stay Updated
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
              Get Hail Season Alerts
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Sign up for our newsletter and be the first to know when severe
              weather is approaching the Denver Metro area. We&apos;ll also send you
              tips on protecting your vehicle and special offers for our
              subscribers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-all text-sm"
              />
              <button
                type="submit"
                className="btn-shine bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98] whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-4">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="relative py-20 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                What We Write About
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                Topics We Cover
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hail Season Prep",
                desc: "Forecasts, preparation tips, and what to do when storms hit the Front Range.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
              {
                title: "PDR Education",
                desc: "How paintless dent removal works, what it can fix, and why it outperforms body shops.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "Insurance Claims",
                desc: "Navigate the insurance process with confidence. Deductibles, supplements, and your rights.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Vehicle Care",
                desc: "Tips for maintaining your vehicle's finish, preventing damage, and preserving value.",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
              },
            ].map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 100}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-orange/30 hover:bg-white/[0.06] transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 mb-4 group-hover:bg-brand-orange/20 transition-all">
                    {topic.icon}
                  </div>
                  <h3 className="text-white font-bold mb-2 group-hover:text-brand-orange transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
              Have a Dent That Needs Fixing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Stop reading about dent repair and get one. Free estimates, same-day
              service, and a lifetime warranty on every repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-shine bg-brand-orange hover:bg-brand-amber text-white font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:+17205551234"
                className="border border-white/20 hover:border-brand-orange/50 hover:bg-white/5 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
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
    </>
  );
}
