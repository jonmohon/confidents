import ScrollReveal from "./ScrollReveal";

export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative pt-36 pb-20 bg-brand-dark">
      <div className="grain absolute inset-0" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-brand-orange/8 blur-[100px] rounded-full" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange mb-3">
            {label}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
