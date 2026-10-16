"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/ela.png"
                alt="Profissional da Clínica Harmonize"
                width={500}
                height={600}
                className="w-full h-auto object-cover  transition-all duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Sobre a clínica
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Bem-vindo à{" "}
              <span className="text-primary italic">Clínica Harmonize</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Acreditamos que cuidar de si é olhar para além dos sintomas,
                acolher a própria história, compreender as emoções e reconhecer
                as necessidades do corpo e da mente.
              </p>
              <p>
                Por isso, oferecemos um espaço de escuta, acolhimento e cuidado,
                com profissionais de Psicologia e Nutrição, respeitando a
                singularidade de cada pessoa.
              </p>
              <p className="font-medium text-text-main">
                Porque harmonizar não é viver sem conflitos, mas encontrar
                equilíbrio entre o que sentimos, pensamos e vivemos.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  3
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Áreas de cuidado
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  Sigilo
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Ética e confiança
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
