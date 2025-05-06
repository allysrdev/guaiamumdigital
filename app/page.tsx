'use client'
import Header from "@/components/Header";
import { useScroll } from "@/contexts/scroll";
import { User, Code, LayoutTemplate, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    if (contactRef.current) {
      registerRef('contact', contactRef as RefObject<HTMLElement>);
      registerRef('start', startRef as RefObject<HTMLElement>);
    }
  }, [registerRef]);

  return (
    <div className="flex flex-col items-center md:gap-10 w-full">
      <Header />
      
      {/* Seção 1 - Hero */}
      <section ref={startRef} id="start" className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-6 items-center justify-between py-10 gap-8 md:gap-12 rounded-md">
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Soluções Web Sob Medida para seu Negócio
            </h1>
            <p className="text-lg text-gray-600">
              Transformamos suas ideias em aplicações web e mobile de alto desempenho. 
              Desenvolvemos soluções personalizadas que impulsionam seu negócio na era digital.
            </p>
          </div>
          <h2 className="font-bold text-lg md:text-xl">
            Tecnologia de ponta, design intuitivo e performance excepcional
          </h2>
          <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://wa.me/558132998614">
            Fale com nossos especialistas
          </Link>
        </div>

        <div className="w-full md:w-1/2 h-full flex  justify-start items-start md:justify-end">
          <Image
            src='/web-development.png'
            alt="Desenvolvimento de aplicações web"
            width={500}
            height={500}
            className="rounded-md shadow-md"
          />
        </div>
      </section>

      {/* Seção 2 - Nossos Serviços */}
      <section className="flex flex-col w-full max-w-7xl px-4 md:px-6 py-10 md:min-h-[500px] gap-8 bg-gray-50 rounded-md shadow-md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para sua presença digital
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Code className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Desenvolvimento Web</h3>
            <p className="text-gray-600">
              Sites institucionais, landing pages e sistemas web complexos com tecnologias modernas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <LayoutTemplate className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">
              Interfaces intuitivas e experiências de usuário que convertem visitantes em clientes.
            </p>
          </div>
          </div>
          
      </section>

      {/* Seção 3 - Diferenciais */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-6 items-center justify-between py-10 md:min-h-[500px] gap-8 rounded-md">
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Por que escolher nossa startup?
            </h1>
            <p className="text-lg text-gray-600">
              Combinamos expertise técnica com entendimento de negócios para entregar soluções que realmente fazem a diferença.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Zap className="text-yellow-500 mt-1" size={20} />
              <div>
                <h3 className="font-bold">Desenvolvimento Ágil</h3>
                <p className="text-gray-600">Metodologias ágeis para entregas rápidas e eficientes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Zap className="text-yellow-500 mt-1" size={20} />
              <div>
                <h3 className="font-bold">Tecnologia de Ponta</h3>
                <p className="text-gray-600">Utilizamos as melhores ferramentas e frameworks do mercado</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Zap className="text-yellow-500 mt-1" size={20} />
              <div>
                <h3 className="font-bold">Suporte Contínuo</h3>
                <p className="text-gray-600">Acompanhamento pós-entrega para garantir o sucesso do seu projeto</p>
              </div>
            </div>
          </div>
          
          <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://wa.me/558132998614">
            Saiba mais
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src='/tech-stack.png'
            alt="Tecnologias utilizadas"
            width={600}
            height={400}
            className="object-contain w-full max-w-xl"
          />
        </div>
      </section>

      {/* Seção 4 - Processo de Trabalho */}
      <section className="flex flex-col w-full items-start m-auto min-h-[500px] py-10 bg-gray-50 px-6 rounded-md shadow-md max-w-7xl">
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Processo</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Um fluxo de trabalho transparente e eficiente para garantir os melhores resultados
          </p>
        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-bold mb-2">Briefing</h3>
            <p className="text-gray-600 text-sm">Entendemos suas necessidades e objetivos</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-bold mb-2">Prototipagem</h3>
            <p className="text-gray-600 text-sm">Criamos wireframes e fluxos de navegação</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-bold mb-2">Desenvolvimento</h3>
            <p className="text-gray-600 text-sm">Implementação com as melhores práticas</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-xl font-bold">4</span>
            </div>
            <h3 className="font-bold mb-2">Entrega</h3>
            <p className="text-gray-600 text-sm">Lançamento e treinamento da equipe</p>
          </div>
        </div>
      </section>
      
      {/* Seção de Contato */}
      <section ref={contactRef} id='contact' className="w-full bg-background py-16 md:py-24 rounded-md">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-center">
            {/* Texto e informações */}
            <div className="w-full flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Pronto para transformar sua ideia em realidade?
              </h2>
              <p className="text-lg text-gray-600">
                Entre em contato para discutirmos como podemos ajudar seu negócio a crescer com soluções tecnológicas personalizadas.
              </p>
              
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">(81) 3299-8614</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contato@guaiamumdigital.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <User className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Consultoria</h3>
                    <Link target="blank" className="underline" href='https://wa.me/558132998614'>Agende uma reunião com nossos especialistas</Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Rodapé */}
      <footer className="bg-gray-50 text-gray-800 pt-16 pb-8 rounded-md w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Logo e sobre */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logogd-nobg.png"
                  alt="Guaiamum Digital"
                  width={200}
                  height={75}
                  className="h-12 w-auto"
                />
              </div>
              <p className="mb-4">
                Especialistas em desenvolvimento de aplicações web sob medida. Transformamos ideias em soluções digitais que impulsionam negócios.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/guaiamumdgtl/" target="blank" className="text-gray-400 hover:text-black transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-gray-500 font-semibold text-lg mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(81) 3299-8614</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@guaiamumdigital.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Todo o Brasil, sediado em Recife-PE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Guaiamum Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}