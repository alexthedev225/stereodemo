"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SpeakerWaveIcon,
  WifiIcon,
  Battery100Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Features: React.FC = () => {
  const features = [
    {
      icon: SpeakerWaveIcon,
      iconColor: "text-blue-400",
      title: "Son de haute qualité",
      description:
        "Profitez d'un son immersif avec des basses profondes et des aigus cristallins pour une expérience audio exceptionnelle.",
      badge: "Premium Audio",
      tooltipDetails: {
        title: "Technologie Audio Avancée",
        details: [
          "Drivers dynamiques de 40mm",
          "Réponse en fréquence : 20Hz - 20kHz",
          "Distorsion harmonique totale < 0.1%",
          "Séparation stéréo optimisée"
        ]
      }
    },
    {
      icon: WifiIcon,
      iconColor: "text-green-400",
      title: "Écoute facile sans fil",
      description:
        "Connexion sans fil rapide et stable grâce à la technologie Bluetooth avancée.",
      badge: "Bluetooth 5.2",
      tooltipDetails: {
        title: "Connectivité de Pointe",
        details: [
          "Portée jusqu'à 10 mètres",
          "Appairage multipoint",
          "Latence réduite de 50%",
          "Compatibilité universelle"
        ]
      }
    },
    {
      icon: Battery100Icon,
      iconColor: "text-yellow-400",
      title: "Autonomie de batterie plus longue",
      description:
        "Jusqu'à 40 heures d'écoute continue avec une charge rapide et efficace.",
      badge: "Longue durée",
      tooltipDetails: {
        title: "Performance Énergétique",
        details: [
          "Batterie Li-ion 500mAh",
          "Charge rapide : 10 min = 2h d'écoute",
          "Mode économie d'énergie",
          "Témoin de batterie intégré"
        ]
      }
    },
    {
      icon: SparklesIcon,
      iconColor: "text-pink-400",
      title: "Conception élégante et moderne",
      description:
        "Design épuré et minimaliste avec des matériaux premium pour un look sophistiqué.",
      badge: "Design",
      tooltipDetails: {
        title: "Design Ergonomique",
        details: [
          "Matériaux : Aluminium et cuir végétal",
          "Poids ultra-léger : 180g",
          "Coussinets à mémoire de forme",
          "Ajustement personnalisé"
        ]
      }
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Fonctionnalités Démonstratives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            [Projet Demo] Ces caractéristiques sont présentées à titre d'exemple uniquement
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={featureVariants}
              custom={index}
              className="flex justify-center"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <Card
                      className="
                        w-full 
                        h-full 
                        min-h-[350px] 
                        max-w-[300px] 
                        bg-white 
                        border-gray-200 
                        hover:border-pink-500/50 
                        hover:shadow-lg
                        transition-all 
                        duration-300 
                        group 
                        flex 
                        flex-col 
                        justify-between
                        mx-auto
                      "
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <feature.icon
                            className={`
                              h-10 w-10 
                              ${feature.iconColor} 
                              group-hover:scale-110 
                              transition-transform
                            `}
                          />
                          <Badge
                            variant="outline"
                            className="
                              text-gray-600 
                              group-hover:bg-pink-500 
                              group-hover:text-white 
                              transition-colors
                            "
                          >
                            {feature.badge}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between space-y-4 text-left">
                        <div>
                          <CardTitle
                            className="
                              text-lg 
                              md:text-xl 
                              font-semibold 
                              text-gray-900 
                              mb-4
                              min-h-[60px]
                            "
                          >
                            {feature.title}
                          </CardTitle>
                          <p
                            className="
                              text-sm 
                              md:text-base 
                              font-light 
                              text-gray-600
                              min-h-[100px]
                            "
                          >
                            {feature.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="right"
                    align="center"
                    className="
                      bg-white 
                      border 
                      border-pink-100 
                      shadow-xl 
                      p-4 
                      w-[320px] 
                      rounded-lg
                    "
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <feature.icon 
                          className={`
                            h-6 w-6 
                            ${feature.iconColor}
                          `}
                        />
                        <h4 className="font-bold text-base text-gray-900">
                          {feature.tooltipDetails.title}
                        </h4>
                      </div>
                      <div className="border-t border-pink-100 my-2"></div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {feature.tooltipDetails.details.map((detail, idx) => (
                          <li 
                            key={idx} 
                            className="
                              flex 
                              items-center 
                              space-x-2 
                              before:content-['•'] 
                              before:text-pink-500 
                              before:mr-2
                            "
                          >
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
