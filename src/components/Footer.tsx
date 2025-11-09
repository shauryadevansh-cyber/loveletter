import { Heart } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-red-50 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <p className="text-gray-700">
              Made with love for the most amazing person
            </p>
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
          </div>
          
          <p className="text-gray-600 mb-2">
            4 Months & Counting...
          </p>
          
          <p className="text-sm text-gray-500">
            July 4, 2024 - Forever
          </p>

          <div className="mt-8 flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
