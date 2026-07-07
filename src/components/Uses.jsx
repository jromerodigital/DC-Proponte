import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Car, Home, Truck, ArrowUpRight } from 'lucide-react';

export default function Uses() {
  const [activeIndex, setActiveIndex] = useState(0);

  const destinations = [
    {
      title: "Autos Nuevos y Seminuevos",
      description: "Planifica la compra del vehículo ideal para tu familia o negocio. Adquiere cualquier marca y modelo del mercado nacional de forma estructurada.",
      icon: <Car className="w-5 h-5 text-proponte-yellow" />,
      image: "/autos.png",
      tag: "VEHÍCULOS",
      accent: "from-proponte-yellow to-proponte-gold"
    },
    {
      title: "Proyectos Inmobiliarios",
      description: "Compra, construye o remodela tu departamento, casa o local comercial. Asegura tu patrimonio inmobiliario sin deudas bancarias de por vida.",
      icon: <Home className="w-5 h-5 text-proponte-yellow" />,
      image: "/inmuebles.png",
      tag: "INMUEBLES",
      accent: "from-proponte-gold to-proponte-orange-gold"
    },
    {
      title: "Maquinaria y Activos",
      description: "Adquiere maquinaria pesada, equipos tecnológicos o vehículos industriales. Ideal para empresas que buscan expandirse sin descapitalizarse.",
      icon: <Truck className="w-5 h-5 text-proponte-yellow" />,
      image: "/maquinaria.png",
      tag: "ACTIVOS COMERCIALES",
      accent: "from-proponte-orange-gold to-proponte-yellow"
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="w-full py-16 px-4 bg-proponte-bg-warm/40 border-t border-b border-proponte-silver/10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-proponte-charcoal/50">
              ¿DÓNDE APUNTAS?
            </span>
            <h2 className="font-sans font-black text-3xl md:text-4xl text-proponte-black tracking-tight mt-3">
              ¿Cuál es tu próximo gran paso?
            </h2>
          </div>
          <p className="font-sans text-sm text-proponte-charcoal/70 max-w-sm mt-3 md:mt-0 leading-relaxed">
            Tu esfuerzo merece el mejor respaldo. Financia los activos más importantes de tu vida con el sistema Proponte.
          </p>
        </div>

        {/* Mobile Layout: Premium Slider Card */}
        <div className="block md:hidden relative px-2">
          <div className="overflow-hidden rounded-3xl bg-proponte-charcoal shadow-2xl border border-proponte-silver/10 relative">
            
            {/* Image section with an elegant diagonal cutout */}
            <div className="relative h-60 w-full overflow-hidden bg-proponte-black">
              <img
                src={destinations[activeIndex].image}
                alt={destinations[activeIndex].title}
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-proponte-charcoal via-transparent to-black/30" />
              
              {/* Floating Tag */}
              <div className="absolute top-4 left-4 bg-proponte-black/70 backdrop-blur-md text-proponte-white text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md border border-proponte-silver/20 flex items-center space-x-1.5">
                {destinations[activeIndex].icon}
                <span>{destinations[activeIndex].tag}</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6 text-proponte-white">
              <h3 className="font-sans font-extrabold text-xl leading-tight mb-2">
                {destinations[activeIndex].title}
              </h3>
              <p className="font-sans text-xs text-proponte-silver/85 leading-relaxed min-h-[70px]">
                {destinations[activeIndex].description}
              </p>

              {/* Controls inside mobile card */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-proponte-silver/10">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-proponte-black/60 border border-proponte-silver/10 text-proponte-white flex items-center justify-center active:scale-95 transition-transform"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {/* Dots */}
                <div className="flex space-x-2">
                  {destinations.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-5 bg-proponte-yellow' : 'w-2 bg-proponte-silver/40'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-proponte-black/60 border border-proponte-silver/10 text-proponte-white flex items-center justify-center active:scale-95 transition-transform"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Desktop Layout: Editorial Premium Card Deck (Anti-AI Look) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-proponte-charcoal rounded-[32px] overflow-hidden shadow-2xl border border-proponte-silver/10 flex flex-col justify-between relative group min-h-[460px]"
            >
              {/* Glowing Ambient Light in background of the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-proponte-silver/[0.03] to-transparent pointer-events-none" />

              <div>
                {/* Image Section with a geometric masked arc border at the bottom */}
                <div className="relative h-56 w-full overflow-hidden bg-proponte-black">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-proponte-charcoal via-transparent to-black/20" />
                  
                  {/* Category Label */}
                  <div className="absolute top-4 left-4 bg-proponte-black/70 backdrop-blur-md text-proponte-white text-[9px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-md border border-proponte-silver/20 flex items-center space-x-1.5">
                    {dest.icon}
                    <span>{dest.tag}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-sans font-extrabold text-xl text-proponte-white leading-tight">
                    {dest.title}
                  </h3>
                  <p className="font-sans text-xs text-proponte-silver/75 mt-3 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Footer inside card */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                {/* Visual Accent Colored Bar */}
                <div className={`h-1 w-14 rounded bg-gradient-to-r ${dest.accent}`} />
                
                {/* Floating link indicator */}
                <div className="w-8 h-8 rounded-full bg-proponte-black/40 border border-proponte-silver/10 text-proponte-yellow flex items-center justify-center group-hover:bg-proponte-yellow group-hover:text-proponte-black transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
