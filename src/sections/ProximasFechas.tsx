import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Inteligencia Artificial Aplicada",
    description: "Domina las bases de la IA y aplícalas a casos de uso reales en tu empresa.",
    modality: "Presencial / Digital",
  },
  {
    id: 2,
    title: "Multiplica tus resultados con IA",
    description: "Aprende estrategias avanzadas para escalar operaciones usando automatización.",
    modality: "Presencial / Digital",
  },
  {
    id: 3,
    title: "Curso de Verano",
    description: "Edición intensiva para directivos. Actualízate rápidamente en las tendencias.",
    modality: "Presencial / Digital",
  },
];

export default function ProximasFechas() {
  const handleApplyClick = (index: number) => {
    // Dispatch custom event so the carousel can listen to it
    const event = new CustomEvent("selectCourse", { detail: index });
    window.dispatchEvent(event);

    // Scroll to the carousel section
    const element = document.getElementById("detalles-cursos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="fechas" className="bg-[#0A0A0A] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <p className="font-mono text-xs font-semibold text-[#2B6AFF] tracking-[0.12em] mb-3 uppercase">
            Nuestros programas
          </p>
          <h2 className="font-serif text-[28px] md:text-[42px] leading-tight mb-3">
            <span className="text-white">Formato </span>
            <span className="text-[#2B6AFF] italic">presencial</span>
            <span className="text-white"> y digital</span>
          </h2>
          <p className="font-sans text-base text-white/60 max-w-[480px] mb-12 md:mx-0 mx-auto">
            Elige el programa que mejor se adapte a tus necesidades y comienza a transformar tu empresa hoy.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-[#111] border border-white/10 p-8 flex flex-col justify-between hover:border-[#2B6AFF]/50 transition-colors"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-white/70 font-sans text-[10px] font-semibold tracking-wide mb-4">
                  {course.modality}
                </span>
                <h3 className="font-serif text-[24px] text-white leading-tight mb-3">
                  {course.title}
                </h3>
                <p className="font-sans text-sm text-white/50 mb-6">
                  {course.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <button
                  onClick={() => handleApplyClick(i)}
                  className="w-full inline-flex justify-center font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px active:translate-y-0 px-6 py-3 transition-all duration-200"
                >
                  Aplicar al programa
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
