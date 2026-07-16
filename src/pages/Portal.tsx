import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Newspaper, ChevronRight, Shuffle, Search, Building2, BookA, Crown } from "lucide-react";
import { Link } from "react-router";

// --- DUMMY DATA ---
const aiFacts = [
  "En 1956, John McCarthy acuñó el término 'Inteligencia Artificial' en la Conferencia de Dartmouth.",
  "El primer chatbot de la historia fue ELIZA, creado en 1966 por Joseph Weizenbaum.",
  "Los modelos fundacionales modernos pueden tener más de un billón (trillion) de parámetros.",
  "Se estima que la IA podría aportar hasta $15.7 billones a la economía global para 2030.",
  "GPT-4 aprobó el examen del colegio de abogados (Bar Exam) en el percentil 90."
];

const materials = [
  { id: 1, title: "Guía de Implementación IA 2026", type: "PDF", size: "2.4 MB" },
  { id: 2, title: "Directorio de Herramientas para Equipos", type: "PDF", size: "1.1 MB" },
  { id: 3, title: "Plantillas de Prompts Ejecutivos", type: "PDF", size: "3.8 MB" },
];

const newsletters = [
  { id: 1, title: "El impacto de agentes autónomos en la toma de decisiones", date: "14 Jul 2026", excerpt: "Analizamos cómo las empresas más eficientes están delegando tareas repetitivas a agentes basados en LLMs." },
  { id: 2, title: "Por qué tu competencia ya entrena modelos locales", date: "05 Jul 2026", excerpt: "Privacidad y seguridad: las claves de por qué el sector financiero está adoptando modelos open-source en sus servidores." },
];

const tabs = [
  { id: "boletin", label: "Boletín Techne", icon: Newspaper },
  { id: "random", label: "Random", icon: Shuffle },
  { id: "materiales", label: "Materiales", icon: FileText },
  { id: "directorio", label: "Directorio", icon: Building2 },
  { id: "glosario", label: "Glosario", icon: BookA },
  { id: "premium", label: "Portal Techne", icon: Crown },
];

