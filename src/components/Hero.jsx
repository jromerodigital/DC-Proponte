import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

export default function Hero() {
  return (
    <section className="w-full px-4 pt-4 pb-8 md:pt-10 md:pb-16 bg-gradient-to-b from-proponte-bg-warm to-proponte-white">
      
      {/* Container: Side-by-side on desktop, vertical stack on mobile */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-12">
        
        {/* Left Column (Desktop) / Top Section (Mobile): Title, text, success alert */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Success Alert Banner: Compact 2-column layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 90 }}
            className="w-full bg-[#EBFBEE] border border-[#B2F2BB] rounded-xl p-3 md:p-4 mb-4 md:mb-6 flex items-start space-x-3 shadow-sm max-w-lg lg:max-w-none"
          >
            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#2B8A3E] shrink-0 mt-0.5" />
            <div className="flex-1 text-left">
              <h4 className="font-sans font-extrabold text-[#2B8A3E] text-xs md:text-sm leading-tight">
                ¡Registro exitoso!
              </h4>
              <p className="font-sans text-[10px] md:text-xs text-[#2B8A3E]/90 mt-0.5 leading-relaxed">
                Un asesor experto se comunicará contigo pronto para validar tus datos e iniciar tu plan.
              </p>
            </div>
          </motion.div>

          {/* Subtitle / Badge */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-2.5 py-1 bg-proponte-yellow/20 text-proponte-charcoal font-sans font-extrabold text-[9px] md:text-xs tracking-wider rounded-md uppercase mb-2 md:mb-4 border border-proponte-yellow/30"
          >
            FONDOS COLECTIVOS PROPONTE
          </motion.span>

          {/* Editorial Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-sans font-black text-xl xs:text-2xl md:text-4xl xl:text-5xl text-proponte-black leading-tight text-balance"
          >
            Descubre cómo funciona nuestro sistema y prepárate para lograr tu meta
          </motion.h1>

          {/* Explanatory subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-xs md:text-sm lg:text-base text-proponte-charcoal/75 mt-3 max-w-md lg:max-w-none leading-relaxed text-balance"
          >
            Mira el video explicativo de 2 minutos para conocer cómo miles de personas y empresas financian sus proyectos de forma inteligente.
          </motion.p>
        </div>

        {/* Right Column (Desktop) / Bottom Section (Mobile): The Vertical Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center"
        >
          <VideoPlayer />
        </motion.div>

      </div>
    </section>
  );
}
