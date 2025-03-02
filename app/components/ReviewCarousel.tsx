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
    name: "Alice Dupont",
    avatar: "/avatars/alice.jpg",
    text: "Un son incroyable ! J'ai redécouvert ma musique préférée avec une qualité exceptionnelle.",
    rating: 5,
    profession: "Musicienne",
  },
  {
    id: 2,
    name: "Marc Lemoine",
    avatar: "/avatars/marc.jpg", 
    text: "Très confortable et une autonomie de batterie impressionnante. Un must-have !",
    rating: 4,
    profession: "Ingénieur",
  },
  {
    id: 3,
    name: "Sophie Martin",
    avatar: "/avatars/sophie.jpg",
    text: "Le design est magnifique et le son est parfait. Je recommande à 100% !",
    rating: 5,
    profession: "Designer",
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
