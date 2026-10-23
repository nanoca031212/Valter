"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

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
                src="/izilandas.jpg"
                alt="Izilanda Etiene de Souza, psicóloga"
                width={1179}
                height={1373}
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
              Psicóloga
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Izilanda{" "}
              <span className="text-primary italic">Etiene de Souza</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Psicóloga formada pela UNIC, com especializações em Terapia de
                Casal e Família e em Neuropsicologia Clínica. Há 20 anos atendo
                indivíduos, casais e famílias.
              </p>
              <p>
                Minha prática é fundamentada nas abordagens psicanalítica e
                sistêmica, com uma escuta acolhedora e atenta às emoções, aos
                vínculos e à singularidade de cada pessoa.
              </p>
              <p className="font-medium text-text-main">
                Mineira de nascimento e cuiabana de coração.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  20
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Anos de experiência
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  UNIC
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Graduação
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-12 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#3FA3C2] via-primary to-[#003B4D] rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all active:scale-[1.0]"
            >
              <span className="flex-1 font-bold text-base md:text-center">
                AGENDAR COM A IZILANDA
              </span>
              <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
