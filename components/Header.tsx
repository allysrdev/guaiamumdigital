"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScroll } from "@/contexts/scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const { scrollTo } = useScroll();

  const sectionMap: Record<string, string> = {
    Início: "start",
    Portfólio: "portfolio",
    Serviços: "services",
    Processo: "process",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Dynamic Contrast Detection
      // We check if the scroll is over sections that are dark (like the 'process' or 'contact' sections)
      const processSection = document.getElementById("process");
      const contactSection = document.getElementById("contact");

      const isOverProcess =
        processSection &&
        scrollY >= processSection.offsetTop - 80 &&
        scrollY < processSection.offsetTop + processSection.offsetHeight - 80;

      const isOverContact =
        contactSection &&
        scrollY >= contactSection.offsetTop - 80 &&
        scrollY < contactSection.offsetTop + contactSection.offsetHeight - 80;

      setIsDarkSection(!!(isOverProcess || isOverContact));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", id: "start" },
    { label: "Portfólio", id: "portfolio" },
    { label: "Serviços", id: "services" },
    { label: "Processo", id: "process" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          layout
          className={`flex justify-between items-center transition-all duration-700 px-6 md:px-8 rounded-full border ${
            scrolled
              ? isDarkSection
                ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] py-3"
                : "bg-white/60 backdrop-blur-2xl border-black/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] py-3"
              : "py-0 border-transparent"
          }`}
        >
          <Link href="/" className="cursor-pointer group relative">
            <Image
              src="/logogd-nobg.png"
              alt="Guaiamum Digital Logo"
              width={160}
              height={50}
              className={`w-28 md:w-36 transition-all duration-500 group-hover:scale-105 ${
                scrolled && isDarkSection ? "invert brightness-200" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollTo(
                    item === "Início"
                      ? "start"
                      : item
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, ""),
                  )
                }
                className={`cursor-pointer relative px-5 py-2 text-sm font-bold tracking-tight transition-all duration-500 group overflow-hidden ${
                  scrolled && isDarkSection
                    ? "text-white/50 hover:text-white"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full ${
                    isDarkSection ? "bg-white/10" : "bg-black/5"
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className={` cursor-pointer ml-6 px-7 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-500 hover:-translate-y-0.5 active:scale-95 ${
                scrolled && isDarkSection
                  ? "bg-white text-black hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)]"
                  : "bg-black text-white hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)]"
              }`}
            >
              Agendar Consultoria
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled && isDarkSection
                ? "text-white/80 hover:text-white"
                : "text-foreground/80 hover:text-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 md:hidden flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-10 px-6"
            >
              {["Início", "Portfólio", "Serviços", "Processo"].map(
                (item, i) => (
                  <button
                    key={item}
                    className="text-4xl font-bold tracking-tighter"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollTo(
                        item === "Início"
                          ? "start"
                          : item
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, ""),
                      );
                    }}
                  >
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {item}
                    </motion.span>
                  </button>
                ),
              )}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 px-12 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full text-xl font-bold"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollTo("contact");
                }}
              >
                Iniciar Projeto
              </motion.button>
            </motion.div>
            <button
              className="absolute top-8 right-8 p-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
