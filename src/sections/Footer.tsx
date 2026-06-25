import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const links = [
  { label: "Programa", href: "#programa" },
  { label: "Ruta estratégica", href: "#ruta" },
  { label: "Próximas fechas", href: "#fechas" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Aliados", href: "#aliados" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A0A0A] border-t border-white/[0.06] py-14 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-1.5">
              <span className="text-[#2B6AFF] text-xs">&#9670;</span>
              <span className="font-serif text-xl text-white">Techne</span>
            </a>
            <p className="font-sans text-[13px] text-white/40 max-w-[260px] mt-4 leading-relaxed">
              Entrenamos directivos de LATAM para que dejen de ver la IA como
              tendencia y la usen como ventaja competitiva real.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-semibold text-white/30 tracking-wide uppercase mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-white hover:translate-x-[3px] inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold text-white/30 tracking-wide uppercase mb-4">
              Contacto
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-white/40 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50">
                  contacto@techne.ai
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-white/40 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50">
                  +52 55 1234 5678
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="text-white/40 flex-shrink-0" />
                <span className="font-sans text-sm text-white/50">
                  Ciudad de México, México
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                className="text-white/40 hover:text-[#2B6AFF] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-[#2B6AFF] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-[#2B6AFF] transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            &copy; 2026 Techne. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-sans text-xs text-white/30 hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#"
              className="font-sans text-xs text-white/30 hover:text-white transition-colors"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
