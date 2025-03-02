"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from 'react';

interface ScrollContextType {
  scrollToSection: (id: string) => void;
  section: string | null;
}

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
  section: null,
});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();

  const SearchParamsWrapper = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
      const sectionFromURL = searchParams.get("section");
      if (sectionFromURL) {
        // Scroll vers la section uniquement si on est sur la page d'accueil
        if (pathname === "/") {
          setSection(sectionFromURL);
          setTimeout(() => {
            const targetElement = document.getElementById(sectionFromURL);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300); // Laisser le temps au rendu
        }
      }
    }, [searchParams]); // Le pathname doit aussi être dans les dépendances pour surveiller les changements d'URL

    return null;
  };

  const scrollToSection = (id: string) => {
    setSection(id);
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection, section }}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper />
      </Suspense>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
