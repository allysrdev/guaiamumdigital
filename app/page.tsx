'use client'
import Header from "@/components/Header";
import { useScroll } from "@/contexts/scroll";
import { Code, LayoutTemplate, Zap, ArrowRight, ShieldCheck, Globe, Cpu, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import { motion, useScroll as useFramerScroll, useTransform } from "framer-motion";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef('start', startRef as RefObject<HTMLElement>);
    registerRef('contact', contactRef as RefObject<HTMLElement>);
    registerRef('services', servicesRef as RefObject<HTMLElement>);
    registerRef('process', processRef as RefObject<HTMLElement>);
  }, [registerRef]);

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-white dark:bg-black selection:bg-black selection:text-white">
      <Header />
      
      {/* HERO SECTION - THE APPLE WAY */}
      <section ref={startRef} id="start" className="relative flex flex-col w-full min-h-screen items-center justify-center pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)] from-gray-100/50 dark:from-gray-900/20 to-transparent pointer-events-none" />
        
        <div className="z-10 w-full max-w-5xl text-center space-y-8">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-black/5 dark:bg-white/10 rounded-full">
              Premium Digital Studio
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[1.05] text-gradient">
              Elevamos sua presença <br className="hidden md:block" /> digital ao nível global.
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 font-medium leading-relaxed">
              Não construímos apenas sites. Projetamos experiências digitais de alta performance para marcas que exigem excelência, sofisticação e resultados exponenciais.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                href="https://wa.me/558132998614" 
                target="_blank"
                className="group px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-full text-lg font-semibold tracking-tight hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/20"
              >
                Solicitar Consultoria
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <button 
                onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-lg font-semibold tracking-tight hover:text-foreground/80 transition-colors"
              >
                Ver Portfólio
              </button>
            </div>
          </FadeIn>
        </div>

        {/* HERO IMAGE/MOCKUP AREA */}
        <FadeIn delay={0.5}>
          <div className="mt-24 w-full max-w-7xl px-4">
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-black/5">
              <Image
                src='/web-development.png'
                alt="High Ticket Digital Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* STATS / TRUST SECTION */}
      <section className="w-full py-20 border-y border-black/5 bg-gray-50/30 dark:bg-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projetos Entregues", value: "50+" },
              { label: "Satisfação", value: "100%" },
              { label: "ROI Médio", value: "3.5x" },
              { label: "Países", value: "05" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="space-y-1">
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</h4>
                  <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servicesRef} id="services" className="w-full py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-2xl space-y-6">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Serviços Especializados para Negócios High-Ticket.</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-xl text-foreground/60 leading-relaxed">
                  Dominamos as tecnologias que as maiores empresas do mundo utilizam para escalar com segurança e elegância.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-black dark:text-white" size={32} />,
                title: "Plataformas Web Premium",
                desc: "Sites institucionais e e-commerces de alto padrão com foco em conversão e autoridade de marca."
              },
              {
                icon: <Smartphone className="text-black dark:text-white" size={32} />,
                title: "Apps Mobile Nativos",
                desc: "Experiências móveis fluidas e intuitivas desenvolvidas para iOS e Android com tecnologia de ponta."
              },
              {
                icon: <Cpu className="text-black dark:text-white" size={32} />,
                title: "Sistemas Customizados",
                desc: "Automação de processos complexos e dashboards inteligentes para gestão eficiente do seu negócio."
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group p-10 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 cursor-default h-full border border-black/5">
                  <div className="mb-8 p-4 bg-white dark:bg-black/20 w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-foreground/60 group-hover:text-white/80 dark:group-hover:text-black/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section ref={processRef} id="process" className="w-full py-32 bg-black text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-24 space-y-6">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">O Caminho para a Excelência.</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-2xl mx-auto text-xl text-white/60">
                Nosso método exclusivo garante que cada pixel e cada linha de código estejam alinhados aos seus objetivos comerciais.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Imersão Estratégica", desc: "Análise profunda do seu modelo de negócio e público-alvo." },
              { step: "02", title: "Design de Experiência", desc: "Criação de interfaces refinadas com foco em usabilidade e desejo." },
              { step: "03", title: "Engenharia de Software", desc: "Desenvolvimento robusto, escalável e com performance extrema." },
              { step: "04", title: "Lançamento & Evolução", desc: "Deploy otimizado e acompanhamento contínuo de métricas de sucesso." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative space-y-6">
                  <span className="text-5xl font-bold opacity-20 block">{item.step}</span>
                  <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT SECTION */}
      <section ref={contactRef} id="contact" className="w-full py-40 px-6">
        <div className="container mx-auto max-w-5xl bg-gray-50 dark:bg-white/5 rounded-[3rem] p-12 md:p-24 text-center border border-black/5 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent opacity-20" />
          
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Pronto para o próximo nível?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Estamos selecionando novos projetos para este trimestre. Se você busca exclusividade e resultados reais, agende uma conversa estratégica.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                href="https://wa.me/558132998614" 
                target="_blank"
                className="w-full md:w-auto px-12 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl"
              >
                Falar com Especialista
              </Link>
              <a 
                href="mailto:contato@guaiamumdigital.com.br"
                className="text-lg font-semibold hover:underline underline-offset-8 transition-all"
              >
                contato@guaiamumdigital.com.br
              </a>
            </div>
          </FadeIn>
          
          <div className="mt-20 pt-10 border-t border-black/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-medium text-foreground/40 uppercase tracking-widest">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck size={18} /> Qualidade Garantida
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap size={18} /> Performance Extrema
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe size={18} /> Alcance Global
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-20 px-6 border-t border-black/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <Image
                src="/logogd-nobg.png"
                alt="Guaiamum Digital"
                width={150}
                height={50}
                className="mx-auto md:mx-0 opacity-80"
              />
              <p className="text-sm text-foreground/40 font-medium">
                © 2026 Guaiamum Digital. Projetando o futuro, um pixel de cada vez.
              </p>
            </div>
            
            <div className="flex gap-10">
              <Link href="#" className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors">Instagram</Link>
              <Link href="#" className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors">LinkedIn</Link>
              <Link href="#" className="text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
