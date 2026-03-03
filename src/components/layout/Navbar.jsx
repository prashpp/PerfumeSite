import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Fragrances', to: '/collections' },
  { label: 'The Atelier', to: '/' },
  { label: 'Journal', to: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-[100] w-full px-8 md:px-16 py-5 transition-all duration-500 ${scrolled ? 'border-b border-white/5 bg-[#0D0D0E]/90 backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Left Nav */}
          <div className="flex-1 hidden lg:flex items-center gap-12">
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.to} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <h1
              className="font-serif text-2xl font-light tracking-[0.35em] text-white uppercase"
            >
              Aurelia
            </h1>
          </Link>

          {/* Right Actions */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <button className="text-slate-400 hover:text-white transition-colors hidden md:flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest">Search</span>
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C5A059] rounded-full" />
            </button>
            <button
              className="lg:hidden text-white"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#0D0D0E] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl text-white hover:text-[#C5A059] transition-colors italic"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
