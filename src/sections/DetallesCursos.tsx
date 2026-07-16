import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const coursesDetails = [
  {
    id: 1,
    title: "Inteligencia Artificial Aplicada",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    description: "Creamos programas personalizados enfocados en las necesidades específicas de tu compañía, integrando a tus equipos en el uso estratégico y técnico de la inteligencia artificial para resolver problemas reales del negocio.",
    bullets: [
      "Rutas de aprendizaje diseñadas para tus equipos",
      "Proyectos aplicados a problemas internos de la empresa",
      "Capacitación en herramientas de IA seleccionadas a medida",
      "Seguimiento y evaluación del impacto en el negocio",
    ],
  },
];

export default function DetallesCursos() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    const handleSelectCourse = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      if (api) {
        api.scrollTo(customEvent.detail);
      }
    };

    window.addEventListener("selectCourse", handleSelectCourse);
    return () => {
      window.removeEventListener("selectCourse", handleSelectCourse);
    };
  }, [api]);

  return (
    <section id="detalles-cursos" className="bg-[#111] py-20 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-[28px] md:text-[42px] text-white leading-tight">
            Detalles de los <span className="text-[#2B6AFF] italic">Programas</span>
          </h2>
        </motion.div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {coursesDetails.map((course) => (
              <CarouselItem key={course.id}>
                <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 h-full flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <h3 className="font-serif text-[28px] md:text-[36px] text-white mb-6">
                      {course.title}
                    </h3>
                    <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">
                      {course.description}
                    </p>
                    <a
                      href="#formulario"
                      className="inline-flex font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px active:translate-y-0 px-8 py-3 rounded-full transition-all duration-200"
                    >
                      Inscribirse
                    </a>
                  </div>
                  <div className="flex-1 bg-[#151515] p-6 w-full md:w-auto border border-white/5">
                    <h4 className="font-sans text-sm font-semibold text-[#2B6AFF] tracking-wide uppercase mb-6">
                      ¿Qué aprenderás?
                    </h4>
                    <ul className="space-y-4">
                      {course.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#2B6AFF] mt-1 text-xs">&#9670;</span>
                          <span className="font-sans text-sm text-white/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center md:justify-end gap-3 mt-8">
            <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 bg-[#0A0A0A] border-white/20 hover:bg-[#2B6AFF] hover:border-[#2B6AFF] hover:text-white transition-all" />
            <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 bg-[#0A0A0A] border-white/20 hover:bg-[#2B6AFF] hover:border-[#2B6AFF] hover:text-white transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
