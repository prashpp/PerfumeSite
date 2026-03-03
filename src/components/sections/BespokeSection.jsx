import { motion } from 'framer-motion';
import { heroImages } from '../../data/products';
import FadeInSection from '../ui/FadeInSection';

export default function BespokeSection() {
  return (
    <section className="py-40 bg-[#161618] overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* Image */}
          <FadeInSection direction="right" className="w-full lg:w-1/2 relative group">
            <motion.div
              className="absolute -inset-4 border border-[#C5A059]/20 scale-95"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <motion.div
              className="aspect-[16/10] bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroImages.bespoke}')`,
                filter: 'grayscale(100%)',
              }}
              whileHover={{ filter: 'grayscale(0%)' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </FadeInSection>

          {/* Text */}
          <FadeInSection direction="left" delay={0.15} className="w-full lg:w-1/2 lg:pl-10">
            <span className="text-[#C5A059] text-[11px] uppercase tracking-ultra font-bold block mb-7">
              Personalized Olfactory Journey
            </span>
            <h3 className="font-serif text-5xl md:text-6xl text-white mb-7 leading-tight font-light">
              The Bespoke <br />Experience
            </h3>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-12 max-w-xl">
              For those who seek the ultimate in exclusivity, our private atelier offers personal
              fragrance consultations. Work directly with our Master Perfumer to translate your
              memories and emotions into a one-of-a-kind scent.
            </p>

            <motion.button
              className="flex items-center gap-6 group"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[11px] uppercase tracking-ultra font-bold text-white group-hover:text-[#C5A059] transition-colors">
                Book a Private Consultation
              </span>
              <motion.span
                className="h-[1px] bg-[#C5A059]"
                initial={{ width: 64 }}
                whileHover={{ width: 96 }}
                style={{ width: 64 }}
              />
            </motion.button>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
