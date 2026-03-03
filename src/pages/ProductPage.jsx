import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ProductDetail from '../components/product/ProductDetail'

export default function ProductPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ backgroundColor: '#101522' }}>
      {/* Breadcrumbs */}
      <div className="px-6 lg:px-20 py-5 max-w-[1440px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-slate-500"
        >
          <Link to="/" className="hover:text-[#1142d4] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/collections" className="hover:text-[#1142d4] transition-colors">Fragrances</Link>
          <ChevronRight size={12} />
          <span className="text-slate-100">AURELIA No. 5</span>
        </motion.div>
      </div>

      <ProductDetail />
    </div>
  )
}
