import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ATELIER_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJNINPynVCZEmbIr_OmW16cGhMACEMWh1FRBtlwzCp2nxwQi-4nufzeS9IPBMv8PwCna0jU3ab7a_Y3f9v4TpBIdrANvJQIxqqX7NEjGHnLgOl-kpQJiwdR-SWxKn5wEymnlA5Vo6JfebxPQ1zXWMDZT6TZsBsch_dcZvb1ZFMcjcZnrkEnASx5CtVQZ2fohR42NLxwR6HEQEPI521aeifc9Y9V64Q2gWvC8C2ZHlUKoQRSskAY256Xqld81hvfiq_MoF7GzEX99tV'

export default function BespokeSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-36 bg-charcoal-light overflow-hidden" style={{ backgroundColor: '#161618' }}>
      <div className="max-w-[1800px] mx-auto px-8 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -inset-4 border border-[#C5A059]/20 group-hover:scale-105 transition-transform duration-700"
            />
            <motion.div
              className="aspect-[16/10] bg-cover bg-center"
              style={{ backgroundImage: `url('${ATELIER_IMAGE}')` }}
              initial={{ filter: 'grayscale(100%)' }}
              whileHover={{ filter: 'grayscale(0%)' }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 lg:pl-10"
          >
            <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.4em] font-bold block mb-7">
              Personalized Olfactory Journey
            </span>
            <h3 className="font-serif text-5xl md:text-6xl text-white mb-7 leading-tight font-light">
              The Bespoke <br /> Experience
            </h3>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-10 max-w-xl">
              For those who seek the ultimate in exclusivity, our private atelier offers personal
              fragrance consultations. Work directly with our Master Perfumer to translate your
              memories and emotions into a one-of-a-kind scent.
            </p>

            <motion.button
              className="flex items-center gap-5 group/btn"
              whileHover="hover"
            >
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-white group-hover/btn:text-[#C5A059] transition-colors">
                Book a Private Consultation
              </span>
              <motion.span
                variants={{ hover: { width: '6rem' } }}
                className="h-px bg-[#C5A059] w-16 transition-all duration-500 group-hover/btn:w-24"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
