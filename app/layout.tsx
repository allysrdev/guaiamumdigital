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
  title: "Guaiamum Digital | Premium Digital Studio",
  description: "Elevamos sua presença digital ao nível global. Projetamos experiências digitais de alta performance para marcas que exigem excelência, sofisticação e resultados exponenciais.",
  keywords: [
    "estúdio digital premium",
    "desenvolvimento web high ticket",
    "design de luxo para tecnologia",
    "consultoria digital estratégica",
    "Guaiamum Digital",
    "soluções web exclusivas",
    "branding digital premium"
  ],
  openGraph: {
    title: "Guaiamum Digital | Premium Digital Studio",
    description: "Transformamos marcas através de design refinado e tecnologia de ponta. Experiências digitais que convertem.",
    url: "https://www.guaiamumdigital.com.br",
    siteName: "Guaiamum Digital",
    images: [
      {
        url: "https://www.guaiamumdigital.com.br/logogd-nobg.png",
        width: 1200,
        height: 630,
        alt: "Guaiamum Digital - Premium Digital Studio",
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-foreground min-h-screen`}
      >
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
