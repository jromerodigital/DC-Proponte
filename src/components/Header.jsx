import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="w-full bg-proponte-charcoal border-b border-proponte-silver/10 py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50 shadow-lg backdrop-blur-lg bg-opacity-95 overflow-hidden">
      
      {/* Decorative Golden Ambient Light behind logo */}
      <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-40 h-20 bg-proponte-gold/25 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Left spacing for centering on desktop */}
        <div className="hidden md:block w-28" />

        {/* Center: Official Negative Brand Logo (Local File) - Compact on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center select-none"
        >
          <img
            src="/logo_negativo_2026.png"
            alt="Proponte EAFC"
            className="h-8 md:h-11 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          
          {/* Fallback element (hidden by default unless onError triggers) */}
          <div className="hidden flex-col leading-none text-center">
            <span className="font-sans font-black tracking-widest text-xl text-proponte-white">
              PROPONTE
            </span>
            <span className="font-sans text-[8px] tracking-[0.2em] font-bold text-proponte-yellow mt-0.5">
              EAFC • FONDOS COLECTIVOS
            </span>
          </div>
        </motion.div>

        {/* Right Badge: Compact and neat */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-1.5 px-2.5 py-0.5 md:py-1 bg-proponte-black/40 border border-proponte-silver/10 rounded-full"
        >
          <span className="w-1 h-1 bg-[#25D366] rounded-full animate-ping" />
          <span className="font-sans text-[8px] md:text-[9px] uppercase font-extrabold tracking-wider text-proponte-silver">
            Regulado por SMV
          </span>
        </motion.div>

      </div>
      
      {/* Dynamic Golden Line Under Header */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.2px] bg-gradient-to-r from-transparent via-proponte-yellow to-transparent opacity-70" />
    </header>
  );
}
