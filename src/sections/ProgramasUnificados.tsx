import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const unifiedCourses = [
  {
    id: 1,
    title: "Inteligencia Artificial Aplicada",
    shortDescription: "Domina las bases de la IA y aplícalas a casos de uso reales en tu empresa.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    modality: "Presencial / Digital",
    image: "/images/module-1.jpg",
    bullets: [
      "Fundamentos de Modelos de Lenguaje",
      "Implementación de IA en flujos de trabajo",
      "Casos de estudio en empresas reales",
      "Privacidad y ética en el uso de IA",
    ],
  },
  {
    id: 2,
    title: "Multiplica tus resultados con IA",
    shortDescription: "Aprende estrategias avanzadas para escalar operaciones usando automatización.",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    modality: "Presencial / Digital",
    image: "/images/module-2.jpg",
    bullets: [
      "Automatización avanzada con agentes",
      "Escalamiento de operaciones sin contratar más personal",
      "Personalización de asistentes virtuales",
      "Métricas de impacto y retorno de inversión",
    ],
  },
  {
    id: 3,
    title: "Programas Empresariales a medida",
    shortDescription: "Diseñamos rutas de aprendizaje y capacitación exclusivas para los equipos de tu empresa.",
    description: "Creamos programas personalizados enfocados en las necesidades específicas de tu compañía, integrando a tus equipos en el uso estratégico y técnico de la inteligencia artificial para resolver problemas reales del negocio.",
    modality: "Presencial / Digital",
    image: "/images/module-3.jpg",
    bullets: [
      "Rutas de aprendizaje diseñadas para tus equipos",
      "Proyectos aplicados a problemas internos de la empresa",
      "Capacitación en herramientas de IA seleccionadas a medida",
      "Seguimiento y evaluación del impacto en el negocio",
    ],
  },
];

export default function ProgramasUnificados() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCourse = unifiedCourses[activeTab];

  return (
    <section id="programas" className="bg-[#0A0A0A] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3 uppercase">
            Nuestros programas
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-3">
            <span className="text-white">Formato </span>
            <span className="text-[#2B6AFF] italic">presencial</span>
            <span className="text-white"> y digital</span>
          </h2>
          <p className="font-sans text-base text-white/60 max-w-[480px] mx-auto">
            Elige el programa que mejor se adapte a tus necesidades y comienza a transformar tu empresa hoy.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {unifiedCourses.map((course, index) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(index)}
              className={`flex-1 text-left p-5 rounded-xl border transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#111] border-[#2B6AFF] shadow-[0_0_15px_rgba(43,106,255,0.15)]"
                  : "bg-transparent border-white/10 hover:border-white/30 hover:bg-[#111]/50"
              }`}
            >
              <h3 className={`font-serif text-xl md:text-2xl mb-2 transition-colors duration-300 ${activeTab === index ? "text-[#2B6AFF]" : "text-white"}`}>
                {course.title}
              </h3>
              <p className="font-sans text-sm text-white/60 line-clamp-2">
                {course.shortDescription}
              </p>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row h-full"
            >
              {/* Image Section */}
              <div className="w-full lg:w-2/5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#111]/50 lg:to-[#111]" />
                <span className="absolute top-6 left-6 inline-block px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-white/90 font-sans text-[10px] font-semibold tracking-wide">
                  {activeCourse.modality}
                </span>
              </div>

              {/* Info Section */}
              <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-10">
                <h3 className="font-serif text-[28px] md:text-[36px] text-white mb-6">
                  {activeCourse.title}
                </h3>
                <p className="font-sans text-base text-white/70 mb-10 leading-relaxed max-w-2xl">
                  {activeCourse.description}
                </p>

                <div className="bg-[#151515] p-6 rounded-xl border border-white/5 mb-8">
                  <h4 className="font-sans text-sm font-semibold text-[#2B6AFF] tracking-wide uppercase mb-6">
                    ¿Qué aprenderás?
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCourse.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#2B6AFF] mt-1 text-xs">&#9670;</span>
                        <span className="font-sans text-sm text-white/80">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    to="/aplicar"
                    className="inline-flex font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px active:translate-y-0 px-8 py-3 rounded-full transition-all duration-200"
                  >
                    Inscribirse al programa
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
