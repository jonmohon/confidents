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
  denver: {
    name: "Denver",
    headline: "Paintless Dent Removal in Denver",
    description:
      "Denver's premier mobile PDR service. We come to your home or office anywhere in the Denver metro area.",
    longDescription:
      "As Colorado's capital city, Denver is no stranger to hail storms, parking lot dings, and the everyday dents that come with city driving. Confidents PDR brings expert paintless dent removal directly to you — whether you're downtown, in the suburbs, or anywhere across the Denver metro area. Our certified technicians have repaired thousands of vehicles throughout Denver, from luxury sedans in Cherry Creek to trucks in the RiNo district.",
    additionalInfo:
      "Denver's mix of urban parking garages, tight street parking, and unpredictable weather makes dent damage an unavoidable reality for most vehicle owners. Whether your car was caught in a sudden afternoon hail storm rolling off the Front Range, or you came back from King Soopers to find a fresh door ding, Confidents PDR has the tools and expertise to make the damage disappear. We understand that Denver drivers depend on their vehicles, which is why we offer flexible scheduling — including early morning and weekend appointments — so you never have to miss work or rearrange your day to get a repair done. Our mobile service means we set up right in your driveway, parking garage, or office lot, completing most repairs in just a few hours while you go about your day.",
    image: "/car-red.jpg",
    neighborhoods: [
      "Downtown Denver",
      "Cherry Creek",
      "Washington Park",
      "Highlands",
      "RiNo",
      "Capitol Hill",
      "Congress Park",
      "Park Hill",
      "Central Park",
      "Green Valley Ranch",
      "Sloan's Lake",
      "Baker",
      "LoHi",
      "Five Points",
    ],
    highlights: [
      {
        title: "Hail Season Ready",
        desc: "Denver averages 7-9 significant hail events per year. We handle the surge with fast turnaround and full insurance coordination — no waiting weeks for an appointment.",
      },
      {
        title: "Same-Day Service",
        desc: "For minor dents and door dings in the Denver area, we often offer same-day appointments. Most repairs are completed in 1-3 hours.",
      },
      {
        title: "Mobile Convenience",
        desc: "We come to your Denver home, office, or any location that's convenient for you. No need to drive across town or sit in a waiting room.",
      },
      {
        title: "Insurance Coordination",
        desc: "We work directly with State Farm, GEICO, Allstate, Progressive, USAA, and all other major insurance providers to ensure a smooth, hassle-free claims process.",
      },
    ],
    testimonial: {
      name: "Sarah M.",
      vehicle: "2023 Audi Q5",
      text: "After a nasty hail storm hit Cherry Creek, I thought my Q5 was done for. Confidents came to my house the next morning, handled everything with my insurance, and two days later my car looked brand new. Seriously, you can't tell it was ever damaged. Best experience I've ever had with any auto service.",
    },
    localFacts: [
      "Denver experiences an average of 50+ hail days per year along the Front Range",
      "Over 150,000 hail damage claims are filed annually in Colorado",
      "PDR saves Denver drivers an average of $1,500-3,000 compared to body shop repairs",
      "Most insurance companies prefer PDR because it preserves the vehicle's original value",
    ],
    hailInfo:
      "Denver sits in the heart of 'Hail Alley' — a stretch of the Front Range that sees some of the most frequent and severe hail storms in the country. From May through September, afternoon thunderstorms can drop golf ball-sized hail with little warning, leaving vehicles covered in dents. Confidents PDR specializes in comprehensive hail damage restoration, and we ramp up our team during storm season to ensure Denver residents aren't waiting weeks for repairs. We coordinate directly with your insurance company, handle all paperwork, and in most cases, our customers pay $0 out of pocket.",
  },
  "castle-rock": {
    name: "Castle Rock",
    headline: "Paintless Dent Removal in Castle Rock",
    description:
      "Expert PDR services in Castle Rock and the I-25 corridor. Mobile service to your home or workplace.",
    longDescription:
      "Castle Rock sits at the crossroads of the Denver metro area and Colorado Springs, and its residents deal with the same Colorado hail storms that affect the entire Front Range. Confidents PDR provides top-tier paintless dent removal to Castle Rock homeowners and businesses. Whether you're near the Outlets at Castle Rock, in the Meadows, or along the I-25 corridor, our mobile service comes to you.",
    additionalInfo:
      "Castle Rock has grown rapidly over the past decade, and with that growth comes more vehicles on the road, more parking lot encounters, and more exposure to Colorado's famously unpredictable weather. The town's elevation at over 6,200 feet puts it squarely in the path of summer thunderstorms that roll east off the mountains, often bringing damaging hail. Confidents PDR has been serving Castle Rock families since our founding, and we understand the unique needs of this community. We offer weekend appointments for busy families, and our mobile setup means we can work right in your driveway while you enjoy your Saturday morning at home. Many of our Castle Rock customers have become repeat clients, referring their friends and neighbors after seeing the quality of our work firsthand.",
    image: "/car-road.jpg",
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
        desc: "Skip the drive to a body shop in Denver. We bring our tools and expertise directly to your Castle Rock location — home, office, or wherever your vehicle is parked.",
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
  littleton: {
    name: "Littleton",
    headline: "Paintless Dent Removal in Littleton",
    description:
      "Professional PDR services throughout Littleton and the Southwest Metro area. Factory-quality results.",
    longDescription:
      "Littleton and the surrounding Southwest Metro communities deserve dent repair that matches the area's high standards. Confidents PDR provides meticulous paintless dent removal throughout Littleton, Ken Caryl, Columbine, and Chatfield — preserving your vehicle's factory finish and value. Our technicians are experienced with all makes and models, from everyday commuters to luxury vehicles.",
    additionalInfo:
      "Littleton residents take pride in their vehicles, and the Southwest Metro area is home to some of the finest cars in the Denver region. Whether you drive a family SUV to shuttle kids between Littleton Public Schools or a luxury sedan for your commute to the tech center, your vehicle deserves expert care when dents happen. Confidents PDR brings that care directly to your doorstep. Our technicians have extensive experience working with the diverse range of vehicles found in Littleton — from aluminum-body Ford F-150s to German luxury brands. We use the latest PDR tools and techniques, and our obsessive attention to detail means we won't sign off on a repair until it meets our exacting standards. Littleton customers consistently tell us that our work is indistinguishable from a factory-fresh panel.",
    image: "/car-luxury.jpg",
    neighborhoods: [
      "Historic Downtown Littleton",
      "Ken Caryl",
      "Columbine",
      "Chatfield",
      "Grant Ranch",
      "Highlands Ranch",
      "Lakewood",
      "Southwest Plaza area",
      "Roxborough",
      "Waterton",
      "Deer Creek",
    ],
    highlights: [
      {
        title: "SW Metro Specialists",
        desc: "Deep knowledge of the Littleton and Southwest Metro area means faster response times and local expertise you can count on.",
      },
      {
        title: "Preserve Your Value",
        desc: "PDR doesn't show up on CARFAX — critical for Littleton residents who maintain high vehicle values and plan to sell or trade in.",
      },
      {
        title: "All Vehicle Types",
        desc: "From aluminum-body trucks to luxury European sedans, our Littleton team handles it all with precision and care.",
      },
      {
        title: "Detailed Inspections",
        desc: "We use specialized lighting and tools to identify every dent, ensuring nothing is missed during our thorough inspection process.",
      },
    ],
    testimonial: {
      name: "Jennifer K.",
      vehicle: "2024 BMW X3",
      text: "I was quoted over $4,000 at a body shop in Littleton for hail damage on my X3. Confidents came to my Ken Caryl home, worked with my insurance, and had the car looking perfect in two days. I paid nothing out of pocket and the repair is invisible. I've already referred three friends.",
    },
    localFacts: [
      "The Southwest Metro area sees significant hail activity during Colorado's storm season from May to September",
      "Littleton's proximity to the foothills means rapid weather changes that can catch vehicles off guard",
      "Ken Caryl and Columbine rank among the highest vehicle-value neighborhoods in the SW Metro area",
      "PDR protects vehicle resale value — crucial in Littleton's competitive used car market",
    ],
    hailInfo:
      "Littleton and the Southwest Metro area are frequently impacted by hail storms that sweep east off the foothills. These storms can be particularly intense due to orographic lift — the process by which moist air is forced upward as it encounters the mountains, creating powerful updrafts that produce large hail stones. Confidents PDR monitors weather patterns throughout the season and pre-positions resources to respond quickly when storms impact the Littleton area. Our goal is to get your vehicle assessed and into our repair schedule as quickly as possible, minimizing the time you spend driving a hail-damaged car.",
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
    image: "/car-dark.jpg",
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
      "Parker's position on the eastern edge of the Denver metro area, combined with its relatively open terrain, makes it particularly vulnerable to severe hail storms. When supercell thunderstorms develop along the Palmer Divide — the elevated terrain between Denver and Colorado Springs — Parker often finds itself directly in the path of large, damaging hail. Confidents PDR has extensive experience with Parker hail events and works closely with local insurance agents who know and trust our work. We prioritize fast response times after major storms, because we know Parker families need their vehicles for daily life.",
  },
  aurora: {
    name: "Aurora",
    headline: "Paintless Dent Removal in Aurora",
    description:
      "Comprehensive PDR services across Aurora. From Southlands to the Anschutz area — we come to you.",
    longDescription:
      "Aurora is one of Colorado's largest cities, and its residents need reliable, convenient dent repair they can trust. Confidents PDR serves all of Aurora with mobile paintless dent removal — from the Southlands shopping area to the Anschutz Medical Campus and everywhere in between. Our certified technicians deliver factory-quality results at a fraction of body shop prices.",
    additionalInfo:
      "Spanning over 150 square miles, Aurora is a sprawling city with diverse neighborhoods and a wide range of vehicle types. Whether you're a medical professional at the Anschutz campus who discovered a door ding in the parking garage, a family in Saddle Rock dealing with hail damage from last night's storm, or a small business owner in the Gateway area needing fleet vehicles repaired, Confidents PDR has you covered. We've built a strong reputation across Aurora by delivering consistently excellent results and providing the kind of personalized service that large chain body shops simply can't match. Our technicians take the time to assess every dent thoroughly, explain the repair process, and ensure you're completely satisfied before we pack up our tools.",
    image: "/car-corvette.jpg",
    neighborhoods: [
      "Southlands",
      "Saddle Rock",
      "Tallyn's Reach",
      "Quincy Reservoir area",
      "Murphy Creek",
      "Anschutz Medical Campus area",
      "Gateway",
      "Hampden Heights",
      "Heather Ridge",
      "Mission Viejo",
      "Smoky Hill",
      "Cherry Creek State Park area",
    ],
    highlights: [
      {
        title: "City-Wide Coverage",
        desc: "We serve all of Aurora — north, south, east, and west. One call and we come to your preferred location, anywhere in the city.",
      },
      {
        title: "Fast Turnaround",
        desc: "Most Aurora repairs are completed same-day. Hail damage typically takes 1-3 days depending on severity, not the weeks a body shop requires.",
      },
      {
        title: "Lifetime Warranty",
        desc: "Every repair in Aurora comes with our industry-leading lifetime warranty. If you're ever unsatisfied, we make it right — no questions asked.",
      },
      {
        title: "Fleet Services",
        desc: "Aurora businesses trust us for fleet PDR services. We offer volume pricing and priority scheduling for commercial customers.",
      },
    ],
    testimonial: {
      name: "Marcus J.",
      vehicle: "2022 Ram 1500",
      text: "Got a huge dent from a runaway shopping cart at Southlands. I was quoted $1,800 at a body shop on Havana. Confidents fixed it in under 2 hours right in my driveway for a fraction of the cost. These guys are artists. The dent is completely invisible now.",
    },
    localFacts: [
      "Aurora's expansive geography means more driving, more parking lots, and more opportunities for door dings",
      "The Anschutz Medical Campus area alone has thousands of vehicles parked daily in large garages",
      "Aurora experiences the same Front Range hail activity as Denver, with storms frequently tracking east across the city",
      "PDR is ideal for Aurora's large fleet vehicle population — ambulances, delivery vans, and company cars",
    ],
    hailInfo:
      "Aurora's eastern position in the metro area means it often catches the tail end of Front Range hail storms as they track eastward, but it can also be hit by storms that develop along the Palmer Divide to the south. The city's flat, open terrain offers little natural protection from hail, and vehicles parked in driveways, shopping center lots, and hospital garages are all vulnerable. Confidents PDR provides rapid response to Aurora hail events, with the capacity to handle large volumes of vehicles. We work with all major insurance providers and have established relationships with local Aurora agents who recommend our services to their clients.",
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
    image: "/car-luxury.jpg",
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
  "colorado-springs": {
    name: "Colorado Springs",
    headline: "Paintless Dent Removal in Colorado Springs",
    description:
      "Full-service PDR in Colorado Springs and the Pikes Peak region. Hail damage specialists.",
    longDescription:
      "Colorado Springs and the Pikes Peak region experience some of Colorado's most intense hail storms. Confidents PDR provides expert paintless dent removal throughout Colorado Springs — from the Broadmoor to Briargate, and from Manitou Springs to Falcon. Our team handles everything from minor door dings to extensive hail damage, with full insurance coordination included.",
    additionalInfo:
      "Colorado Springs is the second-largest city in Colorado, and its residents face unique challenges when it comes to vehicle dent damage. The city's proximity to Pikes Peak creates localized weather patterns that can produce severe hail — sometimes in areas only a few miles wide. Military families at Fort Carson, Peterson Space Force Base, and Schriever Space Force Base make up a significant portion of the Springs' population, and these families need reliable, affordable vehicle repair that works with military-friendly insurance providers like USAA. Confidents PDR is proud to serve the military community with priority scheduling, competitive pricing, and a deep understanding of the insurance providers and processes that matter most to service members. Beyond the military community, we serve everyone in Colorado Springs — from retirees in the Broadmoor area to young families in Briargate, and from small business owners on Tejon Street to tech workers in the Innovation Corridor.",
    image: "/car-closeup.jpg",
    neighborhoods: [
      "Briargate",
      "Northgate",
      "Flying Horse",
      "The Broadmoor area",
      "Old Colorado City",
      "Manitou Springs",
      "Powers Corridor",
      "Falcon",
      "Monument",
      "Woodland Park",
      "Black Forest",
      "Cimarron Hills",
      "Fort Carson area",
      "Peterson SFB area",
    ],
    highlights: [
      {
        title: "Hail Capital Ready",
        desc: "Colorado Springs is in the heart of hail alley. We're equipped and staffed to handle major storm events quickly, with surge capacity for high-volume periods.",
      },
      {
        title: "Military Friendly",
        desc: "Proud to serve military families at Fort Carson, Peterson SFB, and Schriever SFB with priority scheduling and military-friendly pricing.",
      },
      {
        title: "Full Insurance Support",
        desc: "We coordinate directly with USAA, Armed Forces Insurance, Geico Military, and all major carriers for Colorado Springs residents.",
      },
      {
        title: "Pikes Peak Region Coverage",
        desc: "From Monument to Fountain, Manitou Springs to Falcon — we serve the entire Pikes Peak region with mobile PDR services.",
      },
    ],
    testimonial: {
      name: "Robert K.",
      vehicle: "2022 Chevrolet Silverado",
      text: "Had extensive hail damage after that big storm that hit Briargate — over 100 dents across the hood, roof, and trunk. Confidents worked with USAA and got it all approved. $0 out of pocket. The truck looks showroom-new. As a military family, we really appreciate the priority scheduling they offered.",
    },
    localFacts: [
      "Colorado Springs sits along the Palmer Divide, one of the most hail-prone regions in the United States",
      "The city's military installations house tens of thousands of vehicles that are exposed to severe weather",
      "USAA, the primary insurer for military families, consistently approves and recommends PDR for hail damage repairs",
      "Colorado Springs' growing population means more vehicles on the road and more demand for quality dent repair",
    ],
    hailInfo:
      "Colorado Springs' location at the base of Pikes Peak and along the Palmer Divide makes it one of the most hail-prone cities in America. The Palmer Divide — a ridge of elevated terrain stretching east from the mountains — acts as a trigger for severe thunderstorm development, often producing large hail that impacts the Springs and surrounding communities. Major hail events can produce stones larger than golf balls, causing extensive damage to vehicles across entire neighborhoods. Confidents PDR maintains dedicated resources for the Colorado Springs market, ensuring rapid response when storms hit. We have strong relationships with Colorado Springs insurance agents and adjusters, which helps expedite the claims and repair process for our customers.",
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
                  src="/hail-storm.jpg"
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
                        <div className="text-2xl font-black text-brand-orange">1-3</div>
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
          {["/car-red.jpg", "/car-corvette.jpg", "/car-luxury.jpg", "/car-dark.jpg", "/car-closeup.jpg", "/car-road.jpg"].map((src, i) => (
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
