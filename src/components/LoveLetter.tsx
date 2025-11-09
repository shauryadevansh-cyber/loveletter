import { X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

interface LoveLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoveLetter({ isOpen, onClose }: LoveLetterProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Letter */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="pointer-events-auto relative max-w-2xl w-full"
            >
              {/* Letter Paper */}
              <div
                className="bg-amber-50 rounded-lg shadow-2xl border-2 border-amber-200 p-8 md:p-12 max-h-[80vh] overflow-y-auto"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(251, 191, 36, 0.05) 1px, transparent 1px)`,
                  backgroundSize: '100% 24px',
                }}
              >
                {/* Close Button */}
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="absolute top-4 right-4 rounded-full w-8 h-8 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Letter Header */}
                <div className="text-center mb-8">
                  <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-4" />
                  <h2 className="text-red-600 mb-2">To My Love</h2>
                  <p className="text-gray-500">November 4, 2024</p>
                </div>

                {/* Letter Content */}
                <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-red-500 first-letter:mr-1 first-letter:float-left">
                    My Dearest,
                  </p>

                  <p>
                    As I sit down to write this, my heart is overflowing with emotions that words can barely capture.
                    Four months ago, you walked into my life, and everything changed. What started as a chance meeting
                    has blossomed into something more beautiful than I ever imagined.
                  </p>

                  <p>
                    Every day with you feels like a gift. Your laugh is my favorite sound, your smile my favorite sight,
                    and your presence my favorite place to be. You've shown me what it means to truly connect with
                    another person, to share not just moments but dreams, fears, and everything in between.
                  </p>

                  <p>
                    I love the way you see the world with such wonder and kindness. I love how you make ordinary moments
                    feel extraordinary. Whether we're exploring new places, having deep conversations over coffee, or
                    simply enjoying comfortable silence together, every second spent with you is precious.
                  </p>

                  <p>
                    These four months have taught me that love isn't just about the grand gestures or the perfect moments
                    -- it's about choosing each other every single day. It's about growing together, supporting each
                    other's dreams, and building something real and lasting.
                  </p>

                  <p>
                    Thank you for being you. Thank you for your patience, your understanding, and your unwavering support.
                    Thank you for sharing your world with me and letting me share mine with you. Thank you for making me
                    a better person just by being in my life.
                  </p>

                  <p>
                    As we celebrate four months together, I want you to know that this is just the beginning. I can't wait
                    to create more memories with you, to face new adventures together, and to see where this beautiful
                    journey takes us.
                  </p>

                  <p>
                    You are my inspiration, my comfort, and my joy. Here's to us, to our story, and to all the chapters
                    yet to be written.
                  </p>

                  <div className="mt-8 pt-8 border-t border-amber-300">
                    <p className="text-right">
                      Forever yours,
                      <br />
                      <span className="inline-block mt-2">
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 inline mr-2" />
                        Your Love
                      </span>
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 opacity-20">
                  <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                </div>
                <div className="absolute bottom-4 right-12 opacity-20">
                  <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                </div>
              </div>

              {/* Envelope Shadow */}
              <div className="absolute inset-x-4 bottom-0 h-4 bg-red-900/20 rounded-b-lg blur-lg -z-10" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
