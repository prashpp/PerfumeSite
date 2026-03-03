import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { featuredProducts } from '../../data/products'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function ProductCard({ product, index }) {
  const { ref, isInView } = useScrollAnimation()
  const isEven = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`group cursor-pointer ${isEven ? 'mt-0 md:mt-24' : ''}`}
    >
      <Link to="/product">
        <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-charcoal-light ring-1 ring-white/5">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${product.image}')` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center"
          >
            <button className="px-8 py-4 bg-white text-charcoal text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] hover:text-white transition-all">
              Quick View
            </button>
          </motion.div>
        </div>
      </Link>
      <div className="text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] mb-2 block font-bold">
          {product.category}
        </span>
        <h5 className="font-serif text-3xl text-white mb-3 italic font-light">{product.name}</h5>
        <p className="text-slate-500 text-sm tracking-widest">
          {product.price} — {product.size}
        </p>
      </div>
    </motion.div>
  )
}

export default function FeaturedCollection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-36 px-8 md:px-24 bg-charcoal relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-28 border-b border-white/5 pb-10"
        >
          <div className="max-w-2xl">
            <span className="text-[#C5A059] text-[11px] uppercase tracking-[0.4em] font-bold block mb-5">
              Curated Selection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
              Featured <br />
              <span className="italic font-light opacity-80">Collection</span>
            </h2>
          </div>
          <Link to="/collections" className="group flex items-center gap-5 text-white text-[11px] uppercase tracking-[0.4em] font-bold mt-6 md:mt-0 pb-2">
            <span className="group-hover:text-[#C5A059] transition-colors">Explore All Treasures</span>
            <motion.span whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400 }}>
              <ArrowRight size={18} className="text-[#C5A059]" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
