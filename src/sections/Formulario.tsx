import { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "+1,100", label: "Líderes formados en LATAM" },
  { value: "5", label: "Países con cohortes activas" },
  { value: "40", label: "Directivos máx. por cohorte" },
  { value: "70%", label: "Completion rate validado" },
];

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    rol: "",
    telefono: "",
    empresa: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const filledCount = Object.values(form).filter((v) => v.trim() !== "").length;
  const progress = Math.round((filledCount / 6) * 100);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
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
              Aplica ahora. Un asesor te llama en 24 horas.
            </h2>
            <p className="font-sans text-[15px] text-white/55 max-w-[400px] mb-8 leading-relaxed">
              Programa exclusivo para VPs, C-levels y directores de empresas de
              +300 empleados. Validamos perfil antes de confirmar el cupo. El
              precio se comparte durante la entrevista.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5"
                >
                  <p className="font-serif text-[24px] md:text-[28px] text-[#2B6AFF] leading-none">
                    {s.value}
                  </p>
                  <p className="font-sans text-xs text-white/45 mt-2 leading-snug">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8"
          >
            <div className="space-y-4">
              {/* Nombre + Apellidos */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-sm text-white/80 mb-1.5 block">
                    Nombre<span className="text-[#2B6AFF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label className="font-sans text-sm text-white/80 mb-1.5 block">
                    Apellidos<span className="text-[#2B6AFF]">*</span>
                  </label>
                  <input
                    type="text"
                    name="apellidos"
                    value={form.apellidos}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all"
                    placeholder="Apellidos"
                  />
                </div>
              </div>

              {/* Correo */}
              <div>
                <label className="font-sans text-sm text-white/80 mb-1.5 block">
                  Correo Empresarial<span className="text-[#2B6AFF]">*</span>
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all"
                  placeholder="correo@empresa.com"
                />
              </div>

              {/* Rol */}
              <div>
                <label className="font-sans text-sm text-white/80 mb-1.5 block">
                  Rol<span className="text-[#2B6AFF]">*</span>
                </label>
                <select
                  name="rol"
                  value={form.rol}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all appearance-none"
                >
                  <option value="" className="bg-[#1a1a1a]">
                    Selecciona tu rol
                  </option>
                  <option value="ceo" className="bg-[#1a1a1a]">
                    CEO / Director General
                  </option>
                  <option value="clevel" className="bg-[#1a1a1a]">
                    C-Level (CIO, CTO, CMO, etc.)
                  </option>
                  <option value="vp" className="bg-[#1a1a1a]">
                    VP / Vicepresidente
                  </option>
                  <option value="director" className="bg-[#1a1a1a]">
                    Director / Gerente
                  </option>
                  <option value="otro" className="bg-[#1a1a1a]">
                    Otro
                  </option>
                </select>
              </div>

              {/* Teléfono */}
              <div>
                <label className="font-sans text-sm text-white/80 mb-1.5 block">
                  Número de teléfono<span className="text-[#2B6AFF]">*</span>
                </label>
                <div className="flex gap-2">
                  <span className="inline-flex items-center bg-white/[0.06] border border-white/[0.12] rounded-lg px-3 py-3 text-white/60 text-sm">
                    MX ▼ +52
                  </span>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    className="flex-1 bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div>
                <label className="font-sans text-sm text-white/80 mb-1.5 block">
                  Tamaño de tu empresa (# empleados)
                  <span className="text-[#2B6AFF]">*</span>
                </label>
                <input
                  type="number"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full bg-white/[0.06] border border-white/[0.12] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-[#2B6AFF] focus:shadow-[0_0_0_3px_rgba(43,106,255,0.15)] outline-none transition-all"
                  placeholder="300+"
                />
              </div>

              {/* Progress Bar */}
              <div className="pt-2">
                <div className="h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2B6AFF] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full font-sans text-[15px] font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] py-3.5 rounded-lg transition-colors duration-200"
              >
                Siguiente
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
