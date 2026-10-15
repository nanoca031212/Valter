"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Ear,
  Lock,
  CalendarClock,
  Compass,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    icon: Monitor,
    title: "Atendimento on-line",
    description:
      "Sessões individuais por vídeo, de onde você estiver, sem deslocamento.",
  },
  {
    icon: Ear,
    title: "Escuta atenta",
    description:
      "Um espaço para falar livremente, sem julgamentos e sem respostas prontas.",
  },
  {
    icon: Lock,
    title: "Sigilo e ética",
    description:
      "Tudo o que é dito em sessão permanece entre você e o analista.",
  },
  {
    icon: CalendarClock,
    title: "Regularidade",
    description:
      "Sessões semanais em horário fixo, construindo um compromisso com você mesmo.",
  },
  {
    icon: Compass,
    title: "Autoconhecimento",
    description:
      "Compreender suas emoções, seus limites e as escolhas que fazemos sem perceber.",
  },
  {
    icon: HeartHandshake,
    title: "Acolhimento",
    description:
      "Um vínculo de confiança que respeita o seu tempo e a sua história.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
            A análise não oferece{" "}
            <span className="text-primary italic">fórmulas prontas</span>.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Ela abre espaço para que você se escute, dê sentido ao que sente e
            construa, no seu tempo, uma forma mais livre e autêntica de viver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col relative overflow-hidden h-full"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 w-12 h-1.5 bg-primary/80 rounded-b-full group-hover:w-full group-hover:left-0 group-hover:rounded-none transition-all duration-300" />

              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-text-main mb-3">
                {benefit.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto space-y-12">
          <p className="text-xl font-bold text-text-main">
            Falar sobre o que dói já é o começo da mudança. Você não precisa
            atravessar isso sozinho.
          </p>
        </div>
      </div>
    </section>
  );
}
