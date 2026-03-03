import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import FadeInSection from '../ui/FadeInSection';

export default function FeaturedCollection() {
  const featured = products.slice(0, 3);

  return (
    <section className="py-40 px-8 md:px-24 bg-[#0D0D0E] relative">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 border-b border-white/5 pb-10">
          <FadeInSection className="max-w-2xl">
            <span className="text-[#C5A059] text-[11px] uppercase tracking-ultra font-bold block mb-5">
              Curated Selection
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">
              Featured <br />
              <span className="italic font-light opacity-80">Collection</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.2} className="mt-8 md:mt-0">
            <Link to="/collections">
              <motion.span
                className="group flex items-center gap-5 text-white text-[11px] uppercase tracking-ultra font-bold"
                whileHover={{ x: 4 }}
              >
                <span className="group-hover:text-[#C5A059] transition-colors">Explore All Treasures</span>
                <ArrowRight size={18} className="text-[#C5A059] group-hover:translate-x-2 transition-transform" />
              </motion.span>
            </Link>
          </FadeInSection>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
