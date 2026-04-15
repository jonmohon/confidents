import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const areaData: Record<
  string,
  {
    name: string;
    headline: string;
    description: string;
    longDescription: string;
    additionalInfo: string;
    image: string;
    neighborhoods: string[];
    highlights: { title: string; desc: string }[];
    testimonial: {
      name: string;
      vehicle: string;
      text: string;
    };
    localFacts: string[];
    hailInfo: string;
  }
> = {
  "castle-rock": {
    name: "Castle Rock",
    headline: "Paintless Dent Removal in Castle Rock",
    description:
      "Expert PDR services in Castle Rock and the I-25 corridor. Mobile service to your home or workplace.",
    longDescription:
      "Castle Rock sits in the heart of Douglas County, and its residents deal with the same Colorado hail storms that affect the entire Front Range. Confidents PDR provides top-tier paintless dent removal to Castle Rock homeowners and businesses. Whether you're near the Outlets at Castle Rock, in the Meadows, or along the I-25 corridor, our mobile service comes to you.",
    additionalInfo:
      "Castle Rock has grown rapidly over the past decade, and with that growth comes more vehicles on the road, more parking lot encounters, and more exposure to Colorado's famously unpredictable weather. The town's elevation at over 6,200 feet puts it squarely in the path of summer thunderstorms that roll east off the mountains, often bringing damaging hail. Confidents PDR has been serving Castle Rock families since our founding, and we understand the unique needs of this community. We offer weekend appointments for busy families, and our mobile setup means we can work right in your driveway while you enjoy your Saturday morning at home. Many of our Castle Rock customers have become repeat clients, referring their friends and neighbors after seeing the quality of our work firsthand.",
    image: "/pdr-mobile-driveway.webp",
    neighborhoods: [
      "The Meadows",
      "Castle Oaks",
      "Castlewood Ranch",
      "Crystal Valley",
      "Founders Village",
      "Plum Creek",
      "Red Hawk",
      "Terrain",
      "Sapphire Pointe",
      "Montaine",
      "Dawson Ridge",
    ],
    highlights: [
      {
        title: "Douglas County Coverage",
        desc: "Full coverage across Castle Rock and greater Douglas County — one of Colorado's fastest-growing areas. We know these neighborhoods inside and out.",
      },
      {
        title: "Insurance Experts",
        desc: "We work directly with all major insurance companies and handle the entire claims process for Castle Rock residents. Most customers pay $0 out of pocket for hail repairs.",
      },
      {
        title: "No Drop-Off Needed",
        desc: "We bring our tools and expertise directly to your Castle Rock location — home, office, or wherever your vehicle is parked.",
      },
      {
        title: "Weekend Availability",
        desc: "We understand Castle Rock families are busy. That's why we offer Saturday appointments and flexible scheduling to fit your life.",
      },
    ],
    testimonial: {
      name: "Mike T.",
      vehicle: "2022 Toyota Tacoma",
      text: "Living in Castle Rock, hail is just part of life. After last June's storm hit the Meadows pretty hard, Confidents was one of the first companies to reach out. They came to my house, handled all the insurance stuff, and my truck looked showroom-new when they were done. The whole process took about a day and I didn't pay a dime out of pocket.",
    },
    localFacts: [
      "Castle Rock's elevation makes it particularly susceptible to severe afternoon thunderstorms",
      "Douglas County consistently ranks among the top Colorado counties for hail damage claims",
      "The I-25 corridor between Castle Rock and Denver sees thousands of vehicles daily — and plenty of parking lot dings",
      "PDR is the preferred repair method for maintaining property values in Castle Rock's growing real estate market",
    ],
    hailInfo:
      "Castle Rock's position along the Front Range at over 6,200 feet of elevation makes it a prime target for Colorado's notorious summer hail storms. These storms can develop quickly in the afternoon, catching vehicles parked at the Outlets, local schools, and residential driveways. Confidents PDR responds quickly to Castle Rock storm events, often scheduling assessments within 24-48 hours of major storms. We handle the entire insurance process — from initial documentation and filing to adjuster coordination and final approval — so Castle Rock residents can focus on their lives while we restore their vehicles.",
  },
  parker: {
    name: "Parker",
    headline: "Paintless Dent Removal in Parker",
    description:
      "Mobile dent repair services in Parker and surrounding Douglas County communities. Fast, flawless results.",
    longDescription:
      "Parker's suburban lifestyle means lots of parking lots, school zones, and outdoor exposure to Colorado's unpredictable weather. Confidents PDR brings professional paintless dent removal directly to Parker residents — whether you're in Stonegate, Stroh Ranch, or anywhere in the Parker area. We repair door dings, hail damage, and more without affecting your factory paint.",
    additionalInfo:
      "Parker is one of Douglas County's most family-oriented communities, and that means busy schedules, lots of after-school activities, and vehicles that see heavy daily use. From the packed parking lots at Parker Adventist Hospital to the shopping centers along Mainstreet, door dings and minor dents are a fact of life. And when summer storms roll through, Parker's open terrain and elevation can make hail damage particularly severe. Confidents PDR understands the Parker lifestyle. We schedule around school pickups, youth sports practices, and work hours. Our mobile service means your vehicle stays at home while we work — no need to arrange a rental car or coordinate drop-offs. Many of our Parker customers are pleasantly surprised by how quick and affordable PDR is compared to the body shop quotes they've received.",
    image: "/pdr-tesla-fender.webp",
    neighborhoods: [
      "Stonegate",
      "Stroh Ranch",
      "Idyllwilde",
      "Pine Lane",
      "Canterberry",
      "The Pinery",
      "Pradera",
      "Lincoln Creek",
      "Cottonwood",
      "Parker Adventist area",
      "Mainstreet Parker",
    ],
    highlights: [
      {
        title: "Family-Friendly Service",
        desc: "We work around your schedule. Drop the kids at school and we'll have your car repaired by pickup time. No rental cars needed.",
      },
      {
        title: "Hail Damage Experts",
        desc: "Parker gets hit hard during hail season. We specialize in restoring hail-damaged vehicles to showroom condition, handling hundreds of dents per vehicle.",
      },
      {
        title: "Zero Out of Pocket",
        desc: "Most Parker residents pay $0 out of pocket for hail repairs. We handle all insurance coordination from start to finish.",
      },
      {
        title: "Trusted by Neighbors",
        desc: "Word travels fast in Parker. Many of our customers come from neighborhood referrals and HOA community recommendations.",
      },
    ],
    testimonial: {
      name: "Tom H.",
      vehicle: "2021 Ford Bronco",
      text: "Three door dings from my kid's baseball practice parking lot in Parker. Called Monday, they came Tuesday morning to our Stonegate driveway, and by lunch all three were gone. No paint, no filler, no BS. Just great work. I've since used them for hail damage too — equally impressed.",
    },
    localFacts: [
      "Parker's open terrain and elevation make it vulnerable to severe hail during Colorado's storm season",
      "The Parker area sees some of the highest per-capita vehicle ownership rates in Colorado",
      "Parking lots at Parker schools and shopping centers are hotspots for door dings and minor dents",
      "PDR keeps Parker families on the road — repairs are completed same-day without the need for a rental car",
    ],
    hailInfo:
      "Parker's position on the eastern edge of Douglas County, combined with its relatively open terrain, makes it particularly vulnerable to severe hail storms. When supercell thunderstorms develop along the Palmer Divide, Parker often finds itself directly in the path of large, damaging hail. Confidents PDR has extensive experience with Parker hail events and works closely with local insurance agents who know and trust our work. We prioritize fast response times after major storms, because we know Parker families need their vehicles for daily life.",
  },
  "lone-tree": {
    name: "Lone Tree",
    headline: "Paintless Dent Removal in Lone Tree",
    description:
      "Premium PDR services in Lone Tree and the South Denver tech corridor. Luxury vehicle specialists.",
    longDescription:
      "Lone Tree is home to some of Colorado's finest vehicles and most discerning car owners. Confidents PDR delivers the premium paintless dent removal service that Lone Tree residents expect. Whether your luxury SUV got dinged at Park Meadows or your sedan was caught in a hail storm, our expert technicians will restore it to flawless condition — all without touching your factory paint.",
    additionalInfo:
      "The South Denver tech corridor that runs through Lone Tree attracts professionals who appreciate quality in everything — including the care of their vehicles. Parking structures at Charles Schwab, Sky Ridge Medical Center, and the RidgeGate development see thousands of high-end vehicles daily, and door dings are an unfortunate reality. Confidents PDR specializes in the kind of meticulous, detail-oriented repair work that Lone Tree's luxury vehicle owners demand. Our technicians have advanced training in working with aluminum panels, high-strength steel, and the complex body lines found on modern luxury vehicles. We understand that a BMW, Mercedes, Tesla, or Porsche requires a different level of care than a standard sedan, and we bring that expertise to every Lone Tree repair. Many of our Lone Tree clients are repeat customers who trust us with their entire family's fleet of vehicles.",
    image: "/pdr-blue-sports-hood.webp",
    neighborhoods: [
      "Park Meadows area",
      "RidgeGate",
      "Heritage Hills",
      "Acres Green",
      "Carriage Club",
      "Lincoln Station area",
      "Sky Ridge area",
      "Highlands Ranch",
      "Centennial (nearby)",
      "Inverness",
    ],
    highlights: [
      {
        title: "Luxury Vehicle Experts",
        desc: "Specialized experience with BMW, Mercedes, Audi, Tesla, Porsche, and other premium brands common in Lone Tree.",
      },
      {
        title: "Workplace Convenience",
        desc: "We'll repair your vehicle while you work in the Lone Tree tech corridor. Drop it off at 8 AM, pick it up at lunch — dent-free.",
      },
      {
        title: "Value Protection",
        desc: "PDR preserves factory paint and doesn't appear on CARFAX — essential for Lone Tree's high-value vehicles that retain premium resale values.",
      },
      {
        title: "Discreet Service",
        desc: "We set up professionally in parking structures and residential driveways. Our clean, organized process reflects the standards of the Lone Tree community.",
      },
    ],
    testimonial: {
      name: "Jennifer L.",
      vehicle: "2023 BMW 3 Series",
      text: "I was worried about the CARFAX report since I'm planning to sell my BMW soon. Confidents explained that PDR doesn't get reported — that alone was worth it. They came to my office at RidgeGate, worked while I was in meetings, and the repair was absolutely perfect. You'd never know the dent was there.",
    },
    localFacts: [
      "Lone Tree and the South Denver tech corridor have one of the highest concentrations of luxury vehicles in Colorado",
      "Park Meadows Mall parking lots are among the busiest in the state — and a top source of door dings",
      "PDR is the repair method of choice for luxury dealerships, and it's what we bring directly to Lone Tree residents",
      "Preserving factory paint is especially important for luxury vehicles, where color-match repainting can cost thousands",
    ],
    hailInfo:
      "While Lone Tree benefits from slightly more developed terrain than the open plains to the east, it is still fully exposed to Colorado's hail season. Storms that track south from Denver or develop along the Palmer Divide can deliver significant hail to the Lone Tree area, impacting vehicles parked at homes, offices, and shopping centers. Confidents PDR responds promptly to Lone Tree hail events and offers concierge-level service that matches the expectations of this community. We provide detailed damage assessments, handle all insurance coordination, and deliver repairs that meet the exacting standards of Lone Tree's luxury vehicle owners.",
  },
  "highlands-ranch": {
    name: "Highlands Ranch",
    headline: "Paintless Dent Removal in Highlands Ranch",
    description:
      "Professional mobile PDR services throughout Highlands Ranch. Same-day service, lifetime warranty.",
    longDescription:
      "Highlands Ranch is one of Colorado's largest planned communities, and its residents expect top-quality service. Confidents PDR delivers expert paintless dent removal directly to Highlands Ranch homes and offices. Whether your vehicle was caught in a hail storm or picked up a door ding at Town Center, our certified technicians restore it to factory condition without touching the paint.",
    additionalInfo:
      "With over 100,000 residents and some of the busiest shopping centers in Douglas County, Highlands Ranch vehicles are constantly exposed to parking lot dings and Colorado's unpredictable weather. The community's well-maintained neighborhoods and high property values mean residents care about keeping their vehicles in excellent condition. Confidents PDR understands this, which is why we offer flexible scheduling, mobile convenience, and the meticulous attention to detail that Highlands Ranch residents expect. Our technicians work right in your driveway or garage, completing most repairs in just a few hours while you go about your day.",
    image: "/pdr-suv-door-repair.webp",
    neighborhoods: [
      "Town Center",
      "Westridge",
      "Eastridge",
      "Northridge",
      "Southridge",
      "BackCountry",
      "Falcon Hills",
      "Highlands Ranch Golf Club area",
      "Dad Clark",
      "Highlands Heritage Park area",
    ],
    highlights: [
      {
        title: "Community Trusted",
        desc: "Highlands Ranch families trust us for all their PDR needs. Many of our customers come from neighborhood referrals and community recommendations.",
      },
      {
        title: "Same-Day Service",
        desc: "For door dings and minor dents, we often offer same-day appointments. Most repairs are completed in just a few hours.",
      },
      {
        title: "Mobile Convenience",
        desc: "We come to your Highlands Ranch home, office, or any convenient location. No need to drive anywhere or sit in a waiting room.",
      },
      {
        title: "Insurance Coordination",
        desc: "We work directly with all major insurance providers to ensure a smooth, hassle-free claims process for Highlands Ranch residents.",
      },
    ],
    testimonial: {
      name: "Lisa P.",
      vehicle: "2023 Toyota Highlander",
      text: "After hail hit our neighborhood in Highlands Ranch, I was dreading the repair process. Confidents made it completely painless. They came to my driveway, handled everything with insurance, and my Highlander looks brand new. I've already told all my neighbors about them.",
    },
    localFacts: [
      "Highlands Ranch is one of the largest planned communities in the United States with over 100,000 residents",
      "Douglas County consistently ranks among the top Colorado counties for hail damage claims",
      "The community's busy shopping centers and parking lots are a common source of door dings",
      "PDR preserves vehicle value — important in Highlands Ranch's active used car market",
    ],
    hailInfo:
      "Highlands Ranch sits along the northern edge of Douglas County, where the Palmer Divide's influence creates conditions ripe for severe thunderstorms and hail. Summer storms can develop quickly in the afternoon, leaving vehicles parked at homes, schools, and shopping centers covered in dents. Confidents PDR responds quickly to Highlands Ranch storm events and handles the entire insurance process so residents can focus on their families while we restore their vehicles.",
  },
  "castle-pines": {
    name: "Castle Pines",
    headline: "Paintless Dent Removal in Castle Pines",
    description:
      "Premium PDR services in Castle Pines and Castle Pines Village. Expert care for your vehicle.",
    longDescription:
      "Castle Pines and Castle Pines Village are home to some of Douglas County's finest residences and vehicles. Confidents PDR provides the premium paintless dent removal service that Castle Pines residents expect. Our expert technicians deliver factory-quality results on luxury and everyday vehicles alike, all from the convenience of your driveway.",
    additionalInfo:
      "The Castle Pines community values quality and attention to detail, and that extends to vehicle care. Whether your luxury SUV picked up a door ding at the Castle Pines Village shopping area or your sedan was caught in a summer hail storm, Confidents PDR has the expertise to make the damage disappear. We specialize in working with the high-end vehicles common in Castle Pines, including aluminum-body SUVs, European luxury brands, and Tesla. Our discreet, professional service setup reflects the standards of the Castle Pines community.",
    image: "/pdr-luxury-sedan.webp",
    neighborhoods: [
      "Castle Pines Village",
      "Castle Pines North",
      "The Ridge at Castle Pines",
      "Lagae Ranch",
      "Canyonside",
      "Happy Canyon",
      "Daniel's Gate",
      "Surrey Ridge",
    ],
    highlights: [
      {
        title: "Luxury Vehicle Experts",
        desc: "Specialized experience with BMW, Mercedes, Audi, Tesla, Porsche, and other premium brands common in Castle Pines.",
      },
      {
        title: "Discreet Service",
        desc: "We set up professionally in your driveway or garage. Our clean, organized process reflects the standards of the Castle Pines community.",
      },
      {
        title: "Value Protection",
        desc: "PDR preserves factory paint and doesn't appear on CARFAX — essential for Castle Pines' high-value vehicles.",
      },
      {
        title: "Lifetime Warranty",
        desc: "Every repair comes with our lifetime warranty and 100% satisfaction guarantee. We stand behind our work without reservation.",
      },
    ],
    testimonial: {
      name: "David R.",
      vehicle: "2024 Audi Q7",
      text: "Found a nasty door ding on my Q7 after parking at the Village. Confidents came out the next morning, and within an hour the dent was completely gone. You cannot tell it was ever there. Outstanding work and very professional service.",
    },
    localFacts: [
      "Castle Pines is one of Douglas County's most affluent communities with a high concentration of luxury vehicles",
      "The area's elevation and proximity to the Palmer Divide make it susceptible to summer hail storms",
      "PDR is the repair method of choice for luxury dealerships — the same quality we bring to Castle Pines residents",
      "Preserving factory paint is especially important for luxury vehicles, where color-match repainting can cost thousands",
    ],
    hailInfo:
      "Castle Pines sits in the heart of Douglas County, where the Palmer Divide's weather influence creates ideal conditions for severe summer thunderstorms. Hail events can strike with little warning, leaving vehicles parked in driveways and community lots with dozens of dents. Confidents PDR provides rapid response to Castle Pines storm events, offering the premium, concierge-level service that this community expects. We handle all insurance coordination and deliver repairs that meet the exacting standards of Castle Pines residents.",
  },
};

