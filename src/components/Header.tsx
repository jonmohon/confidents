"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { href: "/services", label: "Our Services", desc: "Door dings, hail, large dents & more" },
  { href: "/process", label: "How It Works", desc: "Our simple 6-step repair process" },
];

const resultLinks = [
  { href: "/results", label: "Our Results", desc: "Before & after repair gallery" },
  { href: "/reviews", label: "Customer Reviews", desc: "100+ five-star Google reviews" },
];

const resourceLinks = [
  { href: "/comparison", label: "PDR vs Body Shop", desc: "See why PDR is the smarter choice" },
  { href: "/faq", label: "FAQ", desc: "Answers to common PDR questions" },
  { href: "/blog", label: "Blog", desc: "Tips, news & hail season updates" },
];

const areas = [
  { slug: "denver", name: "Denver" },
  { slug: "castle-rock", name: "Castle Rock" },
  { slug: "littleton", name: "Littleton" },
  { slug: "parker", name: "Parker" },
  { slug: "aurora", name: "Aurora" },
  { slug: "lone-tree", name: "Lone Tree" },
  { slug: "colorado-springs", name: "Colorado Springs" },
];

type DropdownId = "services" | "results" | "resources" | "areas" | null;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = useCallback((id: DropdownId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (links: { href: string }[]) =>
    links.some((l) => pathname === l.href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-lg shadow-xl shadow-black/20 py-1"
          : "bg-brand-dark/80 backdrop-blur-md py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Confidents Paintless Dent Removal"
              width={280}
              height={90}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-14" : "h-20"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isGroupActive(serviceLinks)
                    ? "text-brand-orange"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-200 origin-top ${
                  openDropdown === "services"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-3.5 transition-colors border-b border-white/5 last:border-0 ${
                      isActive(link.href)
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${isActive(link.href) ? "text-brand-orange" : "text-white"}`}>
                      {link.label}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Results Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("results")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isGroupActive(resultLinks)
                    ? "text-brand-orange"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Results
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "results" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-200 origin-top ${
                  openDropdown === "results"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {resultLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-3.5 transition-colors border-b border-white/5 last:border-0 ${
                      isActive(link.href)
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${isActive(link.href) ? "text-brand-orange" : "text-white"}`}>
                      {link.label}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isGroupActive(resourceLinks)
                    ? "text-brand-orange"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Resources
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "resources" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-200 origin-top ${
                  openDropdown === "resources"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-3.5 transition-colors border-b border-white/5 last:border-0 ${
                      isActive(link.href)
                        ? "bg-brand-orange/10 text-brand-orange"
                        : "hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${isActive(link.href) ? "text-brand-orange" : "text-white"}`}>
                      {link.label}
                    </span>
                    <span className="block text-xs text-gray-500 mt-0.5">
                      {link.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("areas")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname.startsWith("/areas-we-serve")
                    ? "text-brand-orange"
                    : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                Areas We Serve
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === "areas" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full right-0 mt-1 w-64 bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-200 origin-top ${
                  openDropdown === "areas"
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <Link
                  href="/areas-we-serve"
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-brand-orange hover:bg-white/[0.06] transition-colors border-b border-white/5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  All Service Areas
                </Link>
                <div className="grid grid-cols-2 gap-px bg-white/5">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas-we-serve/${area.slug}`}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === `/areas-we-serve/${area.slug}`
                          ? "bg-brand-orange/10 text-brand-orange"
                          : "bg-brand-dark/90 text-white/60 hover:text-brand-orange hover:bg-white/[0.06]"
                      }`}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17205551234"
              className="flex items-center gap-2 text-white/90 hover:text-brand-orange transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (720) 555-1234
            </a>
            <Link
              href="/contact"
              className="btn-shine bg-brand-orange hover:bg-brand-amber text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 active:scale-95"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-brand-dark/95 backdrop-blur-lg border-t border-white/10 px-4 py-5 space-y-1">
          {/* Services group */}
          <MobileDropdown
            label="Services"
            expanded={mobileExpanded === "services"}
            onToggle={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
          >
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-brand-orange font-semibold"
                    : "text-white/60 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </MobileDropdown>

          {/* Results group */}
          <MobileDropdown
            label="Results"
            expanded={mobileExpanded === "results"}
            onToggle={() => setMobileExpanded(mobileExpanded === "results" ? null : "results")}
          >
            {resultLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-brand-orange font-semibold"
                    : "text-white/60 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </MobileDropdown>

          {/* Areas group */}
          <MobileDropdown
            label="Areas We Serve"
            expanded={mobileExpanded === "areas"}
            onToggle={() => setMobileExpanded(mobileExpanded === "areas" ? null : "areas")}
          >
            <Link
              href="/areas-we-serve"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-brand-orange font-semibold"
            >
              All Service Areas
            </Link>
            <div className="grid grid-cols-2 gap-x-4">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas-we-serve/${area.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-1.5 text-sm transition-colors ${
                    pathname === `/areas-we-serve/${area.slug}`
                      ? "text-brand-orange"
                      : "text-white/60 hover:text-brand-orange"
                  }`}
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </MobileDropdown>

          {/* Resources group */}
          <MobileDropdown
            label="Resources"
            expanded={mobileExpanded === "resources"}
            onToggle={() => setMobileExpanded(mobileExpanded === "resources" ? null : "resources")}
          >
            {resourceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-brand-orange font-semibold"
                    : "text-white/60 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </MobileDropdown>

          {/* Contact standalone */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`block py-3 font-medium transition-colors ${
              isActive("/contact")
                ? "text-brand-orange"
                : "text-white/80 hover:text-brand-orange"
            }`}
          >
            Contact
          </Link>

          {/* CTA section */}
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+17205551234"
              className="flex items-center justify-center gap-2 text-brand-orange font-bold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (720) 555-1234
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-brand-orange text-white font-bold text-center px-6 py-3 rounded-full shadow-lg shadow-brand-orange/20"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileDropdown({
  label,
  expanded,
  onToggle,
  children,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-white/80 hover:text-brand-orange transition-colors font-medium"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 pb-2 border-l-2 border-brand-orange/30">
          {children}
        </div>
      </div>
    </div>
  );
}
