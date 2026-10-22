"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Marcia() {
  return (
    <section id="marcia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Nutricionista
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Márcia{" "}
              <span className="text-primary italic">Daima</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Nutricionista há mais de 23 anos, com especializações em
                Nutrição Funcional, Obesidade e Emagrecimento e Saúde da Mulher.
              </p>
              <p>
                Acredito que cuidar da alimentação vai muito além da balança.
                Por isso, uno ciência, acolhimento e mudança de comportamento
                para ajudar você a conquistar o emagrecimento com equilíbrio,
                prazer e leveza, sem abrir mão dos alimentos de que gosta.
              </p>
              <p className="font-medium text-text-main">
                Porque você não precisa viver de dieta. Precisa aprender a
                cuidar de si de uma forma que faça sentido para a sua vida.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  23+
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Anos de experiência
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-primary mb-2">
                  3
                </p>
                <p className="text-sm font-bold text-text-muted uppercase tracking-wider">
                  Especializações
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-12 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#668865] via-primary to-[#1A2419] rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all active:scale-[1.0]"
            >
              <span className="flex-1 font-bold text-base md:text-center">
                AGENDAR COM A MÁRCIA
              </span>
              <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl -skew-y-2 hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/marcia.jpg"
                alt="Márcia Daima, nutricionista"
                width={864}
                height={1184}
                className="w-full h-auto object-cover transition-all duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
