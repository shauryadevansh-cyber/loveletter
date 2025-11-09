import { useRef } from 'react';
import { Heart, Calendar, Coffee, Sparkles, Camera } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Polaroid {
  image: string;
  caption: string;
  date: string;
  rotation: number;
}

const polaroids: Polaroid[] = [
  {
    image: 'src/components/WhatsApp Image 2025-11-09 at 05.42.22_aeaa7549.jpg',
    caption: 'The First Time',
    date: '1st August 2025',
    rotation: -3
  },
  {
    image: 'src/components/WhatsApp Image 2025-11-09 at 05.43.31_653765f3.jpg',
    caption: 'Where I Belong',
    date: '6th September 2025',
    rotation: 2,
  },
  {
    image: 'src/components/WhatsApp Image 2025-11-09 at 05.43.32_ca2ed0e9.jpg',
    caption: 'All I want to do is',
    date: '13th October 2025',
    rotation: -2
  },
  {
    image: 'src/components/WhatsApp Image 2025-11-09 at 05.43.32_68f3ccab.jpg',
    caption: 'Two bhondus in love',
    date: '2nd November 2025',
    rotation: 3
  },
];

export function EnvelopeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Stage 1: Envelope gets smaller (0 - 0.25)
  const envelopeScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);
  
  // Stage 2: Envelope flap opens (0.25 - 0.45)
  const flapRotation = useTransform(scrollYProgress, [0.25, 0.45], [0, -180]);
  
  // Flap z-index shifts to bottom after opening
  const flapZIndex = useTransform(scrollYProgress, [0.44, 0.46], [50, 5]);
  
  // Stage 3: Letter pops out from inside (0.4 - 0.6)
  const letterY = useTransform(scrollYProgress, [0.4, 0.6], [200, 0]);
  const letterOpacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  
  // Stage 4: Letter takes over entire page (0.6 - 0.75)
  const letterScale = useTransform(scrollYProgress, [0.6, 0.75], [0.8, 2]);
  const envelopeOpacity = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);
  
  // Stage 5: Background fades but letter stays (0.75 - 0.85)
  const backgroundOpacity = useTransform(scrollYProgress, [0.75, 0.85], [1, 0]);

  return (
    <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <motion.div 
            style={{ opacity: backgroundOpacity }}
            className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-100 to-red-100" 
          />
          
          {/* Floating Hearts Background */}
          <motion.div 
            style={{ opacity: useTransform(backgroundOpacity, [1, 0], [0.3, 0]) }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Heart className="w-6 h-6 text-red-300 fill-red-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Hint */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-50"
          >
            <p className="text-gray-600 mb-3">Scroll to open your letter</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 mx-auto text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Main Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Envelope Container with Scale */}
            <motion.div
              style={{
                scale: envelopeScale,
                opacity: envelopeOpacity,
              }}
              className="absolute w-full h-full overflow-hidden"
            >
              <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
                
                {/* Envelope Back (Body) */}
                <div className="absolute inset-0 z-10 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 border-8 border-amber-300 shadow-2xl relative">
                    {/* Red/Blue Stripe Pattern (Airmail style) */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-b from-red-500 via-white to-blue-500" 
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #ef4444 0px, #ef4444 15px, white 15px, white 30px, #3b82f6 30px, #3b82f6 45px, white 45px, white 60px)',
                        backgroundSize: '100% 60px'
                      }}
                    />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-b from-red-500 via-white to-blue-500"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #ef4444 0px, #ef4444 15px, white 15px, white 30px, #3b82f6 30px, #3b82f6 45px, white 45px, white 60px)',
                        backgroundSize: '100% 60px'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Envelope Flap (Front) - Opens on scroll - Outside envelope container for full visibility */}
            <motion.div
              style={{
                scale: envelopeScale,
                opacity: envelopeOpacity,
                zIndex: flapZIndex,
              }}
              className="absolute w-full h-full pointer-events-none"
            >
              <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
                <motion.div
                  style={{
                    rotateX: flapRotation,
                    transformOrigin: 'top center',
                    transformStyle: 'preserve-3d',
                  }}
                  className="absolute inset-0"
                >
                  {/* Top Triangular Flap */}
                  <div className="absolute top-0 left-0 w-full h-1/2">
                    <svg
                      viewBox="0 0 100 50"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                      style={{ 
                        filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
                      }}
                    >
                      <defs>
                        <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#fef3c7', stopOpacity: 1 }} />
                          <stop offset="50%" style={{ stopColor: '#fde68a', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#fcd34d', stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 0 L 50 50 L 100 0 Z"
                        fill="url(#flapGradient)"
                        stroke="#d97706"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Letter Popping Out */}
            <motion.div
              style={{
                y: letterY,
                opacity: letterOpacity,
                scale: letterScale,
              }}
              className="absolute w-[min(700px,85vw)] z-20"
            >
              <div 
                className="bg-white shadow-2xl p-8 md:p-12 rounded-sm relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '100% 32px',
                  backgroundColor: 'white'
                }}
              >
                {/* Upper Half - Letter Header - Fades in first */}
                <motion.div 
                  style={{ 
                    opacity: useTransform(scrollYProgress, [0.4, 0.48], [0, 1])
                  }}
                  className="text-center"
                >
                  <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-4 animate-pulse" />
                  <h2 className="text-red-600 mb-2">Love Letter</h2>
                  <p className="text-gray-600 mb-1">4 Months And 5 Days of Beautiful Memories</p>
                  <p className="text-sm text-gray-500">November 9, 2025</p>
                  <div className="mt-6 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="w-3 h-3 text-red-400 fill-red-400" />
                    ))}
                  </div>
                </motion.div>

                {/* Lower Half - Preview Text and Corners - Fades in second */}
                <motion.div
                  style={{ 
                    opacity: useTransform(scrollYProgress, [0.54, 0.62], [0, 1])
                  }}
                >
                  {/* Letter Preview Text */}
                  <div className="mt-8 text-center text-gray-700 space-y-4">
                    <p className="text-red-600 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Meri Pyaari Rasmalai,
                    </p>
                    <p className="text-xs md:text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' , opacity: '0'}}>
                      As I sit down to write this, my heart is overflowing<br />
                      with emotions that words can barely capture... jahgfjdgiahfnjkabdgvkiaugvb akjhf lajh<br />jkeabvkhad
                    </p>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-red-300 opacity-40" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-red-300 opacity-40" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-red-300 opacity-40" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-red-300 opacity-40" />
                </motion.div>
              </div>
            </motion.div>

            {/* Masking div to hide bottom half of letter - makes only top half visible */}
            <motion.div
              style={{
                scale: envelopeScale,
                opacity: useTransform(scrollYProgress, [0.55, 0.65], [1, 0]),
                height: 600
              }}
              className="absolute top-[35%] left-0 right-0 bottom-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 z-40 pointer-events-none border-t-8 border-amber-300"
            >
              {/* Red/Blue Stripe Pattern on Left Side */}
              <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24" 
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #ef4444 0px, #ef4444 15px, white 15px, white 30px, #3b82f6 30px, #3b82f6 45px, white 45px, white 60px)',
                  backgroundSize: '100% 60px'
                }}
              />
              {/* Red/Blue Stripe Pattern on Right Side */}
              <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #ef4444 0px, #ef4444 15px, white 15px, white 30px, #3b82f6 30px, #3b82f6 45px, white 45px, white 60px)',
                  backgroundSize: '100% 60px'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrollable Letter Content */}
      <div className="relative min-h-screen pb-20">
        {/* Letter Paper */}
        <div className="relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-2xl p-8 md:p-12 relative min-h-screen"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100% 32px',
            }}
          >
            {/* Letter Header */}
            {/* <div className="text-center mb-12">
              <Heart className="w-12 h-12 text-red-500 fill-red-500 mx-auto mb-4" />
              <h1 className="text-red-600 mb-2">To My Dearest Love</h1>
              <p className="text-gray-500">November 4, 2024</p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-red-400" />
                <p className="text-gray-600">4 Months of Beautiful Memories</p>
              </div> */}
            {/* </div> */}

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
                  Meri Priya Bhondu,
                </p>
                <p className="mt-4">
                  Mujhe love letter likhna toh nahi ata kyuki mai bhondu hu par mujhe websites banani aati hai.... i love you soooooo soooooo sooooooooooooooooooo much babyyyyyyyyyyy..... I still remember the day i first texted you and we talked for like what, just the whole day? and another day and another and then another...... the thought that i can love you this much didn't cross my mind tab, but things changed in just one day and there i was in love with you thinking about you all day, talking about you all day, waiting for you to get done with all ur work just to hear all about the day of the girl i loved in just a couple of days of chatting. And those couple of days turned into couple of weeks, couple of months, and now it's couple of couple of months (see the pun ;) )
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
                <div className="inline-block bg-white p-4 shadow-xl">
                  <div className="relative aspect-square w-full md:w-80">
                    <ImageWithFallback
                      src={polaroids[0].image}
                      alt={polaroids[0].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                      {polaroids[0].caption}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{polaroids[0].date}</p>
                </div>
                {/* Pin */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                  <Heart className="w-5 h-5 text-red-500 fill-red-500 drop-shadow-lg" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p>
                  I remember the butterflies I felt when I first saw you. The way u walked to me and had me in ur grasp. I was shit scared ngl. I couldn't breathe i was scared you'd hear it, i even forgot to hug you. I remember how i looked at you (i still look at you the same) i remember ur scent(i carry it too ab) i remember ur smile(my favourite thing since that day) ur eyes and the expression u had on ur face (u were scared the way i stared at u weren't u) and i knew i'm so in love with this girl. You felt like a dream baby. I was even scared to touch you, what if i realise that it's a dream. I remember how scared i was to ask u to even hold ur hand in the theatre. I was sooooooo scared to even bring up anything about the kiss (i had to after all i had told u on the chats....). But then it happened.... and oh so clear in my mind that moment..... cannot be described.... it's a feeling only you and me share...... no one else in this whole world knows or can feel how it felt...... i love you so much baby
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
                <div className="inline-block bg-white p-4 shadow-xl">
                  <div className="relative aspect-square w-full md:w-80">
                    <ImageWithFallback
                      src={polaroids[1].image}
                      alt={polaroids[1].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                      {polaroids[1].caption}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{polaroids[1].date}</p>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500 drop-shadow-md" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p>
                  And since that day to this day i've only loved you more. i wake up to the thought of ur good morning texts.... sleep to the look of ur sleeping face (top beauty attractions in the world btw) now that you've grown old ;) and that's all i want to do..... live my life moment by moment with you.
                </p>
                <p>
                  Every day with you feels like a gift...... Your laugh is my favorite sound, your smile my favorite sight,
                  and your presence my favorite place to be...... You've shown me what it means to truly connect with
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
                <div className="inline-block bg-white p-4 shadow-xl">
                  <div className="relative aspect-square w-full md:w-80">
                    <ImageWithFallback
                      src={polaroids[2].image}
                      alt={polaroids[2].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                      {polaroids[2].caption}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{polaroids[2].date}</p>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500 drop-shadow-md" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p>
                  I love the way you look at me and i hope it never changes..... i love how you just make me happy by existing..... even the small things u do, i find them sooooooo beautiful.... u just make everything around urself beautiful....... i love u baby ur kind version, ur badmos version, ur caring version, ur baby version, ur angry version, ur bhondu version and oh my goddddd when u get into ur turning on my bf zone.........
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
                <div className="inline-block bg-white p-4 shadow-xl">
                  <div className="relative aspect-square w-full md:w-80">
                    <ImageWithFallback
                      src={polaroids[3].image}
                      alt={polaroids[3].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                      {polaroids[3].caption}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{polaroids[3].date}</p>
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500 drop-shadow-md" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <p>
                  We had our ups and downs..... the fear of not seeing each other again, the fear of losing interest..... but we continued to choose each other again and again....... I promise to keep choosing u in all circumstances baby.</p><p>
                  Thank you for being you. Thank you for sharing your world with me and letting me share mine with you. Thank you for making me
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
                  to create more memories with you.
                </p>
                <p>
                  You are my comfort, my happiness and you are my love baby. Here's to us, to our story, and to all the chapters
                  yet to be written
                </p>
                <p>PS: mujhe love letters likhna nhi ata toh we'll add more to this website baad me + iska UI utna acha nhi h kyuki design vaali madam aap hn aur apko nhi bataya ja skta tha toh we'll fix it later</p>
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
                    Your GulabJamun
                  </span>
                </p>
                <div className="flex justify-end gap-1 mt-4">
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                  <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                </div>
              </motion.div>
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
              <p>July 4, 2025 - Forever</p>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}