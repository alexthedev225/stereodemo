"use client";

import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne Projet */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-800">Projet Expérimental</h3>
            <p className="text-sm text-neutral-600">
              Cette interface est une démonstration technique créée à des fins 
              d&apos;apprentissage. Aucun produit réel n&apos;est commercialisé.
            </p>
          </div>

          {/* Colonne Technologies */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-800">Technologies</h3>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>Framer Motion</li>
              <li>Shadcn UI</li>
            </ul>
          </div>

          {/* Colonne Liens */}
          <div className="space-y-3">
            <h3 className="font-semibold text-neutral-800">Ressources</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://github.com" 
                className="flex items-center text-sm text-neutral-600 hover:text-neutral-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Code source
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Démo Technique - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
