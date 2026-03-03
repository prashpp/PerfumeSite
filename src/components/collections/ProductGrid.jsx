import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { allProducts } from '../../data/products'

const CATEGORIES = ['All Scents', 'Floral', 'Woody', 'Amber', 'Fresh', 'Gourmand', 'Aromatic']

function ProductCard({ product, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group flex flex-col"
    >
      <Link to="/product">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-900 mb-4">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${product.image}')` }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#101522]/30 flex items-center justify-center"
          >
            <motion.button
              initial={{ y: 16 }}
              whileHover={{ y: 0 }}
              className="bg-white text-slate-900 px-6 py-3 rounded text-sm font-bold uppercase tracking-wider shadow-xl border border-white/20"
            >
              View Details
            </motion.button>
          </motion.div>
        </div>
      </Link>
      <div className="flex flex-col items-center text-center px-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#1142d4] font-bold mb-1">
          {product.category} • {product.type}
        </span>
        <h3 className="text-lg font-medium text-white mb-2">{product.name}</h3>
        <p className="text-slate-400 text-sm font-light leading-relaxed mb-3 italic">
          "{product.tagline}"
        </p>
        <p className="text-white font-semibold">{product.price}</p>
      </div>
    </motion.div>
  )
}

export default function ProductGrid() {
  const [active, setActive] = useState('All Scents')

  const filtered = active === 'All Scents'
    ? allProducts
    : allProducts.filter((p) => p.category === active)

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-y border-slate-800 py-5">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-[#1142d4] text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 text-sm font-medium">Sort by:</span>
          <select className="bg-transparent border-none text-slate-100 text-sm font-bold focus:ring-0 cursor-pointer">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20 flex flex-col items-center gap-3">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-lg border border-slate-800 text-slate-400 hover:bg-slate-800 transition-colors font-medium text-sm"
        >
          Discover More
        </motion.button>
        <p className="text-slate-500 text-xs font-light">Showing {filtered.length} of 24 artisanal creations</p>
      </div>
    </div>
  )
}
