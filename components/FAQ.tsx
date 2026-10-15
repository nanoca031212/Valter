"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a análise on-line?",
    a: "As sessões acontecem por videochamada, em dia e horário combinados. Você só precisa de um lugar reservado, onde se sinta à vontade para falar, e de uma conexão estável."
  },
  {
    q: "Qual a diferença entre psicanálise e outras terapias?",
    a: "A psicanálise não trabalha com conselhos ou técnicas prontas. Ela parte da sua fala para investigar as causas inconscientes do sofrimento, e não apenas os sintomas."
  },
  {
    q: "Quanto tempo dura o processo?",
    a: "Não há um prazo definido. Cada análise tem o seu ritmo, que é construído ao longo dos encontros, respeitando a sua história e o seu tempo."
  },
  {
    q: "O que eu falo nas sessões fica em sigilo?",
    a: "Sim. O sigilo é um princípio ético fundamental da psicanálise. Tudo o que é dito em sessão permanece entre você e o analista."
  },
  {
    q: "Como faço para agendar a primeira sessão?",
    a: "Basta enviar uma mensagem pelo WhatsApp. Conversamos brevemente e combinamos o melhor horário para o seu primeiro atendimento."
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
