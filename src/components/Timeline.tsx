import { Calendar, Heart, Coffee, Star, Sparkles, Camera, Music, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from './ui/card';

interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const milestones: Milestone[] = [
  {
    date: 'July 4, 2024',
    title: 'Our First Meeting',
    description: 'The day everything changed. I knew from the moment I saw you that you were special.',
    icon: Sparkles,
    color: 'text-yellow-500',
  },
  {
    date: 'July 15, 2024',
    title: 'First Coffee Date',
    description: 'Hours flew by like minutes. We talked about everything and nothing, and I never wanted it to end.',
    icon: Coffee,
    color: 'text-amber-600',
  },
  {
    date: 'August 1, 2024',
    title: 'Made It Official',
    description: 'The best decision I ever made. You said yes, and my heart has been full ever since.',
    icon: Heart,
    color: 'text-red-500',
  },
  {
    date: 'August 20, 2024',
    title: 'Our First Adventure',
    description: 'Exploring the city together, getting lost and finding our way. Every moment was perfect.',
    icon: Camera,
    color: 'text-blue-500',
  },
  {
    date: 'September 10, 2024',
    title: 'Concert Under the Stars',
    description: 'Dancing to our favorite songs, your hand in mine. A night I\'ll never forget.',
    icon: Music,
    color: 'text-purple-500',
  },
  {
    date: 'October 14, 2024',
    title: 'Surprise Picnic',
    description: 'Sunset, good food, and better company. You make every ordinary moment extraordinary.',
    icon: Star,
    color: 'text-orange-500',
  },
  {
    date: 'November 4, 2024',
    title: 'Four Months Together',
    description: 'Here we are, four incredible months later. This is just the beginning of our story.',
    icon: Gift,
    color: 'text-pink-500',
  },
];

export function Timeline() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="mb-4">Our Journey Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every milestone, every memory, every moment that brought us closer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-200 via-pink-200 to-red-300 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Card */}
                <div className="flex-1">
                  <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-2 border-red-100">
                    <div className="flex items-start gap-4">
                      <div className={`${milestone.color} mt-1`}>
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{milestone.date}</p>
                        <h3 className="mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center Icon */}
                <div className="hidden md:block relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-red-300 flex items-center justify-center shadow-lg">
                    <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
