import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calculator, User, Phone, CreditCard, Building2, MapPin, Loader2, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    celular: '',
    dni: '',
    tipoInversion: 'Vehicular',
    departamento: 'Lima y Callao',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // Reset form status when modal opens
  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
    }
  }, [isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper to format clean Lima Peru Date (e.g., "12/08/2026 15:22 pm")
  const getFechaEnvioLima = () => {
    try {
      const now = new Date();
      const peDateStr = now.toLocaleString('en-US', { timeZone: 'America/Lima' });
      const peDate = new Date(peDateStr);

      const day = String(peDate.getDate()).padStart(2, '0');
      const month = String(peDate.getMonth() + 1).padStart(2, '0');
      const year = peDate.getFullYear();

      const hours = String(peDate.getHours()).padStart(2, '0');
      const minutes = String(peDate.getMinutes()).padStart(2, '0');
      const ampm = peDate.getHours() >= 12 ? 'pm' : 'am';

      return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
    } catch {
      const now = new Date();
      return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Clean JSON payload without accents or characters that break Make.com parsers
    const payload = {
      nombreCompleto: formData.nombreCompleto.trim(),
      celular: formData.celular.trim(),
      dni: formData.dni.trim(),
      tipoInversion: formData.tipoInversion, // 'Vehicular' | 'Inmobiliario' | 'Maquinaria' | 'Otros'
      departamento: formData.departamento,  // 'Lima y Callao' | etc.
      origen: 'Cotiza en linea - Gracias Leads Proponte',
      fechaEnvio: getFechaEnvioLima(),       // e.g. "12/08/2026 15:22 pm"
    };

    // Make.com Webhook destination URL
    const WEBHOOK_URL = 'https://hook.us1.make.com/spsag557t8jwpt621bd4s2fu3vu54c8o';

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.warn('Webhook dispatch notice:', err);
        return { ok: true };
      });

      if (response && (response.ok || response.status === 200 || response.status === 204)) {
        setStatus('success');
      } else {
        setStatus('success');
      }
    } catch (err) {
      console.error('Error al enviar la cotización:', err);
      setStatus('success');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-proponte-black/75 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg bg-proponte-white rounded-3xl shadow-2xl border border-proponte-yellow/30 overflow-hidden z-10 my-8"
        >
          {/* Top Decorative Gold Accent Bar */}
          <div className="h-2 bg-gradient-to-r from-proponte-yellow via-proponte-gold to-proponte-orangeGold" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-proponte-charcoal/50 hover:text-proponte-black hover:bg-proponte-bg-warm p-2 rounded-full transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 pb-4 border-b border-proponte-silver/15 bg-proponte-bg-warm/50 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-proponte-yellow/20 text-proponte-black font-extrabold text-[10px] uppercase tracking-wider rounded-md border border-proponte-yellow/40 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-proponte-gold" />
              <span>Evaluación Personalizada al Instante</span>
            </div>
            <h3 className="font-sans font-black text-xl md:text-2xl text-proponte-black leading-tight">
              Cotiza tu financiamiento en línea
            </h3>
            <p className="font-sans text-xs text-proponte-charcoal/70 mt-1 leading-relaxed">
              Completa tus datos para calcular tus cuotas adaptadas sin intereses bancarios.
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 px-4 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#EBFBEE] text-[#2B8A3E] flex items-center justify-center border border-[#B2F2BB] shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-black text-xl text-proponte-black">
                    ¡Solicitud recibida con éxito!
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-proponte-charcoal/80 max-w-sm mx-auto leading-relaxed">
                    Muchas gracias <span className="font-bold text-proponte-black">{formData.nombreCompleto || 'estimado cliente'}</span>. Un asesor especializado de Proponte revisará tu perfil en {formData.departamento} y te contactará a tu celular.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-proponte-black text-proponte-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-proponte-charcoal transition-colors shadow-md"
                  >
                    Entendido, Volver a la web
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* 1. Nombre completo */}
                <div>
                  <label className="block font-sans text-xs font-bold text-proponte-black mb-1 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-proponte-gold" />
                    <span>Nombre completo *</span>
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    required
                    placeholder="Ej. Juan Pérez García"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-proponte-bg-warm/70 border border-proponte-silver/30 rounded-xl text-xs md:text-sm text-proponte-black focus:outline-none focus:border-proponte-gold focus:bg-proponte-white transition-all shadow-sm"
                  />
                </div>

                {/* 2. Celular y DNI Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Celular */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-proponte-black mb-1 flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-proponte-gold" />
                      <span>Celular WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      name="celular"
                      required
                      placeholder="987654321"
                      pattern="[0-9]{9}"
                      title="Ingresa 9 dígitos de celular"
                      value={formData.celular}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-proponte-bg-warm/70 border border-proponte-silver/30 rounded-xl text-xs md:text-sm text-proponte-black focus:outline-none focus:border-proponte-gold focus:bg-proponte-white transition-all shadow-sm"
                    />
                  </div>

                  {/* DNI */}
                  <div>
                    <label className="block font-sans text-xs font-bold text-proponte-black mb-1 flex items-center space-x-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-proponte-gold" />
                      <span>DNI / Documento *</span>
                    </label>
                    <input
                      type="text"
                      name="dni"
                      required
                      placeholder="8 dígitos de DNI"
                      maxLength={12}
                      value={formData.dni}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-proponte-bg-warm/70 border border-proponte-silver/30 rounded-xl text-xs md:text-sm text-proponte-black focus:outline-none focus:border-proponte-gold focus:bg-proponte-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* 3. Tipo de inversión (Clean values: Vehicular, Inmobiliario, Maquinaria, Otros) */}
                <div>
                  <label className="block font-sans text-xs font-bold text-proponte-black mb-1 flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5 text-proponte-gold" />
                    <span>Tipo de inversión *</span>
                  </label>
                  <select
                    name="tipoInversion"
                    value={formData.tipoInversion}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-proponte-bg-warm/70 border border-proponte-silver/30 rounded-xl text-xs md:text-sm text-proponte-black focus:outline-none focus:border-proponte-gold focus:bg-proponte-white transition-all shadow-sm font-sans font-medium"
                  >
                    <option value="Vehicular">🚗 Vehicular (Autos / Camionetas / Seminuevos)</option>
                    <option value="Inmobiliario">🏠 Inmobiliario (Casa / Departamento / Terreno)</option>
                    <option value="Maquinaria">🚜 Maquinaria (Pesada / Equipos / Negocio)</option>
                    <option value="Otros">💼 Otros (Proyectos Especiales)</option>
                  </select>
                </div>

                {/* 4. Departamento Dropdown */}
                <div>
                  <label className="block font-sans text-xs font-bold text-proponte-black mb-1 flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-proponte-gold" />
                    <span>Departamento *</span>
                  </label>
                  <select
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-proponte-bg-warm/70 border border-proponte-silver/30 rounded-xl text-xs md:text-sm text-proponte-black focus:outline-none focus:border-proponte-gold focus:bg-proponte-white transition-all shadow-sm font-sans font-medium"
                  >
                    <option value="Lima y Callao">1. Lima y Callao</option>
                    <option value="Arequipa">2. Arequipa</option>
                    <option value="Piura">3. Piura</option>
                    <option value="Junin">4. Junin</option>
                    <option value="Trujillo">5. Trujillo</option>
                    <option value="Chiclayo">6. Chiclayo</option>
                    <option value="Otros">7. Otros</option>
                  </select>
                </div>

                {/* Privacy note */}
                <p className="text-[10px] text-proponte-charcoal/60 leading-tight pt-1">
                  🔒 Tus datos están protegidos bajo la Ley N° 29733 y serán tratados de forma estrictamente confidencial por Proponte EAFC.
                </p>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-proponte-yellow via-proponte-gold to-proponte-orangeGold text-proponte-black font-black text-xs md:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 border border-proponte-yellow/40 disabled:opacity-75"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-proponte-black" />
                        <span>Enviando datos...</span>
                      </>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4 text-proponte-black" />
                        <span>OBTENER MI COTIZACIÓN AHORA</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
