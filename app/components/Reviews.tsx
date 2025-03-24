import { motion } from 'framer-motion';
import { 
  Card, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

import ReviewCarousel from "./ReviewCarousel";

const Reviews = () => {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Avis Fictifs pour Démonstration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ces témoignages sont imaginaires et servent uniquement à illustrer les fonctionnalités du site.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <ReviewCarousel />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Card className="max-w-xl mx-auto bg-secondary/10 border-none">
            <CardHeader>
              <CardTitle className="text-2xl">
                Site de Démonstration
              </CardTitle>
              <CardDescription>
                Cette interface est un projet expérimental créé à des fins de démonstration technique.
                Aucune transaction réelle n'est possible.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
