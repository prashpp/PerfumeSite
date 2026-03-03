import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const pillars = [
  { num: '01', title: 'Rare Botanicals', desc: 'Sourced from the sun-drenched valleys of Provence.' },
  { num: '02', title: 'Hand-Poured', desc: 'Artisanal craft preserved through generations.' },
  { num: '03', title: 'Eternal Sillage', desc: 'Masterfully concentrated for lasting presence.' },
]

export default function PhilosophySection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className="py-36 px-8 md:px-24 bg-charcoal border-y border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 inline-block text-[#C5A059]"
        >
          <Sparkles size={44} strokeWidth={1} />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-white mb-10 leading-snug italic font-light"
        >
          "Fragrance is the most intense form of memory, an olfactory echo of who we once were."
        </motion.h3>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-24 h-px bg-[#C5A059]/40 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-400 text-xl leading-relaxed font-light max-w-3xl mx-auto mb-20"
        >
          At AURELIA, we believe that a scent is more than a profile; it is a signature of identity.
          Each of our fragrances is meticulously crafted using rare botanicals sourced from
          ethically-managed estates across the Mediterranean.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 max-w-4xl mx-auto">
          {pillars.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="group"
            >
              <div className="text-[#C5A059] font-serif text-3xl mb-3 group-hover:-translate-y-1 transition-transform">
                {num}
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-slate-200 font-bold mb-2">
                {title}
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
