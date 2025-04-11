import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "@/contexts/scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guaiamum Digital - Seu Próprio App de Delivery sem Taxas Abusivas",
  description: "Liberte seu restaurante das altas taxas do iFood! O GuaiaDelivery da Guaiamum Digital oferece um app de delivery personalizado para seu negócio, com controle total e sem intermediários. Tenha seu próprio sistema de entregas e aumente seus lucros!",
  keywords: [
    "app de delivery para restaurantes",
    "sistema próprio de delivery",
    "como fugir do iFood",
    "app delivery personalizado",
    "GuaiaDelivery",
    "taxas de delivery",
    "app para restaurante",
    "delivery independente",
    "plataforma de delivery própria",
    "Guaiamum Digital"
  ],
  openGraph: {
    title: "Guaiamum Digital - Solução de Delivery Independente para Restaurantes",
    description: "Tenha seu próprio app de delivery e escape das taxas altas do iFood com a Guaiamum Digital. Solução completa para restaurantes e estabelecimentos alimentícios.",
    url: "https://www.guaiamumdigital.com.br",
    siteName: "Guaiamum Digital",
    images: [
      {
        url: "https://www.guaiamumdigital.com.br/logogd-nobg.png",
        width: 1200,
        height: 630,
        alt: "Guaiamum Digital - App de Delivery Independente",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:px-28 py-10`}
      >
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
