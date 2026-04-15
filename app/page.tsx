"use client";
import Header from "@/components/Header";
import { useScroll } from "@/contexts/scroll";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Search,
  Layout,
  Code2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";
import {
  motion,
  useScroll as useFramerScroll,
  useTransform,
  useSpring,
} from "framer-motion";

interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

const FadeIn = ({
  children,
  delay = 0,
  y = 30,
  once = true,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  immediate?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={immediate ? { opacity: 1, y: 0 } : undefined}
    whileInView={!immediate ? { opacity: 1, y: 0 } : undefined}
    viewport={!immediate ? { once, margin: "-100px" } : undefined}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const RevealText = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap justify-center gap-x-[0.2em] gap-y-0">
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block py-[0.1em] -my-[0.1em]"
        >
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useFramerScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Mobile scroll reveal logic: Image opacity based on its position in viewport
  const mobileImageOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0, 1, 0],
  );
  const mobileImageScale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7],
    [0.9, 1, 0.9],
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative w-full aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 cursor-pointer"
    >
      <Link href={project.url} target="_blank" className="block w-full h-full">
        {/* Placeholder / Background - Always visible as base layer */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-50 dark:bg-white/[0.02]">
          <span className="text-foreground/5 font-bold text-8xl md:text-[12rem] tracking-tighter select-none uppercase">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
        </div>

        {/* Desktop Hover Image */}
        <div className="hidden md:block absolute inset-0 z-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
          />
        </div>

        {/* Mobile Scroll Image */}
        <motion.div
          style={{ opacity: mobileImageOpacity, scale: mobileImageScale }}
          className="md:hidden absolute inset-0 z-10"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Overlay & Content */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />

        <div className="absolute inset-x-0 bottom-0 z-30 p-8 md:p-12 translate-y-0 md:translate-y-6 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 ease-out">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter">
            {project.title}
          </h3>
          <p className="text-white/70 max-w-md text-sm md:text-base font-medium leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
            Explorar Obra <ExternalLink size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const { registerRef } = useScroll();

  const { scrollYProgress } = useFramerScroll();
  const scaleProgress = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [1, 0.9]),
    { stiffness: 100, damping: 30 },
  );
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useEffect(() => {
    registerRef("start", startRef as RefObject<HTMLElement>);
    registerRef("contact", contactRef as RefObject<HTMLElement>);
    registerRef("services", servicesRef as RefObject<HTMLElement>);
    registerRef("portfolio", portfolioRef as RefObject<HTMLElement>);
    registerRef("process", processRef as RefObject<HTMLElement>);
  }, [registerRef]);

  const projects: Project[] = [
    // {
    //   title: "Shopping Afogados",
    //   category: "E-commerce & Portal",
    //   description: "Engenharia de plataforma para gestão e vendas de um dos principais centros comerciais da região.",
    //   url: "https://shopping-afogados-site.vercel.app/",
    //   image: "/projects/shopping-afogados.png"
    // },
    {
      title: "Larissa Layme",
      category: "Institutional",
      description:
        "Posicionamento digital de alta autoridade para o setor jurídico de energia solar.",
      url: "https://larissa-layme-solar.vercel.app/",
      image: "/projects/larissa-layme.png",
    },
    {
      title: "Hollywood Forever",
      category: "Entertainment",
      description:
        "Arquitetura de interface fluida para streaming e curadoria de conteúdo audiovisual.",
      url: "https://hollywoodforevertv.vercel.app/",
      image: "/projects/hollywood-forever.webp",
    },
    {
      title: "Maria Boleria",
      category: "Brand Experience",
      description:
        "Ecossistema digital focado em conversão e experiência tátil de marca no setor gastronômico.",
      url: "https://mariaboleria.vercel.app/",
      image: "/projects/maria-boleria.webp",
    },
    {
      title: "AMDTS",
      category: "Corporate System",
      description:
        "Sistemas robustos de gestão e infraestrutura de dados para organizações de saúde.",
      url: "https://amdts.com.br/",
      image: "/projects/amdts.webp",
    },
    {
      title: "BRM Engenharia",
      category: "Industrial Tech",
      description:
        "Plataforma de presença sólida para operações complexas de engenharia predial.",
      url: "https://brmengenharia.com.br/",
      image: "/projects/brm-engenharia.webp",
    },
    {
      title: "Hoje App",
      category: "Product / SaaS",
      description:
        "Interface minimalista focada em produtividade extrema e fluxos de trabalho simplificados.",
      url: "https://hoje.allysr.dev/",
      image: "/projects/hoje-app.webp",
    },
    {
      title: "Ignite Shop",
      category: "E-commerce Tech",
      description:
        "Implementação de storefront de alto desempenho com arquitetura escalável e moderna.",
      url: "https://igniteshop-liart.vercel.app/",
      image: "/projects/ignite-shop.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-white dark:bg-black selection:bg-black selection:text-white">
      <div className="noise fixed inset-0 z-[100] mix-blend-overlay opacity-5 pointer-events-none" />
      <Header />

      {/* HERO SECTION */}
      <section
        ref={startRef}
        id="start"
        className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6"
      >
        <motion.div
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          className="z-10 w-full max-w-6xl text-center space-y-12 relative pointer-events-auto"
        >
          <FadeIn y={10} immediate={true}>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase bg-black/5 dark:bg-white/5 backdrop-blur-md rounded-full border border-black/5 dark:border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Engenharia Digital de Precisão
            </span>
          </FadeIn>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-[-0.06em] leading-[0.85] text-gradient py-2">
              <RevealText text="Projetando o futuro, um pixel de cada vez." />
            </h1>
            <FadeIn delay={0.2} immediate={true}>
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-foreground/40 font-medium leading-relaxed tracking-tight">
                Combinamos arquitetura de software de alta performance com
                design functional para criar soluções que escalam o seu negócio.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} immediate={true}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4 relative z-20">
              <Link
                href="https://wa.me/558132998614"
                target="_blank"
                className="group relative px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full text-lg font-bold tracking-tight overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Iniciar Projeto{" "}
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </span>
                <motion.div className="absolute inset-0 bg-white/20 dark:bg-black/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <button
                onClick={() =>
                  portfolioRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-lg font-bold tracking-tight hover:text-foreground/60 transition-colors flex items-center gap-2 group cursor-pointer"
              >
                Ver Portfólio{" "}
                <span className="w-8 h-[1px] bg-foreground/20 group-hover:w-12 transition-all duration-500" />
              </button>
            </div>
          </FadeIn>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-500/5 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section
        ref={portfolioRef}
        id="portfolio"
        className="w-full py-40 px-6 bg-white dark:bg-black relative z-10"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
            <div className="max-w-2xl space-y-6">
              <FadeIn>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/40">
                  Projetos Selecionados
                </span>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mt-4">
                  Trabalho <br /> em Foco.
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <p className="text-xl text-foreground/40 font-medium max-w-sm mb-4">
                Resultados reais através de engenharia e design de alta
                performance.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="w-full py-40 px-6 bg-white dark:bg-black relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <FadeIn>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">
                  Menos ruído, <br /> mais impacto.
                </h2>
                <p className="text-xl text-foreground/50 font-medium leading-relaxed max-w-lg">
                  Acreditamos que a clareza é o ponto mais alto da sofisticação
                  técnica. Cada linha de código e cada decisão de design tem um
                  propósito estratégico.
                </p>
                <ul className="space-y-6">
                  {[
                    "Arquitetura de software escalável e segura",
                    "Design focado em experiência de uso e conversão",
                    "Performance otimizada para resultados reais",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-4 text-sm font-bold tracking-tight uppercase opacity-70"
                    >
                      <CheckCircle2 size={18} className="text-blue-500" />{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Performance Score", value: "100" },
                { label: "Uptime Garantido", value: "99.9%" },
                { label: "Projetos Ativos", value: "12" },
                { label: "NPS Médio", value: "9.8" },
              ].map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} y={20}>
                  <div className="p-10 bg-gray-50 dark:bg-white/5 rounded-[2rem] border border-black/5 dark:border-white/5 flex flex-col justify-center items-center text-center group hover:bg-black hover:text-white transition-all duration-500">
                    <span className="text-4xl font-bold tracking-tighter mb-2">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={servicesRef}
        id="services"
        className="w-full py-40 px-6 bg-gray-50 dark:bg-white/[0.02] relative z-10"
      >
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-32 text-center space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                O que fazemos.
              </h2>
              <p className="text-xl text-foreground/40 font-medium">
                Soluções técnicas aplicadas ao crescimento do seu negócio.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search size={40} strokeWidth={1.5} />,
                title: "Diagnóstico de Presença Digital",
                desc: "Análise técnica e estratégica profunda para identificar gargalos e oportunidades de crescimento na sua infraestrutura digital atual.",
                tags: ["Auditoria", "SEO", "Estratégia"],
              },
              {
                icon: <Layout size={40} strokeWidth={1.5} />,
                title: "UX / UI",
                desc: "Projetagem de interfaces intuitivas focadas na jornada do usuário, unindo estética funcional e psicologia de conversão.",
                tags: ["Design", "Prototipagem", "UX"],
              },
              {
                icon: <Code2 size={40} strokeWidth={1.5} />,
                title: "Desenvolvimento Web Responsivo",
                desc: "Engenharia de software de alta performance para sites e plataformas que funcionam perfeitamente em qualquer dispositivo.",
                tags: ["Next.js", "React", "Performance"],
              },
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative p-12 bg-white dark:bg-white/5 rounded-[3rem] border border-black/5 dark:border-white/5 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <div className="mb-10 p-5 bg-black text-white dark:bg-white dark:text-black w-fit rounded-2xl group-hover:rotate-6 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-foreground/50 font-medium leading-relaxed mb-10 flex-grow">
                    {service.desc}
                  </p>
                  <div className="flex gap-3">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        ref={processRef}
        id="process"
        className="w-full py-40 px-6 relative z-10"
      >
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-center mb-40">
              Nosso Processo.
            </h2>
          </FadeIn>

          <div className="space-y-40">
            {[
              {
                step: "01",
                title: "Imersão & Estratégia",
                desc: "Iniciamos com uma análise profunda do seu negócio para garantir que cada decisão técnica tenha um propósito claro.",
              },
              {
                step: "02",
                title: "Arquitetura Visual",
                desc: "Projetamos interfaces funcionais que guiam o usuário através de uma jornada intuitiva e eficiente.",
              },
              {
                step: "03",
                title: "Desenvolvimento de Precisão",
                desc: "Nossa engenharia foca em escalabilidade, segurança e código limpo, pronto para o crescimento global.",
              },
              {
                step: "04",
                title: "Evolução Contínua",
                desc: "O lançamento é apenas o ponto de partida. Monitoramos e otimizamos sua plataforma para resultados constantes.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-12 items-start relative"
              >
                <div className="md:sticky md:top-40 flex-shrink-0">
                  <span className="text-8xl font-bold tracking-tighter opacity-10 leading-none">
                    {item.step}
                  </span>
                </div>
                <FadeIn delay={0.2}>
                  <div className="space-y-6 pt-4">
                    <h4 className="text-4xl font-bold tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xl text-foreground/50 font-medium leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={contactRef}
        id="contact"
        className="w-full py-20 md:py-40 px-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="container mx-auto max-w-6xl bg-black text-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-32 text-center relative overflow-hidden shadow-[0_100px_150px_-50px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 noise opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative z-10 space-y-8 md:space-y-12">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tight leading-[1] md:leading-[0.9]">
              Sua marca merece <br className="hidden md:block" /> o
              extraordinário.
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-xl text-white/40 font-medium">
              Estamos selecionando novos projetos para este trimestre. Vamos
              conversar sobre o seu próximo desafio?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 pt-4 md:pt-8 relative z-20">
              <Link
                href="https://wa.me/558132998614"
                target="_blank"
                className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-white text-black rounded-full text-lg md:text-xl font-bold hover:scale-105 transition-transform duration-500 shadow-2xl cursor-pointer"
              >
                Agendar Conversa
              </Link>
              <a
                href="mailto:contato@guaiamumdigital.com.br"
                className="text-base md:text-lg font-bold hover:text-white/60 transition-colors border-b border-white/20 pb-1 cursor-pointer"
              >
                contato@guaiamumdigital.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity duration-700">
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/logogd-nobg.png"
              alt="Guaiamum Digital"
              width={140}
              height={40}
              className="mx-auto md:mx-0 grayscale"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              © 2026 Guaiamum Digital. Projetando o futuro digital.
            </p>
          </div>

          <div className="flex gap-12 relative z-20">
            {["Instagram", "LinkedIn", "GitHub"].map((social) =>
              social === "GitHub" ? (
                <Link
                  key={social}
                  href="https://github.com/allysrdev"
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-[0.2em] hover:text-foreground transition-colors cursor-pointer"
                >
                  {social}
                </Link>
              ) : (
                <Link
                  key={social}
                  href="#"
                  className="text-xs font-bold uppercase tracking-[0.2em] hover:text-foreground transition-colors cursor-pointer"
                >
                  {social}
                </Link>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
