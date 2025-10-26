import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-xl font-bold tracking-wider inline-block"
            >
              audiophile
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row gap-6 lg:justify-end lg:items-start">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wider hover:text-[#D87D4A] transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/headphones"
              className="text-sm font-semibold tracking-wider hover:text-[#D87D4A] transition-colors"
            >
              HEADPHONES
            </Link>
            <Link
              href="/speakers"
              className="text-sm font-semibold tracking-wider hover:text-[#D87D4A] transition-colors"
            >
              SPEAKERS
            </Link>
            <Link
              href="/earphones"
              className="text-sm font-semibold tracking-wider hover:text-[#D87D4A] transition-colors"
            >
              EARPHONES
            </Link>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400 text-sm">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;