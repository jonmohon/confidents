"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#comparison", label: "PDR vs Body Shop" },
  { href: "#gallery", label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Confidents Paintless Dent Removal"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+17205551234"
              className="text-white/90 hover:text-brand-orange transition-colors text-sm font-semibold"
            >
              (720) 555-1234
            </a>
            <a
              href="#contact"
              className="bg-brand-orange hover:bg-brand-amber text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-white/80 hover:text-brand-orange transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:+17205551234"
                className="text-brand-orange font-bold text-lg"
              >
                (720) 555-1234
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-brand-orange text-white font-bold text-center px-6 py-3 rounded-full"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
