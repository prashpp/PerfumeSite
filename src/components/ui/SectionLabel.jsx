import { motion } from "framer-motion";
import { fadeUp } from "../../data/animations";

export function SectionLabel({ children }) {
  return (
    <motion.div variants={fadeUp} className="inline-flex items-center gap-4 mb-6 opacity-80">
      <span className="h-[1px] w-10 bg-[#C5A059]" />
      <span className="text-[11px] uppercase tracking-[0.4em] text-[#F9F1C0] font-semibold">{children}</span>
    </motion.div>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <motion.h2
      variants={fadeUp}
      className={`font-serif text-5xl md:text-7xl text-white leading-tight ${className}`}
    >
      {children}
    </motion.h2>
  );
}
