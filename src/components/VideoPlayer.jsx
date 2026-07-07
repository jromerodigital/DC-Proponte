import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ShieldCheck, Award, MapPin, Wifi, Battery, RotateCcw } from 'lucide-react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const videoRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Official vertical video URL
  const videoUrl = 'https://www.proponte.com.pe/wp-content/uploads/2026/07/Proponte-4-pasos.mov';

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(err => console.log('Play error:', err));
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  const handleMuteToggle = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleReset = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  // Tracks scroll index on mobile swipe row
  const handleCardsScroll = () => {
    if (!cardsContainerRef.current) return;
    const scrollLeft = cardsContainerRef.current.scrollLeft;
    const cardWidth = cardsContainerRef.current.querySelector('.snap-center').offsetWidth;
    const gap = 16; // gap-4 = 16px
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setActiveCard(index);
  };

  const trustCards = [
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-proponte-gold" />,
      title: "Supervisado por la SMV",
      description: "Superintendencia del Mercado de Valores"
    },
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-proponte-gold" />,
      title: "Trayectoria y Respaldo",
      description: "Grupo empresarial con +25 años de experiencia"
    },
    {
      icon: <MapPin className="w-5 h-5 md:w-6 md:h-6 text-proponte-gold" />,
      title: "Presencia Nacional",
      description: "Oficina en los principales departamentos del Perú"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center select-none">
      
      {/* 9:16 Smartphone Simulator Frame */}
      <div className="w-[260px] xs:w-[290px] md:w-[320px] aspect-[9/16] bg-proponte-black rounded-[42px] border-[10px] border-proponte-charcoal shadow-2xl relative overflow-hidden group border-opacity-95 ring-4 ring-proponte-silver/10">
        
        {/* Smartphone Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-proponte-charcoal rounded-b-xl z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-black/60 border border-proponte-silver/10" />
          <div className="w-6 h-0.5 bg-black/40 rounded-full ml-3" />
        </div>

        {/* Smartphone Status Bar Info */}
        <div className="absolute top-1 left-0 right-0 px-6 flex justify-between items-center text-[8px] font-sans font-bold text-proponte-white/70 z-20 pointer-events-none">
          <span>09:41</span>
          <div className="flex items-center space-x-1">
            <Wifi className="w-2 h-2" />
            <Battery className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Video Cover / Poster Screen */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-20 flex flex-col justify-between p-6 bg-gradient-to-t from-proponte-black/95 via-proponte-black/40 to-proponte-black/80 cursor-pointer"
              onClick={handlePlayPause}
            >
              <div className="mt-8">
                <span className="inline-block px-2.5 py-0.5 bg-proponte-yellow/15 border border-proponte-yellow/30 text-proponte-yellow text-[9px] uppercase font-bold tracking-widest rounded">
                  Paso a Paso
                </span>
              </div>

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-proponte-yellow text-proponte-black flex items-center justify-center shadow-[0_0_20px_rgba(255,209,0,0.4)] relative border-[3px] border-proponte-charcoal"
                >
                  <div className="absolute -inset-1.5 bg-proponte-yellow/20 rounded-full animate-ping pointer-events-none" />
                  <Play className="w-5 h-5 fill-proponte-black translate-x-0.5" />
                </motion.div>
              </div>

              {/* Bottom text info */}
              <div className="text-left mb-2">
                <h3 className="font-sans font-extrabold text-xs text-proponte-white tracking-wide uppercase leading-tight">
                  Proponte en 4 pasos
                </h3>
                <p className="font-sans text-[9px] text-proponte-silver/70 mt-1 leading-normal">
                  Mira este video explicativo en formato vertical y descubre cómo adjudicar sin intereses.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HTML5 Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handlePlayPause}
          onTimeUpdate={handleTimeUpdate}
          loop
          playsInline
        >
          <source src={videoUrl} type="video/quicktime" />
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta reproducción de video.
        </video>

        {/* Video Overlay Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-proponte-black/95 to-transparent flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15">
          
          {/* Progress Slider */}
          <div className="w-full h-1 bg-proponte-white/30 rounded-full overflow-hidden cursor-pointer">
            <div
              className="h-full bg-proponte-yellow rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between text-proponte-white">
            <div className="flex items-center space-x-3">
              <button
                onClick={(e) => { e.stopPropagation(); handlePlayPause(); }}
                className="hover:text-proponte-yellow transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
              <button onClick={handleReset} className="hover:text-proponte-yellow transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              onClick={handleMuteToggle}
              className="hover:text-proponte-yellow transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>

      {/* Swipeable Trust Cards (Mobile) / Grid (Desktop) */}
      <div className="w-full max-w-4xl mt-8 px-4">
        
        {/* Mobile Swipe Container (Horizontal scroll row) */}
        <div
          ref={cardsContainerRef}
          onScroll={handleCardsScroll}
          className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="min-w-[240px] w-[80%] snap-center shrink-0 bg-proponte-white border border-proponte-yellow/20 rounded-2xl p-5 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(229,184,0,0.06)]"
            >
              <div className="p-3 bg-proponte-yellow/10 rounded-full mb-3 border border-proponte-yellow/20">
                {card.icon}
              </div>
              <h4 className="font-sans font-black text-xs text-proponte-black">
                {card.title}
              </h4>
              <p className="font-sans text-[10px] text-proponte-charcoal/70 mt-1.5 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel indicators dots (Mobile only) */}
        <div className="flex md:hidden justify-center space-x-2 mt-1 mb-2">
          {trustCards.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeCard ? 'w-5 bg-proponte-gold' : 'w-2 bg-proponte-silver/45'
              }`}
            />
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-proponte-white border border-proponte-yellow/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(229,184,0,0.06)] hover:shadow-[0_12px_45px_rgba(229,184,0,0.12)] transition-shadow duration-300"
            >
              <div className="p-3 bg-proponte-yellow/10 rounded-full mb-3 border border-proponte-yellow/20">
                {card.icon}
              </div>
              <h4 className="font-sans font-black text-sm text-proponte-black">
                {card.title}
              </h4>
              <p className="font-sans text-xs text-proponte-charcoal/70 mt-1.5 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
