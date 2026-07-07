import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-[#ffc914] to-[#E5B800] border-b border-proponte-gold/30 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50 shadow-md backdrop-blur-lg bg-opacity-95 overflow-hidden">
      
      {/* Subtle light reflection sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        
        {/* Left spacing for centering on desktop */}
        <div className="hidden md:block w-28" />

        {/* Center: Official Positive Brand Logo (Local File) */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center select-none"
        >
          <img
            src="./logo_positivo.png"
            alt="Proponte EAFC"
            className="h-12 md:h-14 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback element (hidden by default unless onError triggers) */}
          <div className="hidden flex-col leading-none text-center">
            <span className="font-sans font-black tracking-widest text-xl text-proponte-charcoal">
              PROPONTE
            </span>
            <span className="font-sans text-[8px] tracking-[0.2em] font-bold text-proponte-charcoal/80 mt-0.5">
              EAFC • FONDOS COLECTIVOS
            </span>
          </div>
        </motion.div>

        {/* Right Badge: High contrast dark styling for yellow background */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-1.5 px-3 py-1 bg-proponte-charcoal text-proponte-white border border-proponte-charcoal/10 rounded-full shadow-sm"
        >
          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
          <span className="font-sans text-[8px] md:text-[9px] uppercase font-black tracking-widest">
            Regulado por SMV
          </span>
        </motion.div>

      </div>
      
      {/* Border Framing line at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-proponte-charcoal/10" />
    </header>
  );
}
