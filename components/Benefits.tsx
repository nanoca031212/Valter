"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Ear,
  Smile,
  Users,
  ClipboardList,
  Apple,
} from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Psicologia",
    description:
      "Terapia individual para homens e mulheres, com escuta qualificada e cuidado com a sua saúde emocional.",
  },
  {
    icon: Ear,
    title: "Psicanálise",
    description:
      "Um espaço para falar livremente e compreender as causas mais profundas do sofrimento.",
  },
  {
    icon: Smile,
    title: "Crianças e adolescentes",
    description:
      "Atendimento cuidadoso e adequado a cada fase do desenvolvimento, com apoio à família.",
  },
  {
    icon: Users,
    title: "Famílias",
    description:
      "Acolhimento e orientação para famílias que desejam compreender e atravessar juntas seus desafios.",
  },
  {
    icon: ClipboardList,
    title: "Avaliações",
    description:
      "Avaliações para compreender demandas específicas e orientar o cuidado mais adequado para cada pessoa.",
  },
  {
    icon: Apple,
    title: "Nutrição",
    description:
      "Acompanhamento nutricional que respeita a sua rotina, a sua história e as necessidades do seu corpo.",
  },
];

export default function Benefits() {
  return (
    <section id="especialidades" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
            Um cuidado completo para{" "}
            <span className="text-primary italic">cada fase da vida</span>.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Unimos Psicologia, Psicanálise e Nutrição para cuidar de cada pessoa
            em sua totalidade. Conheça nossos atendimentos:
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
            Porque cuidar de você é olhar para além dos sintomas, considerando
            corpo, mente e emoções em sua totalidade.
          </p>
        </div>
      </div>
    </section>
  );
}