export async function generateStaticParams() {
  return Object.keys(areaData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areaData[slug];
  if (!area) return {};

  return {
    title: `${area.name} Paintless Dent Removal | Confidents PDR`,
    description: area.description,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areaData[slug];

  if (!area) {
    notFound();
  }

  return (
    <>
      <PageHero
        label={`Serving ${area.name}`}
        title={area.headline}
        description={area.description}
      />

      {/* Image + About */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={area.image}
                    alt={`Paintless dent removal in ${area.name}`}
                    width={700}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-lg rounded-xl px-5 py-4 border border-white/10">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Serving {area.name}</p>
                        <p className="text-gray-400 text-xs">Mobile service — we come to you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  About Our {area.name} Service
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                  Premium PDR in {area.name}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {area.longDescription}
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {area.additionalInfo}
                </p>
                <Link
                  href="/contact"
                  className="btn-shine inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-amber text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/40 active:scale-[0.98]"
                >
                  Get a Free Estimate
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us in This Area */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-brand-orange/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Why {area.name} Chooses Us
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                The Confidents Advantage
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {area.highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/30 hover:bg-white/[0.06] h-full">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange ring-1 ring-brand-orange/20 group-hover:bg-brand-orange/20 transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2 text-lg group-hover:text-brand-orange transition-colors">{h.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Coverage Area
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                  Neighborhoods We Serve in {area.name}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Our mobile PDR service covers all neighborhoods in and around{" "}
                  {area.name}. We come directly to your location — no drop-offs,
                  no waiting rooms, no hassle.
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="bg-white/[0.06] border border-white/10 text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:border-brand-orange/30 hover:text-brand-orange transition-all cursor-default"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-3xl" />
                <div className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Our Services in {area.name}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { name: "Door Ding Repair", desc: "Remove unsightly dings from parking lot encounters and car door impacts" },
                      { name: "Hail Damage Repair", desc: "Complete restoration from Colorado's notorious hail storms" },
                      { name: "Large Dent Repair", desc: "Collision and impact dents repaired without paint or filler" },
                      { name: "Body Crease Repair", desc: "Sharp creases from impacts removed with advanced technique" },
                      { name: "Insurance Claims", desc: "Full coordination with your insurance — we handle all the paperwork" },
                      { name: "Mobile Service", desc: "We come to your home, office, or any convenient location" },
                    ].map((service) => (
                      <li key={service.name} className="flex gap-3">
                        <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <div>
                          <span className="text-white font-medium text-sm">{service.name}</span>
                          <p className="text-gray-500 text-xs mt-0.5">{service.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:text-brand-amber transition-colors"
                    >
                      View all services
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hail Information */}
      <section className="relative py-24 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  Hail Damage
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
                  Hail Damage Repair in {area.name}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {area.hailInfo}
                </p>
                <div className="space-y-4">
                  {area.localFacts.map((fact, i) => (
                    <div key={i} className="flex gap-3">
                      <svg className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-400 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/pdr-hail-dents-hood.webp"
                  alt={`Hail damage repair in ${area.name}`}
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-lg rounded-xl px-6 py-5 border border-white/10">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-black text-brand-orange">$0</div>
                        <div className="text-gray-400 text-xs mt-1">Out of Pocket</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-brand-orange">1-4</div>
                        <div className="text-gray-400 text-xs mt-1">Days to Repair</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-brand-orange">100%</div>
                        <div className="text-gray-400 text-xs mt-1">Paint Preserved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
                Customer Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
                What {area.name} Customers Say
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10">
              <svg className="w-12 h-12 text-brand-orange/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                &ldquo;{area.testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/30 flex items-center justify-center">
                  <span className="font-bold text-brand-orange">{area.testimonial.name[0]}</span>
                </div>
                <div>
                  <div className="font-bold text-white">{area.testimonial.name}</div>
                  <div className="text-brand-orange text-sm font-medium">{area.testimonial.vehicle}</div>
                  <div className="text-gray-600 text-xs">{area.name}, CO</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 text-center">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-amber transition-colors"
              >
                Read more customer reviews
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="relative bg-brand-dark py-4 overflow-hidden">
        <div className="flex gap-4">
          {["/pdr-red-crease-work.webp", "/pdr-black-porsche.webp", "/pdr-hail-led-inspect.webp", "/pdr-tools-flatlay.webp", "/pdr-roof-hail-aerial.webp", "/pdr-under-hood.webp"].map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden">
              <Image src={src} alt="Vehicle showcase" fill className="object-cover hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-brand-surface border-y border-white/5">
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 via-transparent to-brand-orange/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Need Dent Repair in
              <span className="block bg-gradient-to-r from-brand-orange to-brand-amber bg-clip-text text-transparent mt-2">
                {area.name}?
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get a free, no-obligation estimate today. We come to your {area.name}{" "}
              home or office, work with your insurance, and back every repair with
              a lifetime warranty.
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

      {/* Other areas */}
      <section className="relative py-16 bg-brand-dark">
        <div className="grain absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Other Service Areas
            </p>
            <h2 className="text-2xl font-bold text-white mb-8">
              We Also Serve
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(areaData)
                .filter(([s]) => s !== slug)
                .map(([s, a]) => (
                  <Link
                    key={s}
                    href={`/areas-we-serve/${s}`}
                    className="bg-white/[0.04] border border-white/10 text-gray-400 px-5 py-2.5 rounded-full text-sm font-medium hover:border-brand-orange/30 hover:text-brand-orange transition-all"
                  >
                    {a.name}
                  </Link>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
