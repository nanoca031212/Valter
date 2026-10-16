"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const signs = [
  {
    title: "Emoções em desequilíbrio",
    text: "Ansiedade, tristeza, irritação ou a sensação de estar sobrecarregado, sem saber por onde começar;",
  },
  {
    title: "Conflitos que se repetem",
    text: "Dificuldades nos relacionamentos, na família, no trabalho ou na escola que parecem não ter fim;",
  },
  {
    title: "Relação difícil com a comida e o corpo",
    text: "Hábitos alimentares que não fazem bem, oscilações de peso ou desconforto com o próprio corpo;",
  },
  {
    title: "Fases e transições",
    text: "Lutos, separações, mudanças, a chegada da adolescência ou novos desafios na vida da família.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 bg-background-soft overflow-hidden">
      {/* Scroll Indicator Icon */}

      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Images Grid - Left Side */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Large Top Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full aspect-[4/5] bg-primary/20 rounded-3xl overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-primary/20 to-transparent">
                    <span className="text-[10px] text-primary/60 font-medium uppercase tracking-widest">
                      Um olhar singular
                    </span>
                  </div>
                  <Image
                    src="/retangulomenor.jpg"
                    alt="Pessoa em momento de reflexão"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="w-full aspect-[1.2/1] bg-primary/10 rounded-3xl overflow-hidden relative"
                >
                  <Image
                    src="/quadrado.jpg"
                    alt="Pessoa em momento de reflexão"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-12">
                {/* Top Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-full aspect-[1.5/1] bg-primary/15 rounded-3xl overflow-hidden relative"
                >
                  <Image
                    src="/retanguloDeitado.jpg"
                    alt="Pessoa em momento de reflexão"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                {/* Large Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-full aspect-[4/6] bg-primary/25 rounded-3xl overflow-hidden relative"
                >
                  <Image
                    src="/retangulo.jpg"
                    alt="Pessoa em momento de reflexão"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div id="cuidado" className="flex-1 max-w-xl scroll-mt-28">
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-text-main leading-[1.15] mb-6"
            >
              Cada pessoa carrega uma história que merece um{" "}
              <span className="text-primary italic">olhar singular.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-lg text-text-muted leading-relaxed mb-6"
            >
              Talvez você, ou alguém da sua família, esteja vivendo algo assim:
            </motion.p>

            <ul className="space-y-5 text-lg text-text-muted leading-relaxed mb-10">
              {signs.map((sign, index) => (
                <motion.li
                  key={sign.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-primary/60 mt-1">✦</span>
                  <p>
                    <span className="font-bold text-text-main">
                      {sign.title}:
                    </span>{" "}
                    {sign.text}
                  </p>
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xl font-bold text-text-main"
            >
              Na Clínica Harmonize, unimos Psicologia e Nutrição para{" "}
              <span className="text-primary italic">
                compreender suas dificuldades e acolher suas demandas
              </span>
              , construindo caminhos para uma vida mais saudável e equilibrada.
            </motion.p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#668865] via-primary to-[#1A2419] rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all active:scale-[1.0]"
            >
              {" "}
              <span className="flex-1 font-bold text-base md:text-center">
                {" "}
                AGENDAR ATENDIMENTO{" "}
              </span>{" "}
              <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                {" "}
                <ArrowUpRight className="w-4 h-4" />{" "}
              </div>{" "}
            </a>
          </div>
        </div>

        {/* Bottom Star Decoration */}
        <div className="mt-20 flex justify-center gap-2 text-primary/40">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}
