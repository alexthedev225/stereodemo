import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HeadphonesIcon, WavesIcon } from "lucide-react";

const MusicPromo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="avantages"
      className="lg:h-[80vh] w-full p-10 flex flex-col lg:flex-row items-center justify-between 
        bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 
        relative overflow-hidden"
    >
      {/* Effet d'ondes sonores */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 pointer-events-none">
        <WavesIcon className="w-full h-full text-white" strokeWidth={0.5} />
      </div>

      {/* Image Section avec Parallaxe */}
      <motion.div
        initial={{ scale: 0.9, rotate: -2 }}
        whileInView={{ scale: 1, rotate: 0 }}
        whileHover={{
          scale: 1.05,
          rotate: 1,
          transition: { type: "spring", stiffness: 300 },
        }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start z-10 relative"
      >
        <Image
          src="/Model_Strip_Single.avif"
          alt="Casque audio haute fidélité"
          width={490}
          height={490}
          className="w-full h-auto max-w-[300px] sm:max-w-[380px] lg:max-w-[490px] 
            rounded-xl  transition-all duration-300 
            "
        />
      </motion.div>

      {/* Section Texte */}
      <div className="flex flex-col items-center w-full lg:w-1/2 px-6 lg:px-20 text-white space-y-6 text-center lg:text-left z-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge
                variant="secondary"
                className="mb-4 flex items-center gap-2 cursor-help 
                  hover:bg-white/20 transition-colors"
              >
                <HeadphonesIcon className="h-4 w-4 animate-pulse" />
                Démo Interactive
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cette démonstration simule une expérience utilisateur fictive</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight 
          text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
        >
          Une expérience imaginaire
        </h1>

        <p
          className="text-neutral-100 text-sm sm:text-base md:text-lg lg:text-xl 
          opacity-90 leading-relaxed"
        >
          Bienvenue dans cette démonstration technique explorant les possibilités
          du design interactif. Ce projet fictif illustre comment une expérience
          utilisateur moderne pourrait être conçue pour un produit audio imaginaire.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto text-pink-600 hover:text-pink-800 
              transition-all group relative overflow-hidden"
          >
            <Link href="/product-page" className="z-30">
              Explorer la Démo
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MusicPromo;
