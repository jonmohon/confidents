const testimonials = [
  {
    name: "Sarah M.",
    vehicle: "2023 Audi Q5",
    location: "Castle Rock, CO",
    rating: 5,
    text: "After a nasty hail storm, I thought my Q5 was done for. Confidents came to my house, handled everything with my insurance, and two days later my car looked brand new. Seriously, you can't tell it was ever damaged. The lifetime warranty is the cherry on top.",
  },
  {
    name: "Marcus J.",
    vehicle: "2022 Ram 1500",
    location: "Littleton, CO",
    rating: 5,
    text: "Got a huge dent from a runaway shopping cart at Costco. I was quoted $1,800 at a body shop. Confidents fixed it in under 2 hours for a fraction of the cost, and you literally cannot see where the dent was. These guys are artists.",
  },
  {
    name: "Emily & David R.",
    vehicle: "2024 Tesla Model Y",
    location: "Parker, CO",
    rating: 5,
    text: "We were so nervous about getting our Tesla fixed — didn't want just anyone working on it. Confidents was incredibly professional, knew exactly how to work with the aluminum panels, and the result was flawless. Highly recommend!",
  },
  {
    name: "Tom H.",
    vehicle: "2021 Ford Bronco",
    location: "Aurora, CO",
    rating: 5,
    text: "Three door dings from my kid's baseball practice parking lot. Called Confidents on Monday, they came out Tuesday morning, and by lunch all three were gone. No paint, no filler, no BS. Just great work. Will definitely use them again.",
  },
  {
    name: "Jennifer L.",
    vehicle: "2023 BMW 3 Series",
    location: "Lone Tree, CO",
    rating: 5,
    text: "I was worried about the CARFAX report since I'm planning to sell my BMW soon. Confidents explained that PDR doesn't get reported — that alone was worth it. The repair itself was perfect, and they saved me about $2,000 vs. the dealer quote.",
  },
  {
    name: "Robert K.",
    vehicle: "2022 Chevrolet Silverado",
    location: "Colorado Springs, CO",
    rating: 5,
    text: "Had extensive hail damage — over 100 dents across the hood, roof, and trunk. Confidents worked with my insurance and got it all approved. $0 out of pocket. The truck looks showroom-new. Can't say enough good things.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
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

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-dark mb-4">
            What Our <span className="text-brand-orange">Customers</span> Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what real
            customers across the Denver Metro area have to say.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 bg-brand-light rounded-full px-6 py-3">
            <Stars count={5} />
            <span className="font-bold text-brand-dark">5.0</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 text-sm">100+ Google Reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-brand-light rounded-xl p-8 border border-gray-100"
            >
              <Stars count={t.rating} />
              <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-brand-dark">{t.name}</div>
                <div className="text-sm text-brand-orange font-medium">
                  {t.vehicle}
                </div>
                <div className="text-sm text-gray-400">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
