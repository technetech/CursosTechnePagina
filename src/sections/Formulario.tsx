import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { CheckCircle2 } from "lucide-react";

export default function Formulario() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    tipoPerfil: "",
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    empresa: "",
    programaInteres: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  // Redirect to portal automatically on success step
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        navigate("/portal");
      }, 3500); // Wait 3.5 seconds before redirecting
      return () => clearTimeout(timer);
    }
  }, [step, navigate]);

  return (
    <section
      id="formulario"
      className="relative bg-[#0A0A0A] py-20 md:py-24 overflow-hidden"
    >
      {/* Blue radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 90% 0%, rgba(43,106,255,0.08) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3">
              APLICA AHORA
            </p>
            <h2 className="font-serif text-[28px] md:text-[40px] text-white leading-tight mb-5">
              Transforma tu visión estratégica.
            </h2>
            <p className="font-sans text-[15px] text-white/55 max-w-[400px] mb-8 leading-relaxed">
              Completa este breve formulario para acceder a nuestros programas y desbloquear recursos exclusivos en el Portal Techne. Un asesor validará tu perfil.
            </p>
          </motion.div>

          {/* Right Column - Multi-Step Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 min-h-[400px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              
              {/* STEP 0: Tipo de perfil */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-2xl text-white mb-6">¿Cómo deseas aplicar?</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => {
                        setForm((prev) => ({ ...prev, tipoPerfil: "profesionista" }));
                        handleNext();
                      }}
                      className="w-full text-left bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-[#2B6AFF]/50 rounded-xl p-5 transition-all"
                    >
                      <h4 className="text-white font-medium mb-1">Como Profesional Independiente</h4>
                      <p className="text-sm text-white/50">Busco formarme a título personal para mejorar mis habilidades.</p>
                    </button>
                    <button
                      onClick={() => {
                        setForm((prev) => ({ ...prev, tipoPerfil: "empresa" }));
                        handleNext();
                      }}
                      className="w-full text-left bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-[#2B6AFF]/50 rounded-xl p-5 transition-all"
                    >
                      <h4 className="text-white font-medium mb-1">Represento a una Empresa</h4>
                      <p className="text-sm text-white/50">Busco capacitación o un programa a medida para mi equipo.</p>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 1: Datos Personales */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={handleBack} className="text-white/40 hover:text-white text-sm">
                      ← Volver
                    </button>
                    <h3 className="font-serif text-2xl text-white">Tus datos</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] outline-none"
                          placeholder="Nombre"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="apellidos"
                          value={form.apellidos}
                          onChange={handleChange}
                          className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] outline-none"
                          placeholder="Apellidos"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="correo"
                        value={form.correo}
                        onChange={handleChange}
                        className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] outline-none"
                        placeholder="Correo electrónico"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] outline-none"
                        placeholder="Teléfono"
                      />
                    </div>
                    {form.tipoPerfil === "empresa" && (
                      <div>
                        <input
                          type="text"
                          name="empresa"
                          value={form.empresa}
                          onChange={handleChange}
                          className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] outline-none"
                          placeholder="Nombre de la Empresa"
                        />
                      </div>
                    )}
                    <button
                      onClick={handleNext}
                      disabled={!form.nombre || !form.correo}
                      className="w-full text-[15px] font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] disabled:opacity-50 py-3.5 rounded-lg transition-colors mt-2"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Interés */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <button onClick={handleBack} className="text-white/40 hover:text-white text-sm">
                      ← Volver
                    </button>
                    <h3 className="font-serif text-2xl text-white">¿Qué programa te interesa?</h3>
                  </div>

                  <div className="space-y-4">
                    <select
                      name="programaInteres"
                      value={form.programaInteres}
                      onChange={handleChange}
                      className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm focus:border-[#2B6AFF] outline-none appearance-none"
                    >
                      <option value="" className="bg-[#1a1a1a]">Selecciona un programa</option>
                      <option value="direccion" className="bg-[#1a1a1a]">Dirección Estratégica en IA (10 semanas)</option>
                      <option value="intensivo" className="bg-[#1a1a1a]">Certificación Intensiva (10 horas)</option>
                      {form.tipoPerfil === "empresa" && (
                        <option value="medida" className="bg-[#1a1a1a]">Programas Empresariales a medida</option>
                      )}
                    </select>

                    <button
                      onClick={handleNext}
                      disabled={!form.programaInteres}
                      className="w-full text-[15px] font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] disabled:opacity-50 py-3.5 rounded-lg transition-colors mt-4"
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Success */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2B6AFF]/10 text-[#2B6AFF] mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">¡Solicitud recibida!</h3>
                  <p className="text-white/60 text-[15px] mb-6 max-w-sm mx-auto">
                    Gracias por tu interés. Un asesor se comunicará contigo en las próximas 24 horas hábiles.
                  </p>
                  <p className="text-sm font-medium text-[#2B6AFF] animate-pulse">
                    Redirigiendo a tu Portal Techne...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Progress indicators for steps 0-2 */}
            {step < 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step ? "w-8 bg-[#2B6AFF]" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
