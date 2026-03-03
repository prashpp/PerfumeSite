import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTPP7zBMYydUtBcXfv6S_HODhTpMKPMsdbJf5i_5XHoXr9uWb6NNAFKuzi3nRRxwKF0RpQf2Lh9YGrmYo6CW0rJLX9ZdX-OGsLWSHCQOGgVScbcpKm4O-nr1RBTDjKD-rlfaFLjX3HfeiJkK8IM65jNHLqh-PlHquB0oXIuKp3I6_O05duIjilmNqCyZVcVYK18NjVTbCr-d04b7GLUlv0g73ZS99jw07mZrM-9cyBUJJd1b16H_6a-htwRU2mNYAiH_JHynmlj1Kv'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-charcoal/40 z-10" />
        <div className="absolute inset-0 hero-gradient z-20" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 w-full px-8 md:px-24">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-4 mb-8 opacity-80"
          >
            <span className="h-px w-12 bg-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#F9F1C0] font-semibold">
              New Edition: L'Essence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] mb-12"
          >
            A <span className="gold-text-gradient">Symphony</span> <br />
            <span className="italic font-light ml-0 md:ml-24 opacity-90">of Senses</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col md:flex-row md:items-center gap-10 mt-14"
          >
            <p className="text-slate-400 text-lg max-w-md leading-relaxed font-light">
              Discover the invisible architecture of elegance. Meticulously hand-poured in Grasse,
              designed for the discerning soul.
            </p>
            <div className="flex gap-5">
              <Link
                to="/collections"
                className="px-10 py-5 bg-[#C5A059] text-charcoal text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#F9F1C0] transition-all"
              >
                Shop the Scent
              </Link>
              <button className="px-10 py-5 border border-white/20 text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white/5 transition-all">
                Our Heritage
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-[#C5A059]"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </motion.div>
    </section>
  )
}
