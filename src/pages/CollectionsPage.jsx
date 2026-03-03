import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import FadeInSection from '../components/ui/FadeInSection';

const filters = ['All Scents', 'Floral', 'Woody', 'Oud', 'Fresh'];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('All Scents');
  const [sort, setSort] = useState('featured')

  const filteredAndSorted = useMemo(() => {
    const norm = (s = '') => String(s).toLowerCase()
    const matchesFilter = (p) => {
      if (activeFilter === 'All Scents') return true
      const f = norm(activeFilter)
      return norm(p.category).includes(f) || norm(p.notes).includes(f) || norm(p.name).includes(f)
    }

    const filtered = products.filter(matchesFilter)

    const priceValue = (p) => parseFloat(String(p.price).replace(/[^0-9.-]+/g, '')) || 0

    const sorted = [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return priceValue(a) - priceValue(b)
      if (sort === 'price-desc') return priceValue(b) - priceValue(a)
      if (sort === 'newest') return (b.id || 0) - (a.id || 0)
      if (sort === 'name-asc') return String(a.name).localeCompare(String(b.name))
      return 0
    })

    return sorted
  }, [activeFilter, sort])

  return (
    <div className="bg-[#0D0D0E] min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[340px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(13,13,14,0.85), rgba(13,13,14,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnomvsvfU6MoACPfHOZ65cRTJ6HBWWRQ2A483Oz2Ou49M1L2-33mBX3fB9LMi-_jTOU6IN2mdZusXgMNwJvN_sbUErz5s40X7FH_D9_mGgrx6baPhS2Ek6oVcPfpEtd_rlwgCR0eGgLFNXu1uD4mwIyl4d_45Cc-poXixgRFuORpzFTQeOydAYBdoJ92swUTazRm-WDI4XWjxXIvBAs2KCa19b_bdGgaQgsL9sof_WoyViKQJxxlJJSsaEJeLlK9qPArtxoHxHhhLJ")',
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="relative h-full flex flex-col justify-center px-8 md:px-24 text-white pt-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#C5A059] font-semibold tracking-[0.2em] uppercase text-sm mb-3 block"
          >
            Summer 2024
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl font-light mb-3"
          >
            The Essence of Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-300 max-w-md text-lg font-light leading-relaxed"
          >
            Discover our curated collection of artisanal fragrances.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14 border-y border-white/5 py-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f
                    ? 'bg-[#C5A059] text-[#0D0D0E]'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500 text-sm">Sort by:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent text-slate-200 text-sm font-bold focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-[#0D0D0E]">Featured</option>
                <option value="price-asc" className="bg-[#0D0D0E]">Price: Low to High</option>
                <option value="price-desc" className="bg-[#0D0D0E]">Price: High to Low</option>
                <option value="newest" className="bg-[#0D0D0E]">Newest First</option>
              </select>
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-20">
          {filteredAndSorted.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-24 flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ borderColor: 'rgba(197,160,89,0.6)' }}
            className="px-10 py-4 border border-white/10 text-slate-400 hover:text-[#C5A059] transition-colors font-medium text-sm tracking-widest uppercase"
          >
            Discover More
          </motion.button>
          <p className="text-slate-600 text-xs font-light">Showing {filteredAndSorted.length} of {products.length} artisanal creations</p>
        </div>
      </div>
    </div>
  );
}
