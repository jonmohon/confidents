import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Confidents PDR"
              width={200}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Denver Metro&apos;s premier paintless dent removal service.
              Precision repairs. Lifetime warranty. Zero hassle.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Door Ding Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Hail Damage Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Large Dent Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Body Crease Repair
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">
                  Fleet Services
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Denver</li>
              <li>Castle Rock</li>
              <li>Littleton</li>
              <li>Parker</li>
              <li>Aurora</li>
              <li>Lone Tree</li>
              <li>Colorado Springs</li>
              <li>SW Denver Metro</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <a
                  href="tel:+17205551234"
                  className="hover:text-brand-orange transition-colors"
                >
                  (720) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@confidentspdr.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  info@confidentspdr.com
                </a>
              </li>
              <li>Mon-Sat: 7am - 7pm</li>
              <li>Sun: By appointment</li>
            </ul>

            {/* Social placeholder */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/50 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/50 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/50 transition-all"
                aria-label="Google"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Confidents Paintless Dent
            Removal. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
