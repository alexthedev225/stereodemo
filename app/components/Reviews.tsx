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
            Nos clients adorent Stéréo Démo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez les témoignages authentiques de passionnés de musique qui ont transformé leur expérience sonore.
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
                Votre expérience compte
              </CardTitle>
              <CardDescription>
                Chaque avis nous aide à améliorer nos produits et à offrir une expérience sonore toujours plus exceptionnelle.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
