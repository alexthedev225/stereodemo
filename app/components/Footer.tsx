"use client";

import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const socialLinks = [
  { 
    icon: Facebook, 
    href: "https://facebook.com/stereodemo",
    label: "Facebook" 
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com/stereodemo",
    label: "Instagram" 
  },
  { 
    icon: Twitter, 
    href: "https://twitter.com/stereodemo",
    label: "Twitter" 
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com/company/stereodemo",
    label: "LinkedIn" 
  }
];

const Footer = () => {
  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1: Logo et Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-foreground">Stéréo Démo</h2>
            <p className="text-muted-foreground">
              Révolutionnez votre expérience musicale avec nos écouteurs haute
              fidélité conçus pour les passionnés.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2: Liens Rapides */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Liens Rapides
            </h3>
            <nav className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "Produits", href: "/produits" },
                { label: "À Propos", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Support", href: "/support" },
              ].map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Colonne 3: Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <Card className="bg-secondary/10 border-none">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Restez Connecté
                </h3>
                <p className="text-muted-foreground text-sm">
                  Abonnez-vous à notre newsletter pour des offres exclusives
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="flex-grow"
                  />
                  <Button>S&apos;abonner</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center text-muted-foreground"
        >
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
            <p>{new Date().getFullYear()} Stéréo Démo. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link
                href="/mentions-legales"
                className="hover:text-primary transition-colors"
              >
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
