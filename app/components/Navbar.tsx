"use client";

import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useScroll } from "../context/ScrollContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { scrollToSection } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    if (window.location.pathname === "/") {
      const url = new URL(window.location.href);
      url.searchParams.set("section", id);
      window.history.pushState({}, "", url.toString());
      scrollToSection(id);
    } else {
      window.location.href = `/?section=${id}`;
    }

    setIsMenuOpen(false); // Fermer le menu mobile
  };

  return (
    <div className="flex flex-col w-full shadow-sm">
      {/* Navbar Mobile */}
      <div className="md:hidden flex flex-col bg-white text-gray-900">
        {/* Barre du haut */}
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <MusicalNoteIcon className="h-6 w-6 text-pink-500 animate-pulse" />
            <span className="text-2xl font-semibold text-gray-900">Stéréo</span>
          </Link>

          {/* Menu Mobile avec Shadcn Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900 hover:bg-transparent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-gray-900 border-none">
              <SheetHeader>
                <SheetTitle className="text-pink-500">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-5 mt-8">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-800 hover:text-pink-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <button
                  onClick={() => handleNavigation("features")}
                  className="text-sm font-medium text-gray-800 hover:text-pink-600 transition text-left"
                >
                  Avantages
                </button>
                <button
                  onClick={() => handleNavigation("reviews")}
                  className="text-sm font-medium text-gray-800 hover:text-pink-600 transition text-left"
                >
                  Avis
                </button>
                <Link href="/product-page">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white text-sm py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition-transform w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commander
                  </motion.button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar Desktop */}
      <div className="hidden md:flex justify-between items-center px-12 py-6 bg-white text-gray-900 shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <MusicalNoteIcon className="h-7 w-7 text-pink-500 animate-pulse" />
          <span className="text-2xl font-semibold tracking-wide text-gray-900">Stéréo</span>
        </Link>

        {/* Liens */}
        <div className="flex space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-800 hover:text-pink-600 transition"
          >
            Accueil
          </Link>
          <button
            onClick={() => handleNavigation("features")}
            className="text-sm font-medium text-gray-800 hover:text-pink-600 transition"
          >
            Avantages
          </button>
          <button
            onClick={() => handleNavigation("reviews")}
            className="text-sm font-medium text-gray-800 hover:text-pink-600 transition"
          >
            Avis
          </button>
        </div>

        {/* Bouton Commander */}
        <Link href="/product-page">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white text-sm py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition-transform"
          >
            Commander
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