export default function Portal() {
  const [activeTab, setActiveTab] = useState("boletin");
  const [randomFact, setRandomFact] = useState("Haz clic en el botón para descubrir un dato sobre la Inteligencia Artificial.");

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * aiFacts.length);
    setRandomFact(aiFacts[randomIndex]);
  };

  return (
    // Note: The main container is now a light background
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Header (Mantiene el listón oscuro original) */}
      <header className="bg-[#0A0A0A] border-b border-white/[0.06] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/images/logo.png" alt="Techne" className="h-6 w-auto" />
            </Link>
            <span className="w-px h-5 bg-white/20" />
            <span className="text-sm font-medium text-white/70">Espacio Techne</span>
          </div>
          <Link to="/" className="text-sm text-white/50 hover:text-white transition-colors">
            Cerrar Sesión
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-[32px] md:text-[42px] leading-tight mb-4 text-gray-900">
              Bienvenido a tu <span className="text-[#2B6AFF] italic">Espacio Techne</span>
            </h1>
            <p className="text-gray-500 max-w-2xl text-[15px]">
              Explora recursos gratuitos, noticias, herramientas y amplía tu conocimiento en Inteligencia Artificial.
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="mt-10 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 border-b border-gray-200 min-w-max pb-px">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${
                      isActive ? "text-[#2B6AFF]" : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B6AFF]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* 1. Boletín Techne */}
            {activeTab === "boletin" && (
              <div className="max-w-3xl">
                <h2 className="font-serif text-2xl mb-6 text-gray-900">Últimas Publicaciones</h2>
                <div className="space-y-4">
                  {newsletters.map((post) => (
                    <div key={post.id} className="bg-white border border-gray-200 hover:border-gray-300 p-6 rounded-2xl transition-all cursor-pointer shadow-sm hover:shadow-md">
                      <p className="font-mono text-[10px] text-gray-400 tracking-wider mb-3">{post.date}</p>
                      <h3 className="font-sans text-[18px] font-semibold mb-2 text-gray-900">{post.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-xs font-semibold text-[#2B6AFF] gap-1">
                        Leer artículo <ChevronRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. Random */}
            {activeTab === "random" && (
              <div className="flex flex-col items-center justify-center py-20 max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 bg-[#2B6AFF]/10 text-[#2B6AFF] rounded-full flex items-center justify-center mb-8">
                  <Shuffle size={32} />
                </div>
                <p className="font-serif text-2xl md:text-3xl text-gray-900 mb-10 leading-relaxed min-h-[120px]">
                  "{randomFact}"
                </p>
                <button
                  onClick={generateRandomFact}
                  className="bg-[#2B6AFF] hover:bg-[#1A5AF5] text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
                >
                  <Shuffle size={18} />
                  Generar otro dato
                </button>
              </div>
            )}

            {/* 3. Materiales */}
            {activeTab === "materiales" && (
              <div className="max-w-3xl">
                <h2 className="font-serif text-2xl mb-2 text-gray-900">PDFs Gratuitos</h2>
                <p className="text-gray-500 text-sm mb-6">Descarga recursos de alto valor para tu empresa.</p>
                <div className="space-y-4">
                  {materials.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-[#2B6AFF]/30 rounded-xl transition-all shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-[#2B6AFF]">
                          <FileText size={18} />
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium text-gray-900 mb-1">{file.title}</h4>
                          <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono">
                            <span>{file.type}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{file.size}</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#2B6AFF] hover:text-white hover:border-[#2B6AFF] transition-all">
                        <Download size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Directorio */}
            {activeTab === "directorio" && (
              <div>
                <h2 className="font-serif text-2xl mb-2 text-gray-900">Directorio de IA</h2>
                <p className="text-gray-500 text-sm mb-6">Empresas, herramientas y personas clave en el ecosistema.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Placeholder Directory Item */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Building2 className="text-gray-400" size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Empresa Ejemplo</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                      Una breve descripción de lo que hace esta herramienta o empresa y cómo puede ayudar a integrar inteligencia artificial en tus procesos.
                    </p>
                    <a href="#" className="text-[#2B6AFF] text-sm font-medium hover:underline">Visitar sitio web &rarr;</a>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Glosario */}
            {activeTab === "glosario" && (
              <div className="max-w-3xl">
                <h2 className="font-serif text-2xl mb-2 text-gray-900">Glosario Técnico</h2>
                <p className="text-gray-500 text-sm mb-6">Busca y entiende los términos clave de la industria.</p>
                
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Buscar un término (ej. LLM, RAG, Prompting)..."
                    className="w-full bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 text-sm focus:border-[#2B6AFF] focus:ring-2 focus:ring-[#2B6AFF]/20 outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-6">
                  {/* Placeholder Glossary Item */}
                  <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="font-semibold text-[#2B6AFF] mb-2 text-lg">LLM (Large Language Model)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Un modelo de lenguaje grande es un algoritmo de aprendizaje profundo que puede reconocer, resumir, traducir, predecir y generar contenido utilizando conjuntos de datos masivos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Portal Techne (Premium CTA) */}
            {activeTab === "premium" && (
              <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#2B6AFF]/20 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-6 border border-white/20">
                    <Crown size={32} />
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">Suscripción Portal Techne</h2>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    Desbloquea el acceso ilimitado a nuestra biblioteca completa de recursos, sesiones grabadas, casos de estudio detallados y herramientas exclusivas para líderes empresariales.
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left grid sm:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-center gap-2">✓ Casos de uso avanzados</li>
                      <li className="flex items-center gap-2">✓ Grabaciones de Masterclasses</li>
                    </ul>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-center gap-2">✓ Plantillas de automatización</li>
                      <li className="flex items-center gap-2">✓ Soporte en comunidad</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <p className="text-2xl font-serif">
                      $49 <span className="text-sm font-sans text-white/50">USD / mes</span>
                    </p>
                    <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                      Suscribirse Ahora
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
