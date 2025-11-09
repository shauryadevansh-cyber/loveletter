import { Heart, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface HeroProps {
  onOpenLetter: () => void;
}

export function Hero({ onOpenLetter }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NjIyNzg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Romantic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-rose-900/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="inline-block mb-6"
        >
          <Heart className="w-16 h-16 text-red-500 fill-red-500 drop-shadow-lg" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white mb-4"
        >
          Four Beautiful Months
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Every moment with you has been a treasure. This is our story, our memories, and a love letter to celebrate us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button
            onClick={onOpenLetter}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 gap-2 shadow-xl hover:shadow-2xl transition-all"
          >
            <Mail className="w-5 h-5" />
            Open My Love Letter
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 text-white/80"
        >
          <p>Since July 4, 2024</p>
        </motion.div>
      </motion.div>

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ y: '100%', x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{
              y: '-100%',
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear',
            }}
          >
            <Heart className="w-4 h-4 text-red-300 fill-red-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
