"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

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
  }, [searchParams, pathname]); // Le pathname doit aussi être dans les dépendances pour surveiller les changements d'URL

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
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
