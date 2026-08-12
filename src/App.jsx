import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Uses from './components/Uses';
import Timeline from './components/Timeline';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-proponte-bg-warm flex flex-col font-sans select-none text-proponte-charcoal pb-12 relative">
      {/* Premium Header */}
      <Header />

      {/* Main Contents */}
      <main className="flex-grow">
        {/* Hero & Video Player */}
        <Hero />

        {/* Benefits Grid */}
        <Features />

        {/* Use Cases Carousel / Grid */}
        <Uses />

        {/* Timeline Next Steps */}
        <Timeline />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Trust Footer (Non-floating corporate text) */}
      <footer className="w-full bg-proponte-charcoal text-proponte-silver py-12 px-6 border-t border-proponte-silver/10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
          
          {/* Logo representation - Relative Path */}
          <div className="flex items-center space-x-2">
            <img
              src="./logo_negativo_2026.png"
              alt="Proponte EAFC"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Legal and SMV info */}
          <div className="max-w-2xl text-xs text-proponte-silver/60 leading-relaxed space-y-2">
            <p>
              Proponte EAFC S.A. es una empresa administradora de fondos colectivos constituida legalmente e inscrita en el registro correspondiente de la Superintendencia del Mercado de Valores (SMV) del Perú.
            </p>
            <p>
              El sistema de fondos colectivos es una alternativa de financiamiento inteligente que promueve el ahorro programado de sus asociados para la adjudicación de bienes muebles y/o inmuebles mediante sorteo o remate.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-proponte-silver/20" />

          {/* Copyright */}
          <div className="text-[10px] text-proponte-silver/45 font-medium tracking-wide">
            © {new Date().getFullYear()} PROPONTE EAFC. Todos los derechos reservados.
          </div>

        </div>
      </footer>
    </div>
  );
}
