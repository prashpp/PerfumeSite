import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, index = 0 }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer `}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-[#161618] ring-1 ring-white/5 rounded-sm">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${product.image}')` }}
          />
          {/* Hover overlay (shows when hovering the parent group) */}
          <div className="absolute inset-0 bg-[#0D0D0E]/50 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-8 py-4 bg-white text-[#0D0D0E] text-[10px] uppercase tracking-ultra font-bold hover:bg-[#C5A059] hover:text-white transition-all transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
              Quick View
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-ultra text-[#C5A059] mb-2 block font-bold">
            {product.category}
          </span>
          <h5 className="font-serif text-2xl text-white mb-3 italic font-light">{product.name}</h5>
          <p className="text-slate-500 text-sm tracking-widest">
            {product.price} — {product.size}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
