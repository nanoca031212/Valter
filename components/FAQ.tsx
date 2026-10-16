"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quais atendimentos a clínica oferece?",
    a: "Oferecemos atendimentos de Psicologia, Psicanálise e Nutrição, além de avaliações, para crianças, adolescentes, adultos e famílias."
  },
  {
    q: "Vocês atendem crianças e adolescentes?",
    a: "Sim. O atendimento é adaptado a cada fase do desenvolvimento e conta com a participação da família sempre que necessário."
  },
  {
    q: "Por que unir Psicologia e Nutrição?",
    a: "Porque corpo, mente e emoções estão ligados. Olhar para a pessoa em sua totalidade permite compreender melhor as dificuldades e construir um cuidado mais completo."
  },
  {
    q: "O atendimento é sigiloso?",
    a: "Sim. O sigilo é um princípio ético de todos os nossos profissionais. O que é compartilhado nos atendimentos permanece entre você e o profissional."
  },
  {
    q: "Como faço para agendar?",
    a: "Basta enviar uma mensagem pelo WhatsApp. Vamos entender a sua necessidade, indicar o atendimento mais adequado e combinar o melhor horário."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-12 text-center">
          Dúvidas frequentes.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
              >
                <span className="text-xl font-bold text-text-main">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
