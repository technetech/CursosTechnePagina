import { motion } from "framer-motion";
import { Download, FileText, Newspaper, ChevronRight } from "lucide-react";
import { Link } from "react-router"; // react-router v7 import

const materials = [
  {
    id: 1,
    title: "Guía de Implementación IA 2026",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Directorio de Herramientas para Equipos",
    type: "PDF",
    size: "1.1 MB",
  },
  {
    id: 3,
    title: "Plantillas de Prompts Ejecutivos",
    type: "PDF",
    size: "3.8 MB",
  },
];

const newsletters = [
  {
    id: 1,
    title: "El impacto de agentes autónomos en la toma de decisiones",
    date: "14 Jul 2026",
    excerpt: "Analizamos cómo las empresas más eficientes están delegando tareas repetitivas a agentes basados en LLMs.",
  },
  {
    id: 2,
    title: "Por qué tu competencia ya entrena modelos locales",
    date: "05 Jul 2026",
    excerpt: "Privacidad y seguridad: las claves de por qué el sector financiero está adoptando modelos open-source en sus servidores.",
  },
  {
    id: 3,
    title: "Automatización de flujos de trabajo en Recursos Humanos",
    date: "28 Jun 2026",
    excerpt: "Casos de éxito reales de cómo la IA está reduciendo el tiempo de contratación en un 40%.",
  },
];

export default function Portal() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      {/* Portal Navbar */}
      <header className="border-b border-white/[0.06] bg-[#0A0A0A] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/images/logo.png" alt="Techne" className="h-6 w-auto" />
            </Link>
            <span className="w-px h-5 bg-white/20" />
            <span className="text-sm font-medium text-white/70">Portal del Alumno</span>
          </div>
          <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-serif text-[32px] md:text-[42px] leading-tight mb-4">
            Bienvenido a tu <span className="text-[#2B6AFF] italic">Espacio Techne</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-[15px]">
            Aquí encontrarás recursos exclusivos, guías de implementación y análisis de tendencias para mantenerte a la vanguardia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Newsletter */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="text-[#2B6AFF]" size={20} />
              <h2 className="font-serif text-2xl">Boletín Techne</h2>
            </div>
            
            <div className="space-y-4">
              {newsletters.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group bg-[#111] border border-white/5 hover:border-white/15 p-6 rounded-2xl transition-all cursor-pointer"
                >
                  <p className="font-mono text-[10px] text-white/40 tracking-wider mb-3">
                    {post.date}
                  </p>
                  <h3 className="font-sans text-[17px] font-semibold mb-2 group-hover:text-[#2B6AFF] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-[#2B6AFF] gap-1">
                    Leer artículo <ChevronRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Materiales */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-[#2B6AFF]" size={20} />
              <h2 className="font-serif text-2xl">Materiales</h2>
            </div>

            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <p className="text-sm text-white/50 mb-6">
                Descarga las guías y plantillas para usarlas con tu equipo.
              </p>
              <div className="space-y-4">
                {materials.map((file, i) => (
                  <motion.div
                    key={file.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center justify-between p-4 bg-[#151515] border border-white/5 hover:border-white/20 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#2B6AFF]/10 flex items-center justify-center text-[#2B6AFF]">
                        <FileText size={18} />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium text-white/90 mb-1">
                          {file.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-white/40 font-mono">
                          <span>{file.type}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span>{file.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:bg-[#2B6AFF] group-hover:text-white transition-all">
                      <Download size={14} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
