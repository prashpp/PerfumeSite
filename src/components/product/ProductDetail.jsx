import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Clock, Moon, Sparkles } from 'lucide-react'
import { productDetail } from '../../data/products'

export default function ProductDetail() {
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [productDetail.mainImage, ...productDetail.galleryImages]

  return (
    <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 lg:px-20 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24">
        {/* Images */}
        <div className="lg:col-span-7">
          <div className="sticky top-28">
            <motion.div
              key={selectedImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-800"
            >
              <motion.img
                src={images[selectedImg]}
                alt="Aurelia No. 5"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101522]/20 to-transparent" />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  whileHover={{ opacity: 1 }}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImg === i
                      ? 'ring-2 ring-[#1142d4] opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="h-full w-full object-cover" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-7"
        >
          <div>
            <span className="text-[#1142d4] font-bold tracking-widest text-xs uppercase mb-2 block">
              {productDetail.subtitle}
            </span>
            <h1 className="font-serif text-5xl xl:text-6xl text-white leading-tight mb-3">
              {productDetail.name}
            </h1>
            <p className="text-2xl font-light text-slate-400">{productDetail.price}</p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-slate-300 leading-relaxed font-light">
              {productDetail.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Clock, label: 'Long Lasting (8h+)' },
                { icon: Moon, label: 'Evening Wear' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] font-bold tracking-tight uppercase text-slate-400 flex items-center gap-1"
                >
                  <Icon size={12} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#1142d4] hover:bg-[#1142d4]/90 text-white font-bold py-5 rounded-lg transition-all shadow-lg shadow-[#1142d4]/20 flex items-center justify-center gap-3"
          >
            <ShoppingBag size={18} />
            Add to Bag
          </motion.button>

          {/* Scent Profile */}
          <div className="border-t border-slate-800 pt-7">
            <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Scent Profile
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Top Notes', value: productDetail.notes.top },
                { label: 'Heart', value: productDetail.notes.heart },
                { label: 'Base Notes', value: productDetail.notes.base },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-20 shrink-0 text-[10px] font-bold tracking-widest text-[#1142d4] uppercase pt-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-slate-400">{value}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Craftsmanship */}
          <div className="bg-[#1142d4]/10 p-6 rounded-xl border border-[#1142d4]/10">
            <div className="flex gap-4">
              <Sparkles size={20} className="text-[#1142d4] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Artisan Craftsmanship</h4>
                <p className="text-sm text-slate-400 leading-relaxed italic">
                  "Each bottle of AURELIA No. 5 is hand-poured in our Grasse atelier using
                  cold-extraction methods to preserve the integrity of the botanical essences."
                </p>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-7">
            <div>
              <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Origin</span>
              <span className="text-sm text-slate-200">{productDetail.origin}</span>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Volume</span>
              <span className="text-sm text-slate-200">{productDetail.volume}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
