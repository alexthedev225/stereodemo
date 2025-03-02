"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface Props {
  backgroundImage: string;
}

const Header: React.FC<Props> = ({ backgroundImage }) => {
  return (
    <div className="w-full h-[45vh] sm:h-[60vh] md:h-[80vh] lg:h-screen relative flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="
          absolute 
          inset-0 
          bg-cover 
          bg-center 
          bg-no-repeat 
          transform 
          scale-105 
          transition-all 
          duration-500 
          hover:scale-100
        "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 hover:bg-opacity-60 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          relative 
          z-10 
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          h-full 
          px-4 
          sm:px-6 
          md:px-8
        "
      >
        <div className="max-w-screen-xl text-white text-center">
          <Badge
            className="
              mb-3 
              sm:mb-4 
              bg-pink-500 
              hover:bg-pink-600 
              text-xs 
              sm:text-sm
            "
          >
            Édition Limitée
          </Badge>

          <h1
            className="
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              font-bold 
              leading-tight 
              mb-4 
              sm:mb-6
            "
          >
            Stéréo <span className="text-pink-500">ERD-3083</span>
            <br className="hidden sm:block" />
            Réinventer le son
          </h1>

          <p
            className="
              text-sm 
              sm:text-base 
              md:text-lg 
              text-gray-300 
              max-w-xl 
              mx-auto 
              mb-6 
              sm:mb-8
            "
          >
            Une expérience audio révolutionnaire qui transcende les limites de
            la perception sonore.
          </p>

          <div className="flex justify-center space-x-4">
            <Link href="/product-page">
              <Button
                className="
                bg-pink-500 
                hover:bg-pink-600 
                text-sm 
                sm:text-base
              "
                size="lg"
              >
                <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />{" "}
                Commander
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
