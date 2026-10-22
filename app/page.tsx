import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";

import Benefits from "@/components/Benefits";
// Seções desativadas (arquivos mantidos para reativar depois):
// import Methodology from "@/components/Methodology";
// import MethodologySection from "@/components/MethodologySection";
import About from "@/components/About";
import Andressa from "@/components/Andressa";
import Ana from "@/components/Ana";
import Amanda from "@/components/Amanda";
import Marcia from "@/components/Marcia";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />

        <Benefits />
        {/* <MethodologySection /> */}
        {/* <Methodology /> */}

        <About />
        <Andressa />
        <Ana />
        <Amanda />
        <Marcia />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
