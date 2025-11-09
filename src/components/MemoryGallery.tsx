import { Heart, ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memories = [
  {
    image: 'https://images.unsplash.com/photo-1532302584927-8bd4b6118390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzYyMjg4NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Our romantic dinner nights',
    date: 'August 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1650737779186-4073102e1380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YWxraW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyMjkwOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Walking through life together',
    date: 'September 2024',
  },
  {
    image: 'https://images.unsplash.com/photo-1570610222761-b08cb1d09a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVyJTIwdmludGFnZXxlbnwxfHx8fDE3NjIyOTA5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'Love notes and sweet messages',
    date: 'October 2024',
  },
];

export function MemoryGallery() {
  return (
    <div className="py-20 px-4 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <ImageIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="mb-4">Our Memories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Snapshots of our beautiful journey together. Every picture tells a story of love, laughter, and happiness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                <ImageWithFallback
                  src={memory.image}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="mb-1">{memory.caption}</p>
                    <p className="text-sm text-white/80">{memory.date}</p>
                  </div>
                </div>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <Heart className="w-6 h-6 text-red-500 fill-red-500 drop-shadow-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-red-50 border-2 border-red-200 border-dashed rounded-lg p-8">
            <Heart className="w-12 h-12 text-red-300 mx-auto mb-3" />
            <p className="text-gray-600">
              Many more beautiful memories to come...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
