import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router";
import { CheckCircle2, Crown } from "lucide-react";

export default function Aplicar() {
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

  // Ensure page starts at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleCreateAccount = (wantsAccount: boolean) => {
    if (wantsAccount) {
      setStep(4); // Pantalla de mockup creacion
      setTimeout(() => {
        navigate("/portal");
      }, 3500);
    } else {
      setStep(5); // Pantalla de "No cuenta, gracias"
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Simple Header for this standalone page */}
      <header className="absolute top-0 left-0 right-0 z-50 h-20 flex items-center px-6 md:px-12">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img src="/images/logo.png" alt="Techne" className="h-7 w-auto" />
        </Link>
      </header>

      <section className="relative flex-grow py-24 flex items-center overflow-hidden">
        {/* Blue radial glow */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(43,106,255,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3">
                APLICA AHORA
              </p>
              <h2 className="font-serif text-[32px] md:text-[46px] text-white leading-tight mb-5">
                Transforma tu visión estratégica.
              </h2>
              <p className="font-sans text-[16px] text-white/55 max-w-[420px] mb-8 leading-relaxed">
                Completa este breve formulario para acceder a nuestros programas y desbloquear recursos exclusivos en el Portal Techne. Un asesor validará tu perfil.
              </p>
              <Link to="/" className="text-white/40 hover:text-white text-sm font-medium transition-colors">
                ← Volver a la página principal
              </Link>
            </motion.div>

            {/* Right Column - Multi-Step Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 min-h-[420px] flex flex-col justify-center"
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        onClick={handleNext} // Goes to step 3
                        disabled={!form.programaInteres}
                        className="w-full text-[15px] font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] disabled:opacity-50 py-3.5 rounded-lg transition-colors mt-4"
                      >
                        Enviar Solicitud
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Espacio Techne Offer */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2B6AFF]/10 text-[#2B6AFF] mb-4">
                        <Crown size={24} />
                      </div>
                      <h3 className="font-serif text-2xl text-white mb-2">¡Tu solicitud ha sido recibida!</h3>
                      <p className="text-white/60 text-[15px] mb-2 max-w-sm mx-auto">
                        Mientras un asesor revisa tu perfil, queremos invitarte a formar parte de nuestra comunidad.
                      </p>
                    </div>
                    
                    <div className="bg-[#111] border border-[#2B6AFF]/20 rounded-xl p-5 text-center mb-6">
                      <p className="font-semibold text-white mb-2">¿Quieres hacer una cuenta gratuita para Espacio Techne?</p>
                      <p className="text-sm text-white/50">Tendrás acceso inmediato a boletines, recursos descargables y herramientas exclusivas de IA.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleCreateAccount(true)}
                        className="w-full text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] py-3 rounded-lg transition-colors"
                      >
                        Sí, crear cuenta
                      </button>
                      <button
                        onClick={() => handleCreateAccount(false)}
                        className="w-full text-sm font-medium text-white/70 hover:text-white bg-white/[0.06] hover:bg-white/[0.1] py-3 rounded-lg transition-colors"
                      >
                        No por ahora
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Creating Account (Mockup Redirect) */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2B6AFF]/10 text-[#2B6AFF] mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-3">Creando tu espacio...</h3>
                    <p className="text-sm font-medium text-[#2B6AFF] animate-pulse">
                      Redirigiendo a tu Portal Techne...
                    </p>
                  </motion.div>
                )}

                {/* STEP 5: No Account, Success message */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-3">Todo listo.</h3>
                    <p className="text-white/60 text-[15px] mb-6 max-w-sm mx-auto">
                      Gracias. Un asesor te hablará personalmente en las próximas 24 horas.
                    </p>
                    <Link to="/" className="inline-block text-sm font-semibold text-[#2B6AFF] border border-[#2B6AFF] hover:bg-[#2B6AFF] hover:text-white transition-colors px-6 py-2.5 rounded-full">
                      Volver al inicio
                    </Link>
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
    </div>
  );
}
