"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    name: "Utilisateur Test 1",
    avatar: "/avatars/alice.jpg",
    text: "Ceci est un avis fictif pour démontrer la mise en page. Aucun produit réel n'est concerné.",
    rating: 5,
    profession: "Profil Demo",
  },
  {
    id: 2,
    name: "Utilisateur Test 2",
    avatar: "/avatars/marc.jpg", 
    text: "Un autre exemple d'avis fictif pour illustrer le fonctionnement du carousel.",
    rating: 4,
    profession: "Demo",
  },
  {
    id: 3,
    name: "Utilisateur Test 3",
    avatar: "/avatars/sophie.jpg",
    text: "Cette interface est purement démonstrative. Aucun produit n'est réellement en vente.",
    rating: 5,
    profession: "Test",
  },
];

const ReviewCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon 
        key={i} 
        className={`
          w-5 h-5 
          ${i < rating ? 'text-yellow-500' : 'text-gray-300'}
        `} 
      />
    ));
  };

  const currentReview = reviews[index];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentReview.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card text-card-foreground border-none shadow-2xl">
            <CardHeader className="flex flex-row items-center space-x-4 pb-0">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src={currentReview.avatar}
                  alt={`Avatar de ${currentReview.name}`}
                />
                <AvatarFallback>{currentReview.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl font-bold">
                  {currentReview.name}
                </CardTitle>
                <Badge variant="secondary" className="mt-1">
                  {currentReview.profession}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="pt-4 space-y-3">
              <div className="flex">{renderStars(currentReview.rating)}</div>
              <p className="text-lg italic text-muted-foreground">
                &quot;{currentReview.text}&quot;
              </p>
            </CardContent>

            <CardFooter className="flex justify-between items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setIndex((index - 1 + reviews.length) % reviews.length)
                }
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIndex((index + 1) % reviews.length)}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ReviewCarousel;
