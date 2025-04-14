'use client'
import Header from "@/components/Header";
import { useScroll } from "@/contexts/scroll";
import { MonitorCog, User } from "lucide-react";
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
      
      {/* Seção 1 */}
      <section ref={startRef} id="start" className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-6 items-center justify-between py-10 gap-8 md:gap-12 rounded-md">
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              Apresentamos GuaiaDelivery
            </h1>
            <p className="text-lg text-gray-600">
              GuaiaDelivery é uma solução exclusiva para o seu negócio.
              Maximize seus lucros, mantenha o controle total e
              entregue a melhor experiência aos seus clientes.
            </p>
          </div>
          <h2 className="font-bold text-lg md:text-xl">
            Assine agora e mantenha o lucro total do seu negócio, sem taxas surpresas!
          </h2>
          <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMwXRezoZb3zl8wc9rDZ28uVCbg_BSeVRDMR5OPG59GTqOD8FbNKEh6_sKxH8bXEJB7W7Db0I">
            Solicite orçamento agora!
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src='/image-section-1.png'
            alt="Aplicativo GuaiaDelivery"
            width={400}
            height={500}
          />
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-6 items-center justify-between py-10 md:min-h-[500px] gap-8 bg-gray-50 rounded-md shadow-md">
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 order-2 md:order-1">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl md:text-5xl leading-tight">
              Venda em 3 cliques
            </h1>
            <p className="text-lg text-gray-600">
              Venda mais, em menos tempo! Com o GuaiaDelivery, você transforma cada clique em uma oportunidade de negócio.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <p>
              <b>Agilidade no Processo:</b> Reduza o tempo de finalização de compras e aumente o número de pedidos.
            </p>
            <p>
              <b>Experiência do Cliente:</b> Ofereça uma jornada de compra fluida e sem obstáculos, aumentando a fidelização.
            </p>
            <p>
              <b>Maximização de Lucros:</b> Com mais vendas concluídas rapidamente, seu faturamento cresce exponencialmente.
            </p>
          </div>
          
          <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMwXRezoZb3zl8wc9rDZ28uVCbg_BSeVRDMR5OPG59GTqOD8FbNKEh6_sKxH8bXEJB7W7Db0I">
            Solicite orçamento agora!
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <Image
            src='/image-section-2.png'
            alt="Interface de vendas rápida"
            width={400}
            height={600}
            className="object-contain w-full max-w-md"
          />
        </div>
      </section>

      {/* Seção 3 */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl px-4 md:px-6 items-center justify-between py-10 md:min-h-[500px] gap-8 rounded-md">
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Dashboard Completo
            </h1>
            <p className="text-lg text-gray-600">
              Bem-vindo ao seu Dashboard de Admin, a ferramenta essencial para gerenciar sua loja de forma eficiente, intuitiva e sem complicações. Aqui, você tem todas as funcionalidades necessárias para tomar decisões estratégicas e otimizar suas operações.
            </p>
          </div>
          <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMwXRezoZb3zl8wc9rDZ28uVCbg_BSeVRDMR5OPG59GTqOD8FbNKEh6_sKxH8bXEJB7W7Db0I">
            Solicite orçamento agora!
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src='/image-section-3.png'
            alt="Dashboard administrativo"
            width={600}
            height={400}
            className="object-contain w-full max-w-xl"
          />
        </div>
      </section>

      {/* Seção 4 */}
      <section className="flex flex-col md:flex-row w-full items-start justify-around m-auto min-h-[500px] py-10 bg-gray-50 px-6 rounded-md shadow-md">
      <div className="w-full md:w-1/2 flex flex-col gap-10 px-4 md:px-0">
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl md:text-5xl">No Relatório Financeiro do GuaiaDelivery, você pode:</h1>
      <div className="flex justify-center md:justify-start">
        <Image
          src='/image-section-4.png'
          alt="Relatório Financeiro GuaiaDelivery"
          width={400}
          height={600}
          className="w-full max-w-md md:max-w-full"
        />
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/2 flex flex-col gap-5 px-4 md:px-0 mt-6 md:mt-0">
    <div className="space-y-4">
      <p className="text-base md:text-inherit">
        <b>Monitorar o Total Vendido:</b> Tenha uma visão clara do seu faturamento, incluindo taxas de entrega, para tomar decisões mais inteligentes.
      </p>
      <p className="text-base md:text-inherit">
        <b>Acompanhar Pedidos em Tempo Real:</b> Saiba exatamente quantos pedidos foram realizados e entregues no dia, mantendo tudo sob controle.
      </p>
      <p className="text-base md:text-inherit">
        <b>Calcular o Ticket Médio:</b> Descubra o valor médio por pedido e identifique oportunidades para aumentar seu lucro.
      </p>
      <p className="text-base md:text-inherit">
        <b>Analisar a Taxa de Sucesso:</b> Entenda a porcentagem de pedidos completos e otimize suas operações para melhorar a eficiência.
      </p>
      <p className="text-base md:text-inherit">
        <b>Visualizar Vendas Diárias:</b> Acompanhe o desempenho das suas vendas ao longo do tempo com gráficos intuitivos e detalhados.
      </p>
      <p className="text-base md:text-inherit">
        <b>Avaliar o Desempenho dos Produtos:</b> Descubra quais itens são os mais vendidos e ajuste seu cardápio para maximizar o sucesso.
      </p>
    </div>
    <Link target="blank" className="w-full md:w-1/2 text-lg bg-black text-white text-center p-2 rounded-md font-bold shadow-md " href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMwXRezoZb3zl8wc9rDZ28uVCbg_BSeVRDMR5OPG59GTqOD8FbNKEh6_sKxH8bXEJB7W7Db0I">
            Solicite orçamento agora!
    </Link>
  </div>
      </section>
      
      {/* contato */}

      <section ref={contactRef} id='contact' className="w-full bg-background py-16 md:py-24 rounded-md">
  <div className="container mx-auto px-4 md:px-6 max-w-6xl">
    <div className="flex flex-col md:flex-row gap-12 md:gap-16">
      {/* Texto e informações */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Fale conosco e leve o GuaiaDelivery para seu negócio
        </h2>
        <p className="text-lg text-gray-600">
          Tire suas dúvidas, solicite um orçamento ou agende uma demonstração do nosso sistema.
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
              <h3 className="font-medium text-gray-900">Central de Vendas</h3>
              <Link target="blank" className="underline" href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3pMwXRezoZb3zl8wc9rDZ28uVCbg_BSeVRDMR5OPG59GTqOD8FbNKEh6_sKxH8bXEJB7W7Db0I'>Clique aqui para agendar um atendimento</Link>
            </div>
          </div>
            <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-full">
             <MonitorCog className="h-6 w-6 text-gray-900" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Suporte Técnico</h3>
              <Link target="blank" className="text-gray-600" href="mailto:exemplo@exemplo.com?subject=Contato%20sobre%20produto">support@guaiamumdigital.zohodesk.com</Link>
            </div>
          </div>
      
        </div>
      </div>
      
    </div>
  </div>
      </section>
      <footer className="bg-gray-50 text-gray-800 pt-16 pb-8 rounded-md">
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
          O GuaiaDelivery é a solução completa para restaurantes que querem ter seu próprio app de delivery, sem taxas abusivas e com controle total do negócio.
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