"use client";

import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-dark-accent text-white py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Dê o primeiro passo{" "}
            <span className="text-primary italic">para cuidar de você.</span>
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark-accent px-10 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Agendar atendimento
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block bg-white rounded-xl px-4 py-2 mb-6">
              <Image
                src="/logo.png"
                alt="Clínica Harmonize"
                width={1949}
                height={807}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Psicologia, Psicanálise e Nutrição. Cuidando de você em sua
              totalidade.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#especialidades"
                  className="hover:text-primary transition-colors"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (65) 3021-1777
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Cuiab%C3%A1+Office+Tower%2C+Av.+Historiador+Rubens+de+Mendon%C3%A7a%2C+1856%2C+Jardim+Aclima%C3%A7%C3%A3o%2C+Cuiab%C3%A1+-+MT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Edifício Cuiabá Office Tower, salas 1408 e 1409
                  <br />
                  Av. Historiador Rubens de Mendonça, 1.856
                  <br />
                  Jardim Aclimação, Cuiabá/MT
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          <p>
            © {new Date().getFullYear()} Clínica Harmonize. Todos os direitos reservados.
            Desenvolvido com ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
