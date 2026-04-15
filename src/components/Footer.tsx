import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "Door Ding Repair", href: "/services" },
  { label: "Hail Damage Repair", href: "/services" },
  { label: "Large Dent Repair", href: "/services" },
  { label: "Body Crease Repair", href: "/services" },
  { label: "How It Works", href: "/process" },
];

const areas = [
  { label: "Castle Rock", href: "/areas-we-serve/castle-rock" },
  { label: "Parker", href: "/areas-we-serve/parker" },
  { label: "Highlands Ranch", href: "/areas-we-serve/highlands-ranch" },
  { label: "Lone Tree", href: "/areas-we-serve/lone-tree" },
  { label: "Castle Pines", href: "/areas-we-serve/castle-pines" },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark border-t border-white/5">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Confidents PDR" width={200} height={80} className="h-16 w-auto mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Douglas County&apos;s premier paintless dent removal service.
              Precision repairs. Lifetime warranty. Zero hassle.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Services</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-brand-orange transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">
              <Link href="/areas-we-serve" className="hover:text-brand-orange transition-colors">
                Service Areas
              </Link>
            </h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              {areas.map((a) => (
                <li key={a.label}>
                  <Link href={a.href} className="hover:text-brand-orange transition-colors">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li>
                <a href="tel:+13033046022" className="hover:text-brand-orange transition-colors">(303) 304-6022</a>
              </li>
              <li>
                <a href="mailto:info@confidentspdr.com" className="hover:text-brand-orange transition-colors">info@confidentspdr.com</a>
              </li>
              <li>Mon-Sat: 7am - 7pm</li>
              <li>Sun: By appointment</li>
            </ul>

            <div className="flex gap-3 mt-6">
              {[
                { label: "Facebook", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                { label: "Instagram", icon: <><rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" fill="none" stroke="currentColor" /><circle cx="12" cy="12" r="5" strokeWidth="2" fill="none" stroke="currentColor" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-10 h-10 bg-white/[0.04] border border-white/10 rounded-full flex items-center justify-center text-gray-600 hover:text-brand-orange hover:border-brand-orange/30 transition-all"
                  aria-label={s.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick links row */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-sm">
          <Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link>
          <Link href="/process" className="hover:text-brand-orange transition-colors">How It Works</Link>
          <Link href="/results" className="hover:text-brand-orange transition-colors">Results</Link>
          <Link href="/reviews" className="hover:text-brand-orange transition-colors">Reviews</Link>
          <Link href="/comparison" className="hover:text-brand-orange transition-colors">PDR vs Body Shop</Link>
          <Link href="/faq" className="hover:text-brand-orange transition-colors">FAQ</Link>
          <Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link>
        </div>

        {/* Glowing divider */}
        <div className="glow-divider mt-8 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-sm">
            &copy; {new Date().getFullYear()} Confidents Paintless Dent Removal. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-700 text-sm">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Extra bottom padding for mobile sticky bar */}
      <div className="h-20 md:hidden" />
    </footer>
  );
}
