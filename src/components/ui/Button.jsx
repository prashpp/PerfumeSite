import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', onClick }) {
  const base = 'text-[11px] uppercase tracking-ultra font-bold transition-all duration-300 px-10 py-5 cursor-pointer';
  const variants = {
    primary: 'bg-[#C5A059] text-[#0D0D0E] hover:bg-[#F9F1C0]',
    outline: 'border border-white/20 text-white hover:bg-white/5',
    ghost: 'text-white hover:text-[#C5A059]',
  };

  return (
    <motion.button
      whileHover={{ scale: variant === 'primary' ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
