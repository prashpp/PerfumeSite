import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroImages } from '../../data/products';
import Button from '../ui/Button';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[#0D0D0E]/40 z-10" />
        <div
          className="absolute inset-0 z-20"
          style={{ background: 'linear-gradient(to right, #0D0D0E 40%, transparent 100%)' }}
        />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImages.main}')` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 w-full px-8 md:px-24 pt-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-7xl">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-8 opacity-80">
            <span className="h-[1px] w-12 bg-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-ultra text-[#F9F1C0] font-semibold">
              New Edition: L'Essence
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] mb-12">
            A{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #F9F1C0 50%, #C5A059 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Symphony
            </span>
            <br />
            <span className="italic font-light ml-0 md:ml-32 opacity-90">of Senses</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-10 mt-14">
            <p className="text-slate-400 text-lg max-w-md leading-relaxed font-light">
              Discover the invisible architecture of elegance. Meticulously hand-poured in Grasse, designed for the discerning soul.
            </p>
            <div className="flex gap-5">
              <Button variant="primary">Shop the Scent</Button>
              <Button variant="outline">Our Heritage</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-[#C5A059]" size={28} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
