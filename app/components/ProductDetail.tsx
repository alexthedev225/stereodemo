"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {

  Minus,
  Plus,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import PaymentForm from "./PaymentForm";

// Définition du type pour les couleurs disponibles
type Color = "noir" | "or" | "blanc";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState<Color>("noir");
  const [selectedImage, setSelectedImage] = useState("/img1.webp");
  const [quantity, setQuantity] = useState(1);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Typage des images avec Record<Color, string[]>
  const colorImages: Record<Color, string[]> = {
    noir: ["/img1.webp"],
    or: ["/img3.webp", "/img2.webp"],
    blanc: ["/img4.webp"],
  };

  const handleColorChange = (color: Color) => {
    setSelectedColor(color);
    setSelectedImage(colorImages[color][0]);
  };

  return (
    <div className="w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <Card className="border-none shadow-none w-full max-w-md group relative overflow-hidden rounded-2xl">
            <CardContent className="p-0 relative">
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  opacity: 0.9,
                  transition: { duration: 0.3 },
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={selectedImage}
                  alt={`Casque ${selectedColor}`}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain transition-all duration-300 ease-in-out group-hover:brightness-90"
                  style={{
                    filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.15))",
                    borderRadius: "16px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Miniatures */}
          <div className="mt-6 flex justify-center space-x-4">
            {colorImages[selectedColor].map((img, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      <Image
                        src={img}
                        alt={`Modèle ${index + 1}`}
                        width={64}
                        height={64}
                        className={`
                          w-16 h-16 
                          object-cover 
                          rounded-xl 
                          cursor-pointer 
                          border-2 
                          transition 
                          ${
                            selectedImage === img
                              ? "border-pink-500 scale-110"
                              : "border-transparent"
                          }
                          hover:brightness-90
                        `}
                        style={{
                          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                        }}
                        onClick={() => setSelectedImage(img)}
                      />
                      {selectedImage === img && (
                        <div className="absolute -inset-1 bg-pink-500/20 rounded-xl animate-pulse"></div>
                      )}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>Voir cette image</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </motion.div>

        {/* Section Détails */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 text-pink-600">
            Projet Demo - Produit Fictif
          </Badge>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Casque Stereo Pro (Démo)
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Note : Ceci est un projet expérimental à but démonstratif uniquement. Aucun produit réel n'est en vente.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Couleur :
            <span className="font-semibold ml-2 capitalize">
              {selectedColor}
            </span>
          </p>

          <p className="text-3xl font-bold text-gray-900 mb-6">199,99 €</p>

          {/* Sélection Couleur */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choisissez votre couleur
            </h3>
            <div className="flex space-x-4">
              {(["noir", "or", "blanc"] as Color[]).map((color) => (
                <TooltipProvider key={color}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        onClick={() => handleColorChange(color)}
                        className={`
                          w-12 h-12 
                          rounded-full 
                          border-2 
                          cursor-pointer 
                          transition 
                          ${
                            selectedColor === color
                              ? "border-pink-500 scale-110"
                              : "border-transparent"
                          }
                        `}
                        style={{
                          background:
                            color === "noir"
                              ? "linear-gradient(135deg, #000 0%, #333 100%)"
                              : color === "or"
                              ? "linear-gradient(135deg, #c9a94c 0%, #e0b755 100%)"
                              : "linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)",
                          boxShadow:
                            color === "blanc"
                              ? "0 0 0 2px rgba(224,224,224,0.5), 0 1px 4px rgba(0,0,0,0.1)"
                              : color === "or"
                              ? "0 0 0 1px rgba(201,169,76,0.3), 0 1px 3px rgba(201,169,76,0.1)"
                              : "0 0 0 1px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.1)",
                          border:
                            color === "blanc"
                              ? "1px solid rgba(224,224,224,0.5)"
                              : "none",
                        }}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      {color === "noir"
                        ? "Noir Profond"
                        : color === "or"
                        ? "Or Élégant"
                        : "Blanc Classique"}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Quantité */}
          <div className="mb-6 flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-900">
              Quantité
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Formulaire de Paiement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <PaymentForm
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setPaymentStatus={setPaymentStatus}
            />
          </motion.div>

          {/* Résultat du Paiement */}
          {paymentStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-green-600 bg-green-50 p-4 rounded-lg"
            >
              <p className="font-semibold">Simulation de paiement réussie !</p>
              <p className="text-sm">
                Ceci est une démonstration - aucune transaction réelle n'a été effectuée.
              </p>
            </motion.div>
          )}

          {paymentStatus === "failure" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-red-600 bg-red-50 p-4 rounded-lg"
            >
              <p className="font-semibold">Échec du paiement</p>
              <p className="text-sm">
                Veuillez vérifier vos informations de paiement et réessayer.
              </p>
            </motion.div>
          )}

          {/* Informations Supplémentaires */}
          <div className="mt-8">
            <Button
              variant="ghost"
              className="w-full justify-between"
              onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
            >
              <div className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-gray-600" />
                <span>Informations supplémentaires</span>
              </div>
              {showAdditionalInfo ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </Button>

            {showAdditionalInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4 text-gray-700"
              >
                <div>
                  <h3 className="font-semibold mb-2">Important - Projet Demo</h3>
                  <p className="text-sm text-gray-600">
                    Ce site est une démonstration technique. Aucun produit réel n'est disponible à la vente.
                    Les prix et caractéristiques sont fictifs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Politique de livraison</h3>
                  <p className="text-sm text-gray-600">
                    Livraison gratuite sous 5 à 7 jours ouvrés.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
