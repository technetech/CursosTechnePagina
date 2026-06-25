import { motion } from "framer-motion";

const partners = [
  { name: "MC4 Solutions", abbr: "MC4" },
  { name: "NODO Universidad EAFIT", abbr: "NODO" },
  { name: "Techne Business", abbr: "Techne" },
];

export default function Aliados() {
  return (
    <section id="aliados" className="bg-[#0A0A0A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-serif text-[24px] md:text-[36px] text-center leading-tight mb-10"
        >
          <span className="text-white">Aliados del </span>
          <span className="text-[#2B6AFF] italic">Techne Executive</span>
          <br />
          <span className="text-[#2B6AFF] italic">Program </span>
          <span className="text-white">en Latinoamérica</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="w-[180px] h-[100px] bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center hover:border-[#2B6AFF]/30 transition-colors duration-300"
            >
              <span className="font-sans text-base font-medium text-white/50">
                {p.abbr}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
