import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programa", href: "#programa" },
  { label: "Ruta", href: "#ruta" },
  { label: "Próximas fechas", href: "#fechas" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-16 flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src="/images/logo.png" alt="Techne" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/70 hover:text-white hover:-translate-y-px transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#formulario"
            className="hidden md:inline-flex font-sans text-sm font-semibold text-white bg-[#2B6AFF] hover:bg-[#1A5AF5] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(43,106,255,0.3)] active:translate-y-0 px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Aplicar al programa
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[rgba(10,10,10,0.97)] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-2xl text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#formulario"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 font-sans text-base font-semibold text-white bg-[#2B6AFF] px-8 py-3 rounded-full"
              >
                Aplicar al programa
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
