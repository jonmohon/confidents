import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    vehicle: "2023 Audi Q5",
    location: "Castle Rock, CO",
    rating: 5,
    text: "After a nasty hail storm, I thought my Q5 was done for. Confidents came to my house, handled everything with my insurance, and two days later my car looked brand new. Seriously, you can't tell it was ever damaged.",
  },
  {
    name: "Marcus J.",
    vehicle: "2022 Ram 1500",
    location: "Littleton, CO",
    rating: 5,
    text: "Got a huge dent from a runaway shopping cart at Costco. I was quoted $1,800 at a body shop. Confidents fixed it in under 2 hours for a fraction of the cost. These guys are artists.",
  },
  {
    name: "Emily & David R.",
    vehicle: "2024 Tesla Model Y",
    location: "Parker, CO",
    rating: 5,
    text: "We were so nervous about getting our Tesla fixed — didn't want just anyone working on it. Confidents was incredibly professional, knew exactly how to work with aluminum panels, and the result was flawless.",
  },
  {
    name: "Tom H.",
    vehicle: "2021 Ford Bronco",
    location: "Aurora, CO",
    rating: 5,
    text: "Three door dings from my kid's baseball practice parking lot. Called Monday, they came Tuesday morning, and by lunch all three were gone. No paint, no filler, no BS. Just great work.",
  },
  {
    name: "Jennifer L.",
    vehicle: "2023 BMW 3 Series",
    location: "Lone Tree, CO",
    rating: 5,
    text: "I was worried about the CARFAX report since I'm planning to sell my BMW soon. Confidents explained that PDR doesn't get reported — that alone was worth it. The repair was perfect.",
  },
  {
    name: "Robert K.",
    vehicle: "2022 Chevrolet Silverado",
    location: "Castle Pines, CO",
    rating: 5,
    text: "Had extensive hail damage — over 100 dents across the hood, roof, and trunk. Confidents worked with my insurance and got it all approved. $0 out of pocket. The truck looks showroom-new.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-brand-amber" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-brand-surface border-y border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full px-6 py-3 backdrop-blur-sm">
              <Stars count={5} />
              <span className="font-bold text-white">5.0</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-500 text-sm">100+ Google Reviews</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 h-full hover:border-white/20 transition-all duration-300">
                <Stars count={t.rating} />
                <p className="text-gray-400 leading-relaxed mt-4 mb-6 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-brand-orange/20 ring-2 ring-brand-orange/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-brand-orange">
                      {t.name[0]}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-brand-orange font-medium">
                      {t.vehicle}
                    </div>
                    <div className="text-xs text-gray-600">{t.location}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
