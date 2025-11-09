import { Heart, Calendar, Coffee, Star, Sparkles, Camera, Music, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Polaroid {
  image: string;
  caption: string;
  date: string;
  rotation: number;
  icon: React.ElementType;
}

const polaroids: Polaroid[] = [
  {
    image: 'https://images.unsplash.com/photo-1609561026486-f5d4a3c4c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NjIyNzg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Our First Meeting',
    date: 'July 4, 2024',
    rotation: -3,
    icon: Sparkles,
  },
  {
    image: 'https://images.unsplash.com/photo-1532302584927-8bd4b6118390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzYyMjg4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'First Coffee Date',
    date: 'July 15, 2024',
    rotation: 2,
    icon: Coffee,
  },
  {
    image: 'https://images.unsplash.com/photo-1570610222761-b08cb1d09a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVyJTIwdmludGFnZXxlbnwxfHx8fDE3NjIyOTA5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Made It Official',
    date: 'August 1, 2024',
    rotation: -2,
    icon: Heart,
  },
  {
    image: 'https://images.unsplash.com/photo-1650737779186-4073102e1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YWxraW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyMjkwOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Our First Adventure',
    date: 'August 20, 2024',
    rotation: 3,
    icon: Camera,
  },
];

export function LetterContent() {
  return (
    <div className="relative min-h-screen pb-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      {/* Letter Paper */}
      <div className="max-w-4xl mx-auto px-4 pt-32 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-amber-50 rounded-lg shadow-2xl border-2 border-amber-200 p-8 md:p-16 relative"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(251, 191, 36, 0.05) 1px, transparent 1px)`,
            backgroundSize: '100% 32px',
          }}
        >
          {/* Letter Header */}
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-4" />
            <h1 className="text-red-600 mb-2">To My Dearest Love</h1>
            <p className="text-gray-500">November 4, 2024</p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-red-400" />
              <p className="text-gray-600">Four Months of Beautiful Memories</p>
            </div>
          </div>

          {/* Letter Content with Polaroids */}
          <div className="space-y-12 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
            {/* Opening */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-red-500 first-letter:mr-1 first-letter:float-left">
                My Dearest,
              </p>
              <p className="mt-4">
                As I sit down to write this, my heart is overflowing with emotions that words can barely capture.
                Four months ago, you walked into my life, and everything changed. What started as a chance meeting
                has blossomed into something more beautiful than I ever imagined.
              </p>
            </motion.div>

            {/* First Polaroid - Our First Meeting */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              whileInView={{ opacity: 1, rotate: polaroids[0].rotation, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative my-16 -mx-4 md:mx-0"
            >
              <div className="inline-block bg-white p-4 shadow-xl" style={{ transform: `rotate(${polaroids[0].rotation}deg)` }}>
                <div className="relative aspect-square w-full md:w-80">
                  <ImageWithFallback
                    src={polaroids[0].image}
                    alt={polaroids[0].caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    {polaroids[0].caption}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{polaroids[0].date}</p>
              </div>
              {/* Pin */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full shadow-md border-2 border-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                I remember the butterflies I felt when I first saw you. The way your smile lit up the room,
                and how naturally conversation flowed between us. It felt like I had known you forever,
                yet everything was excitingly new.
              </p>
            </motion.div>

            {/* Second Polaroid - First Date */}
            <motion.div
              initial={{ opacity: 0, rotate: 10, y: 20 }}
              whileInView={{ opacity: 1, rotate: polaroids[1].rotation, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative my-16 md:ml-auto md:mr-8 max-w-fit"
            >
              <div className="inline-block bg-white p-4 shadow-xl" style={{ transform: `rotate(${polaroids[1].rotation}deg)` }}>
                <div className="relative aspect-square w-full md:w-80">
                  <ImageWithFallback
                    src={polaroids[1].image}
                    alt={polaroids[1].caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-amber-700" />
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    {polaroids[1].caption}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{polaroids[1].date}</p>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full shadow-md border-2 border-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                Our first coffee date... I still remember every detail. The way you laughed at my terrible jokes,
                how the hours flew by like minutes, and how I didn't want that day to end. I walked away knowing
                that you were someone truly special.
              </p>
              <p>
                Every day with you feels like a gift. Your laugh is my favorite sound, your smile my favorite sight,
                and your presence my favorite place to be. You've shown me what it means to truly connect with
                another person, to share not just moments but dreams, fears, and everything in between.
              </p>
            </motion.div>

            {/* Third Polaroid - Official */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, y: 20 }}
              whileInView={{ opacity: 1, rotate: polaroids[2].rotation, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative my-16 md:ml-8 max-w-fit"
            >
              <div className="inline-block bg-white p-4 shadow-xl" style={{ transform: `rotate(${polaroids[2].rotation}deg)` }}>
                <div className="relative aspect-square w-full md:w-80">
                  <ImageWithFallback
                    src={polaroids[2].image}
                    alt={polaroids[2].caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    {polaroids[2].caption}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{polaroids[2].date}</p>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full shadow-md border-2 border-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                The day you said yes to being mine officially was one of the happiest days of my life.
                It felt like everything finally fell into place. We weren't just two people anymore—we became "us."
              </p>
              <p>
                I love the way you see the world with such wonder and kindness. I love how you make ordinary moments
                feel extraordinary. Whether we're exploring new places, having deep conversations, or
                simply enjoying comfortable silence together, every second spent with you is precious.
              </p>
            </motion.div>

            {/* Fourth Polaroid - Adventures */}
            <motion.div
              initial={{ opacity: 0, rotate: 10, y: 20 }}
              whileInView={{ opacity: 1, rotate: polaroids[3].rotation, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative my-16 md:ml-auto md:mr-8 max-w-fit"
            >
              <div className="inline-block bg-white p-4 shadow-xl" style={{ transform: `rotate(${polaroids[3].rotation}deg)` }}>
                <div className="relative aspect-square w-full md:w-80">
                  <ImageWithFallback
                    src={polaroids[3].image}
                    alt={polaroids[3].caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-500" />
                  <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                    {polaroids[3].caption}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">{polaroids[3].date}</p>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full shadow-md border-2 border-red-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p>
                These four months have taught me that love isn't just about the grand gestures or the perfect moments—
                it's about choosing each other every single day. It's about growing together, supporting each
                other's dreams, and building something real and lasting.
              </p>
              <p>
                Thank you for being you. Thank you for your patience, your understanding, and your unwavering support.
                Thank you for sharing your world with me and letting me share mine with you. Thank you for making me
                a better person just by being in my life.
              </p>
            </motion.div>

            {/* Closing */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 pt-8"
            >
              <p>
                As we celebrate four months together, I want you to know that this is just the beginning. I can't wait
                to create more memories with you, to face new adventures together, and to see where this beautiful
                journey takes us.
              </p>
              <p>
                You are my inspiration, my comfort, and my joy. Here's to us, to our story, and to all the chapters
                yet to be written.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-12 pt-8 border-t border-amber-300 text-right"
            >
              <p>
                Forever and always,
                <br />
                <span className="inline-block mt-4 text-2xl" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                  Your Love
                </span>
              </p>
              <div className="flex justify-end gap-1 mt-4">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Hearts */}
          <div className="absolute top-6 left-6 opacity-20">
            <Heart className="w-8 h-8 text-red-400 fill-red-400" />
          </div>
          <div className="absolute top-6 right-6 opacity-20">
            <Heart className="w-6 h-6 text-red-400 fill-red-400" />
          </div>
          <div className="absolute bottom-6 left-6 opacity-20">
            <Heart className="w-6 h-6 text-red-400 fill-red-400" />
          </div>
          <div className="absolute bottom-6 right-6 opacity-20">
            <Heart className="w-8 h-8 text-red-400 fill-red-400" />
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            <p>July 4, 2024 - Forever</p>
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
