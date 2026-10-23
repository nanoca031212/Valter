"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CircularText from "./CircularText";
import Marquee from "./Marquee";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import CtaButton from "./CtaButton";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const BOOKING_URL = "https://www.medicosbrasil.com/profissional/izilanda-etiene";

export default function Hero() {
  return (
    <section className="relative min-h-screen   flex flex-col justify-between overflow-hidden bg-background-soft">
      {/* Decorative background element */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-20 lg:px-32 flex-1 grid md:grid-cols-2 gap-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-wider uppercase mb-2  mt-8">
            Psicologia • Psicanálise • Nutrição
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-text-main mb-6">
            Cuidando de você em sua <span className="text-primary italic">totalidade</span>.
          </h1>
          <p className="text-base md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            Um espaço de escuta, acolhimento e cuidado, com profissionais de
            Psicologia e Nutrição, respeitando a singularidade de cada pessoa.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row md:flex-col xl:flex-row gap-3 w-full max-w-xl">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 px-4 py-3 flex items-center justify-between gap-3 bg-gradient-to-r from-[#3FA3C2] via-primary to-[#003B4D] rounded-full text-white font-bold text-xs md:text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all"
            >
              <span className="flex-1 text-center">Agendar on-line</span>
              <div className="h-8 w-8 md:w-10 md:h-10 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-1 px-4 py-3 flex items-center justify-between gap-3 bg-white border-2 border-primary rounded-full text-primary font-bold text-xs md:text-sm tracking-wider uppercase shadow-md hover:bg-primary hover:text-white transition-all"
            >
              <span className="flex-1 text-center">Falar com atendente</span>
              <div className="h-8 w-8 md:w-10 md:h-10 flex-shrink-0 bg-primary/10 group-hover:bg-white rounded-full flex items-center justify-center text-primary transition-colors duration-300">
                <MessageCircle className="w-4 h-4" />
              </div>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-2">
            <p className="text-sm text-text-muted font-medium">
              <span className="font-bold text-text-main">Para todas as idades</span>{" "}
              — crianças, adolescentes, adultos e famílias
            </p>
            <p className="text-sm text-text-muted font-medium">
              <span className="font-bold text-text-main">Aceitamos planos de saúde</span>{" "}
              — consulte o seu pelo WhatsApp
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-auto md:mt-0 md:scale-90 md:origin-center"
        >
          <Image
            src="/ela.png"
            alt="Profissional da Clínica Harmonize"
            width={600}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Floating circular text logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-5 right-5 md:top-12 md:right-12 z-20 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full -z-10 scale-90" />
            <CircularText
              text="Clínica Harmonize • "
              radius={70}
              fontSize="12px"
              className="drop-shadow-lg"
            />
            <Image
              src="/logoti.png"
              alt="Clínica Harmonize"
              width={1241}
              height={1267}
              className="absolute w-14 h-14 object-contain drop-shadow-lg"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 -left-4 md:-left-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-zinc-100"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-bold tracking-wider">
                Cuidado integral
              </p>
              <p className="text-sm font-bold text-text-main">
                Corpo, mente e emoções
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee text="CLÍNICA HARMONIZE" />
      </div>
    </section>
  );
}
