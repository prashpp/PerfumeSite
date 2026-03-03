import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = ['Signature Line', 'The Noir Series', 'Home Fragrance', 'Limited Editions'];
const journal = ['The Artisans', 'Olfactive Notes', 'Sourcing', 'Sustainability'];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0E] pt-28 pb-14 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/">
              <h2 className="font-serif text-3xl font-light tracking-[0.3em] text-white uppercase mb-8">
                Aurelia
              </h2>
            </Link>
            <p className="text-slate-500 max-w-xs mb-8 leading-relaxed font-light text-sm">
              Redefining the art of high-perfumery through sustainable practices and olfactory excellence.
            </p>
            <div className="flex gap-5">
              {['🌐', '📷', '✉️'].map((icon, i) => (
                <button key={i} className="text-slate-500 hover:text-[#C5A059] transition-colors text-lg">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="md:col-span-2">
            <h6 className="text-white text-[10px] uppercase tracking-ultra font-bold mb-8">Collections</h6>
            <ul className="space-y-5">
              {collections.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-[#C5A059] transition-colors text-xs font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal */}
          <div className="md:col-span-2">
            <h6 className="text-white text-[10px] uppercase tracking-ultra font-bold mb-8">Journal</h6>
            <ul className="space-y-5">
              {journal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-[#C5A059] transition-colors text-xs font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h6 className="text-white text-[10px] uppercase tracking-ultra font-bold mb-8">Newsletter</h6>
            <p className="text-slate-500 text-xs font-light mb-5 tracking-wide">
              Join our circle for exclusive previews and atelier updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 pb-3 text-xs font-light focus:outline-none focus:border-[#C5A059] transition-colors text-white placeholder:text-slate-700"
              />
              <motion.button
                whileHover={{ x: 4 }}
                className="absolute right-0 bottom-3 text-[#C5A059] text-[10px] uppercase tracking-ultra font-bold"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[9px] uppercase tracking-ultra font-medium">
            © 2024 Aurelia Fragrances · Excellence in Olfaction
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Shipping & Returns', 'Accessibility'].map((link) => (
              <a key={link} href="#" className="text-slate-600 text-[9px] uppercase tracking-ultra hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
