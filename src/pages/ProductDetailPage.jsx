import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productDetail } from '../data/products';
import FadeInSection from '../components/ui/FadeInSection';

export default function ProductDetailPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const p = productDetail;

  const allImages = [p.mainImage, ...p.thumbnails];

  return (
    <div className="bg-[#0D0D0E] min-h-screen">
      {/* Breadcrumbs */}
      <div className="px-8 md:px-20 pt-28 pb-6 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500">
          <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
          <span>›</span>
          <Link to="/collections" className="hover:text-[#C5A059] transition-colors">Fragrances</Link>
          <span>›</span>
          <span className="text-slate-200">AURELIA No. 5</span>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-8 md:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 xl:gap-24">
          {/* Images */}
          <div className="lg:col-span-7">
            <div className="sticky top-28">
              <motion.div
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-[#161618]"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.img
                  key={activeThumb}
                  src={allImages[activeThumb]}
                  alt="AURELIA No. 5"
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.04 }}
                  style={{ transition: 'transform 0.7s ease' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E]/20 to-transparent pointer-events-none" />
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {allImages.map((img, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    whileHover={{ scale: 1.03 }}
                    className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                      activeThumb === i ? 'ring-2 ring-[#C5A059]' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img src={img} alt={`View ${i + 1}`} className="h-full w-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col gap-7">
            <FadeInSection>
              <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase mb-2 block">
                {p.subtitle}
              </span>
              <h1
                className="text-5xl xl:text-6xl text-white leading-tight mb-3"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                {p.name}
              </h1>
              <p className="text-2xl font-light text-slate-400">{p.price}</p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <p className="text-lg text-slate-300 leading-relaxed font-light">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold tracking-tight uppercase text-slate-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.15}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C5A059] hover:bg-[#F9F1C0] text-[#0D0D0E] font-bold py-5 rounded-lg transition-all flex items-center justify-center gap-3 text-sm tracking-wider uppercase"
              >
                <ShoppingBag size={18} />
                Add to Bag
              </motion.button>
            </FadeInSection>

            {/* Scent Profile */}
            <FadeInSection delay={0.2}>
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Scent Profile</h3>
                <div className="space-y-5">
                  {[
                    { label: 'Top Notes', value: p.notes.top },
                    { label: 'Heart', value: p.notes.heart },
                    { label: 'Base Notes', value: p.notes.base },
                  ].map((note) => (
                    <div key={note.label} className="flex items-start gap-4">
                      <div className="w-20 shrink-0 text-[10px] font-bold tracking-widest text-[#C5A059] uppercase pt-0.5">
                        {note.label}
                      </div>
                      <div className="text-sm text-slate-400">{note.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Craftsmanship */}
            <FadeInSection delay={0.25}>
              <div className="bg-[#C5A059]/5 p-6 rounded-xl border border-[#C5A059]/10">
                <div className="flex gap-4">
                  <span className="text-[#C5A059] text-xl">✦</span>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Artisan Craftsmanship</h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic">
                      "Each bottle of AURELIA No. 5 is hand-poured in our Grasse atelier using cold-extraction methods to preserve the integrity of the botanical essences."
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Details */}
            <FadeInSection delay={0.3}>
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-7">
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Origin</span>
                  <span className="text-sm text-slate-200">{p.origin}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Volume</span>
                  <span className="text-sm text-slate-200">{p.volume}</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </main>
    </div>
  );
}
