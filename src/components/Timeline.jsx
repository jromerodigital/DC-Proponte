import React from 'react';
import { motion } from 'framer-motion';
import { Play, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      num: "01",
      icon: <Play className="w-5 h-5 text-proponte-black fill-proponte-black translate-x-0.5" />,
      title: "Mira el video explicativo completo",
      description: "El video de la sección superior te guiará en solo 2 minutos sobre cómo adjudicar tus bienes sin pagar intereses tradicionales."
    },
    {
      num: "02",
      icon: <PhoneCall className="w-5 h-5 text-proponte-black" />,
      title: "Recibe y atiende la llamada del asesor",
      description: "Un asesor calificado de Proponte validará tus datos para diseñar un plan de cuotas a tu medida sin ningún costo ni compromiso."
    },
    {
      num: "03",
      icon: <CheckCircle2 className="w-5 h-5 text-proponte-black" />,
      title: "Adjudica tu bien e inicia tu camino",
      description: "Con tu plan aprobado, estarás listo para suscribirte, participar en las asambleas mensuales por sorteo o remate, y lograr tu meta."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-proponte-white relative overflow-hidden">
      
      {/* Decorative Side Ambient Line */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-proponte-gold/25 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="mb-14 text-center">
          <span className="text-[10px] tracking-[0.2em] font-extrabold text-proponte-charcoal/50 uppercase block">
            PASO A PASO
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-proponte-black mt-2 tracking-tight">
            ¿Cómo asegurar tu financiamiento?
          </h2>
          <p className="font-sans text-sm text-proponte-charcoal/70 mt-2 max-w-lg mx-auto">
            El proceso es simple, transparente y está diseñado para tu comodidad. Sigue estas tres etapas esenciales.
          </p>
        </div>

        {/* Editorial Layout Timeline */}
        <div className="space-y-16 relative">
          
          {/* Central thin elegant connecting line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-proponte-yellow via-proponte-gold to-proponte-silver/20 transform md:-translate-x-1/2" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                
                {/* Connecting Circle/Pin */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute left-1 md:left-1/2 w-10 h-10 rounded-full bg-proponte-yellow flex items-center justify-center shadow-lg transform md:-translate-x-1/2 z-10 border-2 border-proponte-white"
                >
                  {step.icon}
                </motion.div>

                {/* Content block wrapper */}
                <div className="w-full flex flex-col md:flex-row">
                  
                  {/* Left Column (Desktop alternating) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:pr-14 text-left md:text-right relative">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {/* Huge Editorial Number Overlaid behind text */}
                        <span className="absolute -top-8 left-12 md:left-auto md:-right-6 font-sans font-black text-proponte-yellow/15 text-7xl md:text-8xl select-none z-0 pointer-events-none">
                          {step.num}
                        </span>
                        
                        <div className="relative z-10">
                          <h3 className="font-sans font-extrabold text-lg text-proponte-black leading-snug">
                            {step.title}
                          </h3>
                          <p className="font-sans text-xs md:text-sm text-proponte-charcoal/75 mt-2 leading-relaxed text-balance">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-0" />

                  {/* Right Column (Desktop alternating) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-14 text-left relative mt-4 md:mt-0">
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        {/* Huge Editorial Number Overlaid behind text */}
                        <span className="absolute -top-8 left-12 font-sans font-black text-proponte-yellow/15 text-7xl md:text-8xl select-none z-0 pointer-events-none">
                          {step.num}
                        </span>

                        <div className="relative z-10">
                          <h3 className="font-sans font-extrabold text-lg text-proponte-black leading-snug">
                            {step.title}
                          </h3>
                          <p className="font-sans text-xs md:text-sm text-proponte-charcoal/75 mt-2 leading-relaxed text-balance">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Mobile placeholder display (For odd steps on mobile) */}
                    <div className="md:hidden">
                      {isEven ? null : (
                        <div className="relative">
                          {/* Mobile huge number */}
                          <span className="absolute -top-8 left-12 font-sans font-black text-proponte-yellow/15 text-7xl select-none z-0 pointer-events-none">
                            {step.num}
                          </span>
                          <div className="relative z-10">
                            <h3 className="font-sans font-extrabold text-base text-proponte-black leading-snug">
                              {step.title}
                            </h3>
                            <p className="font-sans text-xs text-proponte-charcoal/75 mt-2 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
