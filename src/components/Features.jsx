import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, Coins, ShieldCheck, ArrowUpRight, Percent } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full py-16 px-4 bg-proponte-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-12 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-proponte-gold bg-proponte-yellow/10 px-3 py-1.5 rounded-md border border-proponte-yellow/20">
            VENTAJAS EXCLUSIVAS
          </span>
          <h2 className="font-sans font-black text-3xl md:text-4xl text-proponte-black tracking-tight mt-4 text-balance">
            La alternativa inteligente al crédito tradicional
          </h2>
          <p className="font-sans text-sm md:text-base text-proponte-charcoal/70 mt-2 max-w-2xl leading-relaxed">
            Sin tasas abusivas. Diseñado para personas y empresas que buscan crecer de forma programada y financieramente sana.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Large Spotlight Bento Card: Spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-proponte-bg-warm/60 border border-proponte-silver/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group overflow-hidden min-h-[380px]"
          >
            {/* Top border ambient shine */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-proponte-yellow via-proponte-gold to-transparent" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-sm">
                <div className="w-12 h-12 rounded-2xl bg-proponte-white flex items-center justify-center shadow-sm mb-6 border border-proponte-silver/10">
                  <CalendarClock className="w-6 h-6 text-proponte-gold" />
                </div>
                <h3 className="font-sans font-black text-xl md:text-2xl text-proponte-black leading-tight">
                  Planificación Inteligente
                </h3>
                <p className="font-sans text-sm text-proponte-charcoal/85 mt-3 leading-relaxed">
                  Adquiere tus bienes de forma programada y sin pagar tasas de interés tradicionales. Mantén tu capital libre para inversiones y oportunidades de negocio.
                </p>
              </div>

              {/* Unique Visual Aid: Simulated Comparison Widget (Anti-AI Look) */}
              <div className="bg-proponte-white border border-proponte-silver/25 rounded-2xl p-4 shadow-sm shrink-0 w-full md:w-64 select-none">
                <span className="block font-sans font-extrabold text-[10px] uppercase tracking-wider text-proponte-charcoal/50 mb-3">
                  Comparativa de Financiamiento
                </span>
                
                {/* Bank bar */}
                <div className="space-y-1 mb-4">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-proponte-black">Préstamo Bancario</span>
                    <span className="text-red-500 font-bold">TEA 25% +</span>
                  </div>
                  <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-[100%] rounded-full" />
                  </div>
                </div>

                {/* Proponte bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-proponte-black">Fondo Proponte</span>
                    <span className="text-proponte-gold font-bold">0% Interés*</span>
                  </div>
                  <div className="w-full h-3 bg-proponte-yellow/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-proponte-yellow to-proponte-gold w-[40%] rounded-full" />
                  </div>
                </div>

                <span className="block font-sans text-[8px] text-proponte-charcoal/40 mt-3 italic leading-none">
                  *Solo aplica cuota de inscripción y gastos administrativos.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-proponte-silver/10 flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-proponte-white text-proponte-gold border border-proponte-gold/20 font-sans font-bold text-xs uppercase rounded-lg">
                Crecimiento Garantizado
              </span>
              <div className="flex items-center text-xs font-bold text-proponte-black space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Saber más</span>
                <ArrowUpRight className="w-4 h-4 text-proponte-gold" />
              </div>
            </div>

          </motion.div>

          {/* Right Column Stack: Two separate smaller cards */}
          <div className="flex flex-col gap-6">
            
            {/* Card 2: Cuotas Accesibles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-proponte-bg-warm/60 border border-proponte-silver/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[177px]"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-proponte-white flex items-center justify-center shadow-sm border border-proponte-silver/10">
                  <Coins className="w-5 h-5 text-proponte-gold" />
                </div>
                <div className="bg-proponte-yellow/15 border border-proponte-yellow/30 px-2 py-0.5 rounded text-[9px] uppercase font-bold text-proponte-gold">
                  Medida
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-sans font-black text-lg text-proponte-black leading-snug">
                  Cuotas Accesibles
                </h3>
                <p className="font-sans text-xs text-proponte-charcoal/80 mt-1.5 leading-relaxed">
                  Adaptadas a tu flujo de ingresos. Configura cuotas estables acordes a tu presupuesto.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Respaldo y Seguridad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-proponte-bg-warm/60 border border-proponte-silver/20 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[177px]"
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-proponte-white flex items-center justify-center shadow-sm border border-proponte-silver/10">
                  <ShieldCheck className="w-5 h-5 text-proponte-gold" />
                </div>
                <div className="bg-proponte-charcoal/10 border border-proponte-charcoal/20 px-2 py-0.5 rounded text-[9px] uppercase font-bold text-proponte-charcoal">
                  SMV
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-sans font-black text-lg text-proponte-black leading-snug">
                  Respaldo y Seguridad
                </h3>
                <p className="font-sans text-xs text-proponte-charcoal/80 mt-1.5 leading-relaxed">
                  Empresa autorizada y regulada por la Superintendencia del Mercado de Valores. Transparencia total.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
