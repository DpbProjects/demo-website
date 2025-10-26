import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-neutral-900 text-white border-b border-neutral-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-wider">
            audiophile
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#D87D4A]"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-neutral-900 text-white border-neutral-800"
              >
                <nav className="flex flex-col gap-6 mt-8">
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
